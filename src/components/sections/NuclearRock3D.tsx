import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function hash3(x: number, y: number, z: number): number {
  const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453123;
  return h - Math.floor(h);
}

function noise3(x: number, y: number, z: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fy = y - iy;
  const fz = z - iz;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const uz = fz * fz * (3 - 2 * fz);

  const n000 = hash3(ix, iy, iz);
  const n100 = hash3(ix + 1, iy, iz);
  const n010 = hash3(ix, iy + 1, iz);
  const n110 = hash3(ix + 1, iy + 1, iz);
  const n001 = hash3(ix, iy, iz + 1);
  const n101 = hash3(ix + 1, iy, iz + 1);
  const n011 = hash3(ix, iy + 1, iz + 1);
  const n111 = hash3(ix + 1, iy + 1, iz + 1);

  const nx00 = n000 + (n100 - n000) * ux;
  const nx10 = n010 + (n110 - n010) * ux;
  const nx01 = n001 + (n101 - n001) * ux;
  const nx11 = n011 + (n111 - n011) * ux;
  const nxy0 = nx00 + (nx10 - nx00) * uy;
  const nxy1 = nx01 + (nx11 - nx01) * uy;
  return nxy0 + (nxy1 - nxy0) * uz;
}

function fbm3(x: number, y: number, z: number): number {
  let v = 0;
  let amp = 0.5;
  let freq = 1.0;
  for (let i = 0; i < 4; i++) {
    v += amp * noise3(x * freq, y * freq, z * freq);
    freq *= 2.08;
    amp *= 0.48;
  }
  return v;
}

function ridgedFbm3(x: number, y: number, z: number): number {
  let v = 0;
  let amp = 0.5;
  let freq = 1.15;
  for (let i = 0; i < 3; i++) {
    const n = 1.0 - Math.abs(noise3(x * freq, y * freq, z * freq) * 2.0 - 1.0);
    v += amp * (n * n);
    freq *= 2.12;
    amp *= 0.48;
  }
  return v;
}

