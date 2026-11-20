import React from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  vx: number;
  vy: number;
  color: string;
}

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  enableShockwave?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  enableShockwave = true,
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -70, y: 0, scale: 0.95 };
      case 'right':
        return { opacity: 0, x: 70, y: 0, scale: 0.95 };
      case 'scale':
        return { opacity: 0, x: 0, y: 0, scale: 0.88 };
      case 'up':
      default:
        return { opacity: 0, y: 60, x: 0, scale: 0.96 };
    }
  };

  const particles: Particle[] = Array.from({ length: 12 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 12;
    const speed = 45 + (i % 3) * 20;
    return {
      id: i,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: i % 2 === 0 ? '#efe72f' : '#ffffff',
    };
  });

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.75,
          delay: delayMs / 1000,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: '-60px' }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Atomic Nuclear Explosion & Shockwave upon inView */}
      {enableShockwave && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-visible z-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Radial Shockwave Pulse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.9, boxShadow: '0 0 0 0 rgba(239, 231, 47, 0.6)' }}
            whileInView={{
              scale: 1.08,
              opacity: 0,
              boxShadow: '0 0 80px 25px rgba(239, 231, 47, 0)',
              transition: { duration: 0.85, delay: delayMs / 1000, ease: 'easeOut' },
            }}
            viewport={{ once: true }}
            className="absolute inset-0 rounded-[28px] pointer-events-none"
          />

          {/* Fission sparks exploding outwards */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1.5 }}
              whileInView={{
                x: p.vx,
                y: p.vy,
                opacity: 0,
                scale: 0,
                transition: { duration: 0.8, delay: delayMs / 1000, ease: [0.16, 1, 0.3, 1] },
              }}
              viewport={{ once: true }}
              style={{
                left: '50%',
                top: '50%',
                backgroundColor: p.color,
                boxShadow: `0 0 8px ${p.color}`,
              }}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
            />
          ))}
        </motion.div>
      )}

      {children}
    </motion.div>
  );
};
