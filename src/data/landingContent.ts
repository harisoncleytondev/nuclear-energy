export interface FissionStep {
  number: string;
  badge: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
}

export interface DebatePoint {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface EnergySourceComparison {
  source: string;
  co2GramsPerKwh: number;
  capacityFactorPercent: number;
  highlight?: boolean;
}

export interface CuriosityItem {
  id: string;
  eyebrow: string;
  title: string;
  highlightWord: string;
  description: string;
  bigStat?: string;
  bigStatUnit?: string;
  span: 'wide' | 'narrow' | 'half';
}

export interface ReferenceItem {
  category: string;
  organization: string;
  title: string;
  year: string;
  summary: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOW_IT_WORKS_STEPS: FissionStep[] = [
  {
    number: '01',
    badge: 'Núcleo Atômico',
    title: 'A Fissão do Urânio-235',
    description:
      'Um nêutron em velocidade controlada atinge o núcleo de um átomo pesado de Urânio-235, tornando-o instável e dividindo-o em dois núcleos menores.',
    metricLabel: 'Energia por fissão',
    metricValue: '200 MeV',
    details: [
      'Liberação instantânea de calor e 2 a 3 novos nêutrons livres',
      'Reação em cadeia controlada por barras absorvedoras de nêutrons',
      'Urânio enriquecido a apenas 3%–5% para uso civil em usinas',
    ],
  },
  {
    number: '02',
    badge: 'Ciclo Termodinâmico',
    title: 'Calor, Vapor e Pressão',
    description:
      'O calor intenso liberado no vaso do reator aquece a água do circuito primário sob alta pressão, transferindo energia térmica para o gerador de vapor sem contato direto.',
    metricLabel: 'Temperatura no circuito',
    metricValue: '~320 °C',
    details: [
      'Circuitos independentes e selados impedem vazamento radioativo',
      'Água do circuito secundário transforma-se em vapor de alta pressão',
      'A fumaça branca das torres é apenas vapor de água limpa resfriada',
    ],
  },
  {
    number: '03',
    badge: 'Geração Contínua',
    title: 'Turbinas e Eletricidade de Base',
    description:
      'O vapor aciona turbinas conectadas a um gerador elétrico, produzindo energia limpa 24 horas por dia, independentemente de sol, vento ou chuvas.',
    metricLabel: 'Fator de capacidade',
    metricValue: '92,5%',
    details: [
      'Operação ininterrupta por 12 a 18 meses entre recargas',
      'Zero emissão de gases de efeito estufa durante a geração',
      'Estabilidade crítica para hospitais, indústrias e grandes centros',
    ],
  },
];

export const DEBATE_PROS: DebatePoint[] = [
  {
    title: 'Altíssima Densidade Energética',
    description:
      'Uma única pastilha de combustível de urânio do tamanho da ponta de um dedo gera a mesma eletricidade que 1 tonelada de carvão mineral.',
    stat: '10 g = 1 t',
    statLabel: 'Pastilha de U-235 vs. Carvão',
  },
  {
    title: 'Aliada da Descarbonização',
    description:
      'Ao longo de todo o ciclo de vida, a energia nuclear emite tanto CO₂ por kWh quanto a energia eólica, e menos que a solar fotovoltaica.',
    stat: '12 gCO₂',
    statLabel: 'Emissão média por kWh gerado',
  },
  {
    title: 'Confiabilidade e Segurança de Rede',
    description:
      'Diferente de fontes intermitentes, reatores nucleares operam em carga máxima dia e noite, evitando apagões e uso de termelétricas a gás.',
    stat: '24/7',
    statLabel: 'Geração firme sem intermitência',
  },
];

export const DEBATE_CONS: DebatePoint[] = [
  {
    title: 'Gestão de Resíduos Radioativos',
    description:
      'O combustível usado de alto nível exige resfriamento em piscinas especiais e armazenamento geológico profundo seguro por milhares de anos.',
    stat: '10.000+',
    statLabel: 'Anos de isolamento necessário',
  },
  {
    title: 'Acidentes de Alto Impacto',
    description:
      'Embora raros na história (Chernobyl em 1986 e Fukushima em 2011), acidentes severos deixam zonas de exclusão e forte impacto psicológico e ambiental.',
    stat: 'Nível 7',
    statLabel: 'Escala Internacional de Eventos (INES)',
  },
  {
    title: 'Custos e Tempo de Construção',
    description:
      'A complexidade regulatória e os sistemas redundantes de contenção exigem investimentos bilionários e prazos de 8 a 12 anos por usina.',
    stat: 'US$ 6–9 bi',
    statLabel: 'Investimento inicial médio por reator',
  },
];

export const ENERGY_COMPARISON: EnergySourceComparison[] = [
  { source: 'Nuclear', co2GramsPerKwh: 12, capacityFactorPercent: 93, highlight: true },
  { source: 'Eólica', co2GramsPerKwh: 11, capacityFactorPercent: 35 },
  { source: 'Hidrelétrica', co2GramsPerKwh: 24, capacityFactorPercent: 52 },
  { source: 'Solar Fotovoltaica', co2GramsPerKwh: 45, capacityFactorPercent: 25 },
  { source: 'Gás Natural', co2GramsPerKwh: 490, capacityFactorPercent: 57 },
  { source: 'Carvão Mineral', co2GramsPerKwh: 820, capacityFactorPercent: 54 },
];

export const CURIOSITIES_ITEMS: CuriosityItem[] = [
  {
    id: 'pellet',
    eyebrow: 'EQUIVALÊNCIA ENERGÉTICA',
    title: 'O poder concentrado em uma pastilha de',
    highlightWord: '10 gramas',
    description:
      'Uma única pastilha cilíndrica de dióxido de urânio (UO₂) com apenas 1 cm de altura produz a mesma quantidade de energia que 1.000 kg de carvão, 480 m³ de gás natural ou 3 barris de petróleo.',
    bigStat: '1 : 100.000',
    bigStatUnit: 'Proporção de massa de combustível (Urânio vs. Fósseis)',
    span: 'wide',
  },
  {
    id: 'cooling-towers',
    eyebrow: 'MITO POPULAR',
    title: 'As torres expelem apenas',
    highlightWord: 'vapor d’água',
    description:
      'Aquela nuvem branca icônica que sai das torres hiperbólicas não tem radiação nem fumaça tóxica: é 100% vapor de água limpa do sistema de resfriamento.',
    bigStat: '100% H₂O',
    bigStatUnit: 'Zero fumaça ou gases poluentes nas torres',
    span: 'narrow',
  },
  {
    id: 'brazil-angra',
    eyebrow: 'CENÁRIO BRASILEIRO',
    title: 'O Brasil domina o ciclo completo do',
    highlightWord: 'combustível',
    description:
      'Com a 7ª maior reserva de urânio do mundo, o Brasil opera as usinas Angra 1 e Angra 2 (gerando ~3% da eletricidade nacional e 40% do consumo do RJ) e é um dos poucos países que dominam o enriquecimento por ultracentrífugas.',
    span: 'half',
  },
  {
    id: 'medicine-space',
    eyebrow: 'ALÉM DA ELETRICIDADE',
    title: 'Medicina nuclear e exploração do',
    highlightWord: 'espaço profundo',
    description:
      'Radioisótopos produzidos em reatores de pesquisa realizam milhões de diagnósticos e tratamentos oncológicos por ano, enquanto baterias nucleares (RTGs) alimentam sondas como Voyager e o rover Perseverance em Marte.',
    span: 'half',
  },
];

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    category: 'Relatório Internacional',
    organization: 'IAEA — Agência Internacional de Energia Atômica',
    title: 'Nuclear Power and the Clean Energy Transition',
    year: '2024',
    summary:
      'Dados oficiais sobre os mais de 410 reatores em operação em 31 países, padrões de segurança pós-Fukushima e projeções de capacidade até 2050.',
    url: 'https://www.iaea.org',
  },
  {
    category: 'Clima & Emissões',
    organization: 'IPCC — Painel Intergovernamental sobre Mudanças Climáticas',
    title: 'AR6 Working Group III: Mitigation of Climate Change',
    year: '2023',
    summary:
      'Avaliação comparativa das emissões de ciclo de vida (gCO₂eq/kWh) das fontes de energia, classificando a nuclear ao lado da eólica como tecnologia de baixíssimo carbono.',
    url: 'https://www.ipcc.ch',
  },
  {
    category: 'Matriz Nacional',
    organization: 'Eletronuclear & CNEN (Brasil)',
    title: 'Panorama da Energia Nuclear no Brasil — Central Nuclear Almirante Álvaro Alberto',
    year: '2024',
    summary:
      'Indicadores operacionais de Angra 1 e Angra 2, licenciamento nuclear, segurança radiológica e tecnologia nacional de enriquecimento isotópico.',
    url: 'https://www.eletronuclear.gov.br',
  },
  {
    category: 'Segurança & Estatística',
    organization: 'Our World in Data / Oxford Martin School',
    title: 'What are the safest and cleanest sources of energy?',
    year: '2024',
    summary:
      'Estudo comparativo de mortalidade por Terawatt-hora (TWh) gerado, demonstrando que a energia nuclear possui uma das menores taxas de letalidade da história energética.',
    url: 'https://ourworldindata.org/safest-sources-of-energy',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Uma usina nuclear pode explodir como uma bomba atômica?',
    answer:
      'Não. Fisicamente é impossível. Armas nucleares exigem urânio enriquecido acima de 90% em uma geometria específica de implosão. Já o combustível de uma usina elétrica possui apenas 3% a 5% de Urânio-235, o que impede qualquer detonação nuclear.',
  },
  {
    question: 'O que é feito com o lixo atômico das usinas?',
    answer:
      'Ao contrário dos combustíveis fósseis (que lançam resíduos na atmosfera), todo o resíduo nuclear é sólido, contido e monitorado. Primeiro as varetas ficam submersas em piscinas de resfriamento blindadas por alguns anos, depois são seladas em cilindros de aço e concreto de alta resistência (dry casks) ou destinadas a repositórios geológicos profundos, como o Onkalo na Finlândia.',
  },
  {
    question: 'Qual a diferença entre fissão nuclear e fusão nuclear?',
    answer:
      'A fissão (usada em todas as usinas atuais) divide núcleos pesados como o Urânio-235 em átomos menores. Já a fusão nuclear (que ocorre no interior do Sol) une núcleos leves de hidrogênio (deutério e trítio) para formar hélio, sendo o foco de projetos experimentais como o ITER.',
  },
];

export const TEAM_MEMBERS = [
  { role: 'Pesquisa & Conceito', name: 'Integrante 1' },
  { role: 'Argumentação & Dados', name: 'Integrante 2' },
  { role: 'Física & Tecnologia', name: 'Integrante 3' },
  { role: 'Meio Ambiente & Segurança', name: 'Integrante 4' },
];