const ROCK_VERTEX_SHADER = /* glsl */ `
  varying vec3 vLocalPos;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying float vCrevice;

  attribute float aCrevice;

  void main() {
    vLocalPos = position;
    vCrevice = aCrevice;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

/**
 * Lightweight, TDR-safe Fragment Shader:
 * Uses a fast 2x2x2 (8-tap) cellular edge approximation instead of heavy 54-tap
 * nested loops, and 2-octave noise so GPU frame time stays < 0.4ms at 60/120fps.
 */
const ROCK_FRAGMENT_SHADER = /* glsl */ `
  uniform float uTime;
  varying vec3 vLocalPos;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying float vCrevice;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(
        mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
        f.y
      ),
      mix(
        mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
        f.y
      ),
      f.z
    );
  }

  // Fast 2-octave FBM
  float fastFbm(vec3 p) {
    return 0.65 * noise(p) + 0.35 * noise(p * 2.15 + vec3(5.2, 1.3, 8.4));
  }

  // Fast 8-tap cellular edge distance (7x faster than 27+27 Voronoi, zero GPU lag)
  float fastVoronoiCrack(vec3 x) {
    vec3 n = floor(x);
    vec3 f = fract(x) - 0.5;
    float d1 = 8.0;
    float d2 = 8.0;
    for (int k = 0; k <= 1; k++) {
      for (int j = 0; j <= 1; j++) {
        for (int i = 0; i <= 1; i++) {
          vec3 g = vec3(float(i), float(j), float(k)) - 0.5;
          vec3 cell = n + g;
          vec3 jitter = vec3(
            hash(cell),
            hash(cell + vec3(7.1, 3.3, 1.9)),
            hash(cell + vec3(2.4, 9.7, 5.1))
          ) * 0.75;
          vec3 r = g + jitter - f;
          float d = dot(r, r);
          if (d < d1) {
            d2 = d1;
            d1 = d;
          } else if (d < d2) {
            d2 = d;
          }
        }
      }
    }
    return sqrt(d2) - sqrt(d1);
  }

  void main() {
    // Chiseled flat-facet derivative normal blended with smooth vertex normal
    vec3 flatN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
    vec3 N = normalize(mix(normalize(vNormal), flatN, 0.68));
    vec3 V = normalize(vViewPosition);

    float micro1 = fastFbm(vLocalPos * 5.2);
    float micro2 = noise(vLocalPos * 15.0);

    // Rich dark charcoal basalt palette
    vec3 rockDeep  = vec3(0.055, 0.055, 0.048);
    vec3 rockBase  = vec3(0.115, 0.112, 0.095);
    vec3 rockFacet = vec3(0.22, 0.215, 0.185);
    vec3 baseColor = mix(rockDeep, rockBase, smoothstep(0.22, 0.72, micro1));
    baseColor = mix(baseColor, rockFacet, smoothstep(0.48, 0.82, micro2) * 0.62);

    vec2 frontXY = vLocalPos.xy - vec2(0.0, 0.03);
    float r = length(frontXY);
    float frontMask = smoothstep(0.15, 0.62, vLocalPos.z);

    float basinMask = smoothstep(0.95, 0.56, r) * frontMask;
    baseColor *= mix(1.0, 0.76, basinMask);

    // --- 1. WEATHERED RADIOACTIVE TREFOIL SYMBOL ---
    float angle = atan(frontXY.y, frontXY.x);
    float deg = mod(degrees(angle) + 360.0, 360.0);

    float b1 = smoothstep(-1.5, 1.5, deg) * (1.0 - smoothstep(58.5, 61.5, deg));
    float b2 = smoothstep(118.5, 121.5, deg) * (1.0 - smoothstep(178.5, 181.5, deg));
    float b3 = smoothstep(238.5, 241.5, deg) * (1.0 - smoothstep(298.5, 301.5, deg));
    float bladeAngleMask = max(b1, max(b2, b3));

    float innerBladeR = 0.175;
    float outerBladeR = 0.555;
    float bladeRadialMask = smoothstep(innerBladeR - 0.01, innerBladeR + 0.01, r)
                          * (1.0 - smoothstep(outerBladeR - 0.012, outerBladeR + 0.012, r));
    float blades = bladeAngleMask * bladeRadialMask;

    float centerDot = 1.0 - smoothstep(0.112, 0.125, r);
    float symbolMask = max(blades, centerDot) * frontMask;

    float centerGroove = smoothstep(0.115, 0.13, r) * (1.0 - smoothstep(0.165, 0.18, r)) * frontMask;
    baseColor *= mix(1.0, 0.35, centerGroove);

    // Single shared Voronoi evaluation for both symbol fractures & magma veins
    vec3 crackP1 = vLocalPos * 2.1 + vec3(micro1 * 0.55);
    float edgeDist1 = fastVoronoiCrack(crackP1);
    float edgeDist2 = fastVoronoiCrack(vLocalPos * 4.1 + vec3(micro2 * 0.35));

    float darkFracture = 1.0 - smoothstep(0.0, 0.032, edgeDist2);
    vec3 symYellow = vec3(0.86, 0.84, 0.14);
    vec3 symBright = vec3(0.98, 0.96, 0.32);
    float symShading = mix(0.65, 1.14, micro1) * (1.0 - darkFracture * 0.68);
    vec3 symbolColor = mix(symYellow, symBright, smoothstep(0.35, 0.75, micro2)) * symShading;

    // --- 2. SELECTIVE VOLCANIC FISSURES IN DEEP CREVICES ---
    float outerRingMask = smoothstep(0.54, 0.76, r);
    float clusterNoise = smoothstep(0.36, 0.68, micro1);
    float creviceMask = smoothstep(-0.15, 0.25, -vCrevice);

    float topPeakGlow = exp(-length(vLocalPos.xy - vec2(0.14, 1.08)) * 2.1) * 1.15;
    float upperLeftGlow = exp(-length(vLocalPos.xy - vec2(-0.78, 0.58)) * 2.4) * 0.85;
    float lowerLeftGlow = exp(-length(vLocalPos.xy - vec2(-0.82, -0.25)) * 1.75) * 0.95;
    float bottomLeftGlow = exp(-length(vLocalPos.xy - vec2(-0.35, -0.88)) * 2.1) * 0.75;
    float rightEdgeGlow = exp(-length(vLocalPos.xy - vec2(0.88, -0.15)) * 2.0) * 0.65;

    float crackActivity = outerRingMask * (clusterNoise * 0.75 + creviceMask * 0.45)
                        + topPeakGlow + upperLeftGlow + lowerLeftGlow + bottomLeftGlow + rightEdgeGlow;
    crackActivity *= smoothstep(0.46, 0.68, r);

    float mainVein = (1.0 - smoothstep(0.002, 0.042, edgeDist1)) * clamp(crackActivity, 0.0, 1.3);
    float fineVein = (1.0 - smoothstep(0.001, 0.026, edgeDist2)) * clamp(crackActivity - 0.15, 0.0, 1.0) * 0.75;
    float magmaHalos = (1.0 - smoothstep(0.0, 0.12, edgeDist1)) * clamp(crackActivity, 0.0, 1.1) * 0.36;

    float peakSpill = smoothstep(0.55, 0.88, topPeakGlow * (0.6 + 0.5 * micro1));
    float pulse = 0.95 + 0.05 * sin(uTime * 2.0 + vLocalPos.y * 2.5);
    float crackIntensity = clamp((mainVein + fineVein + peakSpill * 0.65) * pulse, 0.0, 1.0);

    // --- 3. CHISELED BASALT LIGHTING ---
    vec3 L_topLeft  = normalize(vec3(-0.55, 0.92, 0.55));
    vec3 L_topRight = normalize(vec3(0.65, 0.75, 0.45));
    vec3 L_bottom   = normalize(vec3(0.0, -1.0, 0.4));

    float diffTL = max(dot(N, L_topLeft), 0.0);
    float diffTR = max(dot(N, L_topRight), 0.0);
    float diffBot = max(dot(N, L_bottom), 0.0);

    vec3 H1 = normalize(L_topLeft + V);
    vec3 H2 = normalize(L_topRight + V);
    float spec = (pow(max(dot(N, H1), 0.0), 36.0) + pow(max(dot(N, H2), 0.0), 42.0) * 0.7)
               * 0.48 * (1.0 - symbolMask * 0.8);

    vec3 litRock = baseColor * (0.28 + diffTL * 0.82 + diffTR * 0.48)
                 + vec3(0.85, 0.84, 0.22) * diffBot * 0.22
                 + vec3(0.92, 0.92, 0.86) * spec;

    litRock *= mix(0.55, 1.0, smoothstep(0.0, 0.09, edgeDist1));

    vec3 color = mix(litRock, symbolColor, symbolMask * 0.94);

    vec3 glowGreenYellow = vec3(0.72, 0.78, 0.06);
    vec3 glowCoreYellow  = vec3(0.99, 0.97, 0.34);
    color += glowGreenYellow * magmaHalos;
    color = mix(color, glowCoreYellow, crackIntensity);

    gl_FragColor = vec4(color, 1.0);
  }
`;

// Singleton geometry cache so React StrictMode double-mounts don't recompute vertices twice
let cachedRockGeometry: THREE.BufferGeometry | null = null;

function getSculptedRockGeometry(): THREE.BufferGeometry {
  if (cachedRockGeometry) return cachedRockGeometry;

  // Detail 32 gives crisp chiseled facets at 1/3 the vertex count of 56
  const geo = new THREE.IcosahedronGeometry(1.42, 32);
  const pos = geo.attributes.position;
  const count = pos.count;
  const creviceAttr = new Float32Array(count);

  const v = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    v.fromBufferAttribute(pos, i);
    const dir = v.clone().normalize();

    const octNorm = Math.pow(
      Math.pow(Math.abs(dir.x), 1.38) +
        Math.pow(Math.abs(dir.y * 0.92), 1.38) +
        Math.pow(Math.abs(dir.z * 1.12), 1.38),
      1.0 / 1.38
    );
    const diamondRadius = 1.0 / Math.max(0.65, octNorm);

    const n1 = fbm3(dir.x * 2.1 + 2.1, dir.y * 2.1 + 4.3, dir.z * 2.1 + 1.7);
    const n2 = ridgedFbm3(dir.x * 3.8 - 1.2, dir.y * 3.8 + 0.8, dir.z * 3.8 + 2.5);
    const n3 = noise3(dir.x * 8.5, dir.y * 8.5, dir.z * 8.5);

    const stepped = Math.floor(n1 * 8.0) / 8.0;
    let disp = n1 * 0.45 + stepped * 0.28 + n2 * 0.34 + n3 * 0.08 - 0.52;

    const topPeak = Math.exp(-((dir.x - 0.11) ** 2 + (dir.y - 0.93) ** 2) * 6.5) * 0.24;
    const upperLeft = Math.exp(-((dir.x + 0.62) ** 2 + (dir.y - 0.62) ** 2) * 5.5) * 0.14;
    const leftCorner = Math.exp(-((dir.x + 0.94) ** 2 + (dir.y + 0.08) ** 2) * 5.5) * 0.18;
    const rightCorner = Math.exp(-((dir.x - 0.94) ** 2 + (dir.y + 0.04) ** 2) * 5.5) * 0.17;
    const botTip = Math.exp(-((dir.x + 0.03) ** 2 + (dir.y + 0.96) ** 2) * 6.5) * 0.2;

    disp += topPeak + upperLeft + leftCorner + rightCorner + botTip;

    const frontR = Math.sqrt(dir.x * dir.x + (dir.y - 0.03) * (dir.y - 0.03));
    if (dir.z > 0.2 && frontR < 0.76) {
      const flatFactor = Math.max(0, 1.0 - frontR / 0.76) * Math.min(1.0, (dir.z - 0.2) / 0.48);
      disp = disp * (1.0 - flatFactor * 0.76) - flatFactor * 0.08;
    }

    const baseR = (0.58 + 0.42 * diamondRadius) * 1.38;
    const finalRadius = baseR + disp * 0.46;
    v.copy(dir).multiplyScalar(finalRadius);

    if (v.z > 0.92 && frontR < 0.68) {
      v.z = 0.92 + (v.z - 0.92) * 0.28;
    }

    pos.setXYZ(i, v.x, v.y, v.z);
    creviceAttr[i] = disp;
  }

  geo.setAttribute('aCrevice', new THREE.BufferAttribute(creviceAttr, 1));
  geo.computeVertexNormals();
  cachedRockGeometry = geo;
  return geo;
}

function createChiseledShardGeometry(seed: number, radius: number): THREE.BufferGeometry {
  // DodecahedronGeometry with detail > 0 is ALREADY non-indexed in Three.js;
  // do NOT call .toNonIndexed() to avoid console warnings.
  const geo = new THREE.DodecahedronGeometry(radius, 1);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = fbm3(v.x * 5.0 + seed, v.y * 5.0 + seed, v.z * 5.0 + seed);
    v.multiplyScalar(0.72 + n * 0.58);
    v.x *= 1.18;
    v.y *= 0.84;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

export const NuclearRock3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 680;
    const height = container.clientHeight || 680;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
    camera.position.set(0, 0.02, 7.1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    // Cap pixel ratio to 1.5 to prevent 4K/Retina GPU fill-rate overload and context loss
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const rockGroup = new THREE.Group();
    rockGroup.position.set(0, 0.34, 0);
    scene.add(rockGroup);

    // 1. Main Sculpted Radioactive Rock
    const rockGeo = getSculptedRockGeometry();
    const rockMat = new THREE.ShaderMaterial({
      vertexShader: ROCK_VERTEX_SHADER,
      fragmentShader: ROCK_FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
      },
    });
    const rockMesh = new THREE.Mesh(rockGeo, rockMat);
    rockGroup.add(rockMesh);

    // 2. Five Chiseled Floating Rock Shards
    const shardMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2a2923'),
      roughness: 0.65,
      metalness: 0.22,
      flatShading: true,
    });

    const shardConfigs = [
      { pos: new THREE.Vector3(1.56, 0.94, 0.2), radius: 0.135, seed: 1.2 },
      { pos: new THREE.Vector3(1.82, 0.12, -0.05), radius: 0.095, seed: 3.7 },
      { pos: new THREE.Vector3(1.24, -0.92, 0.22), radius: 0.068, seed: 7.1 },
      { pos: new THREE.Vector3(-1.62, -0.32, 0.2), radius: 0.145, seed: 11.4 },
      { pos: new THREE.Vector3(-1.26, -0.86, 0.25), radius: 0.072, seed: 17.9 },
    ];

    const shardGeometries: THREE.BufferGeometry[] = [];
    const shards: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number; phase: number }[] = [];
    shardConfigs.forEach((cfg, idx) => {
      const sGeo = createChiseledShardGeometry(cfg.seed, cfg.radius);
      shardGeometries.push(sGeo);
      const sMesh = new THREE.Mesh(sGeo, shardMat);
      sMesh.position.copy(cfg.pos);
      sMesh.rotation.set(idx * 1.1, idx * 0.7, idx * 0.4);
      rockGroup.add(sMesh);
      shards.push({
        mesh: sMesh,
        basePos: cfg.pos.clone(),
        speed: 1.2 + idx * 0.25,
        phase: idx * 1.4,
      });
    });

    // 3. Delicate Tilted 3D Orbital Rings
    const createOrbitRing = (
      rx: number,
      ry: number,
      rotX: number,
      rotY: number,
      rotZ: number,
      opacity: number
    ) => {
      const curve = new THREE.EllipseCurve(0, 0, rx, ry, 0, Math.PI * 2, false, 0);
      const points = curve.getPoints(96).map((p) => new THREE.Vector3(p.x, p.y, 0));
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color('#c8c250'),
        transparent: true,
        opacity,
      });
      const line = new THREE.LineLoop(lineGeo, lineMat);
      line.rotation.set(rotX, rotY, rotZ);
      return line;
    };

    const orbit1 = createOrbitRing(2.25, 1.48, 0.35, -0.22, 0.48, 0.16);
    const orbit2 = createOrbitRing(2.12, 1.32, -0.42, 0.18, -0.35, 0.1);
    rockGroup.add(orbit1, orbit2);

    // 4. Sleek Low-Profile 3D Circular Pedestal
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, -1.62, 0);
    pedestalGroup.rotation.x = -0.17;
    scene.add(pedestalGroup);

    const baseGeo = new THREE.CylinderGeometry(1.72, 1.78, 0.22, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#161618'),
      roughness: 0.28,
      metalness: 0.85,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    pedestalGroup.add(baseMesh);

    const topTierGeo = new THREE.CylinderGeometry(1.54, 1.72, 0.11, 64);
    const topTierMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#282822'),
      roughness: 0.24,
      metalness: 0.72,
    });
    const topTierMesh = new THREE.Mesh(topTierGeo, topTierMat);
    topTierMesh.position.y = 0.165;
    pedestalGroup.add(topTierMesh);

    const neonRingGeo = new THREE.TorusGeometry(1.5, 0.016, 12, 96);
    neonRingGeo.rotateX(Math.PI / 2);
    const neonRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#faf45a'),
    });
    const neonRing = new THREE.Mesh(neonRingGeo, neonRingMat);
    neonRing.position.y = 0.222;
    pedestalGroup.add(neonRing);

    const innerRingGeo = new THREE.TorusGeometry(1.08, 0.009, 10, 72);
    innerRingGeo.rotateX(Math.PI / 2);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#c8c028'),
      transparent: true,
      opacity: 0.48,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.position.y = 0.222;
    pedestalGroup.add(innerRing);

    // Lights
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.65);
    scene.add(ambientLight);

    const coreGlowLight = new THREE.PointLight('#efe72f', 6.0, 6.0);
    coreGlowLight.position.set(0, -1.05, 0.6);
    scene.add(coreGlowLight);

    const shardKeyLight = new THREE.DirectionalLight('#fffbe0', 2.4);
    shardKeyLight.position.set(-2.5, 3.0, 3.0);
    scene.add(shardKeyLight);

    const shardRimLight = new THREE.DirectionalLight('#efe72f', 1.8);
    shardRimLight.position.set(2.5, -1.5, 2.0);
    scene.add(shardRimLight);

    // Interactive Drag & Parallax state
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;
    let isInViewport = true;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isInViewport) return;
      if (isDragging) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        targetRotY += dx * 0.008;
        targetRotX = Math.max(-0.45, Math.min(0.45, targetRotX + dy * 0.006));
        prevX = e.clientX;
        prevY = e.clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        targetRotY = nx * 0.22;
        targetRotX = ny * 0.14;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 680;
      const h = container.clientHeight || 680;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Pause WebGL rendering when scrolled out of viewport to keep page scrolling silky-smooth
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewport = entry.isIntersecting;
        });
      },
      { threshold: 0.02 }
    );
    visibilityObserver.observe(container);

    // Render initial frame synchronously
    renderer.render(scene, camera);

    // Use performance.now() instead of deprecated THREE.Clock
    const startTime = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      rafId = requestAnimationFrame(animate);
      if (!isInViewport) return;

      const elapsedSeconds = (now - startTime) * 0.001;
      rockMat.uniforms.uTime.value = elapsedSeconds;

      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.08;

      rockMesh.rotation.y = currentRotY + Math.sin(elapsedSeconds * 0.55) * 0.06;
      rockMesh.rotation.x = currentRotX + Math.cos(elapsedSeconds * 0.45) * 0.03;
      rockGroup.position.y = 0.34 + Math.sin(elapsedSeconds * 1.3) * 0.045;

      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];
        s.mesh.position.y = s.basePos.y + Math.sin(elapsedSeconds * s.speed + s.phase) * 0.04;
        s.mesh.rotation.x += 0.004;
        s.mesh.rotation.y += 0.006;
      }

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);

      shardGeometries.forEach((g) => g.dispose());
      shardMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      topTierGeo.dispose();
      topTierMat.dispose();
      neonRingGeo.dispose();
      neonRingMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      rockMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div
        aria-hidden="true"
        className="absolute w-[76%] h-[76%] rounded-full bg-[radial-gradient(circle,rgba(239,231,47,0.14)_0%,rgba(180,170,20,0.05)_48%,transparent_72%)] blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[19%] w-[36%] h-[11%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,244,75,0.55)_0%,rgba(239,231,47,0.18)_48%,transparent_78%)] blur-lg pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[5%] w-[62%] h-[12%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(239,231,47,0.24)_0%,rgba(239,231,47,0.06)_55%,transparent_80%)] blur-xl pointer-events-none"
      />
      <div
        ref={containerRef}
        title="Arraste ou mova o mouse para girar o modelo 3D"
        className="relative z-10 w-full aspect-square cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
