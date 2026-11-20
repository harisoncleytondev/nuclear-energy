export interface FissionStep {
  number: string;
  badge: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
  sourceLabel: string;
  sourceUrl: string;
}

export interface DebatePoint {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface EnergySourceComparison {
  source: string;
  co2GramsPerKwh: number;
  capacityFactorPercent: number;
  highlight?: boolean;
  sourceLabel: string;
  sourceUrl: string;
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
  sourceLabel: string;
  sourceUrl: string;
}

export interface MediaRecommendationItem {
  type: 'livro' | 'filme' | 'documentario';
  typeLabel: string;
  title: string;
  year: string;
  authorOrDirector: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
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
  sourceLabel: string;
  sourceUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
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
    sourceLabel: 'IAEA - Nuclear Basics',
    sourceUrl: 'https://www.iaea.org/topics/nuclear-power-reactors',
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
    sourceLabel: 'Eletronuclear - Ciclo PWR Angra',
    sourceUrl: 'https://www.eletronuclear.gov.br',
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
    sourceLabel: 'U.S. EIA - Electric Power Monthly',
    sourceUrl: 'https://www.eia.gov/electricity/monthly/',
  },
];

export const DEBATE_PROS: DebatePoint[] = [
  {
    title: 'Altíssima Densidade Energética',
    description:
      'Uma única pastilha de combustível de urânio do tamanho da ponta de um dedo gera a mesma eletricidade que 1 tonelada de carvão mineral ou 3 barris de petróleo.',
    stat: '10 g = 1 t',
    statLabel: 'Pastilha de U-235 vs. Carvão',
    sourceLabel: 'World Nuclear Association (WNA)',
    sourceUrl: 'https://world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/nuclear-fuel-cycle-overview',
  },
  {
    title: 'Aliada da Descarbonização',
    description:
      'Ao longo de todo o ciclo de vida, a energia nuclear emite cerca de 12 gCO₂ por kWh gerado — patamar similar ao da energia eólica e significativamente inferior ao de fontes fósseis.',
    stat: '12 gCO₂',
    statLabel: 'Emissão média por kWh gerado',
    sourceLabel: 'IPCC AR6 WGIII - Lifecycle Emissions',
    sourceUrl: 'https://www.ipcc.ch/report/ar6/wg3/',
  },
  {
    title: 'Confiabilidade e Segurança de Rede',
    description:
      'Diferente de fontes intermitentes climáticas, reatores nucleares operam como carga de base (baseload) com disponibilidade superior a 90% do ano ininterruptamente.',
    stat: '24/7',
    statLabel: 'Geração contínua sem intermitência',
    sourceLabel: 'IAEA PRIS - Reactor Performance',
    sourceUrl: 'https://pris.iaea.org/PRIS/home.aspx',
  },
];

export const DEBATE_CONS: DebatePoint[] = [
  {
    title: 'Gestão de Resíduos Radioativos',
    description:
      'O combustível usado de alto nível exige resfriamento inicial em piscinas blindadas e contenção geológica estável por milhares de anos até declínio da radiotoxidade.',
    stat: '10.000+',
    statLabel: 'Anos de isolamento seguro requerido',
    sourceLabel: 'Posiva Oy - Depósito Geológico Onkalo',
    sourceUrl: 'https://www.posiva.fi/en/',
  },
  {
    title: 'Acidentes de Alto Impacto',
    description:
      'Embora eventos catastróficos sejam raros na história da geração comercial (Chernobyl 1986 e Fukushima 2011), suas consequências provocam evacuações e alto impacto socioeconômico.',
    stat: 'Nível 7',
    statLabel: 'Escala Internacional INES (IAEA)',
    sourceLabel: 'IAEA - International Nuclear Event Scale',
    sourceUrl: 'https://www.iaea.org/resources/databases/ines',
  },
  {
    title: 'Custos e Tempo de Construção',
    description:
      'Altas exigências de segurança e barreiras de contenção redundantes demandam aportes de bilhões de dólares e cronogramas de construção de 7 a 12 anos por usina.',
    stat: 'US$ 6–9 bi',
    statLabel: 'Investimento inicial médio por reator',
    sourceLabel: 'Agência Internacional de Energia (IEA)',
    sourceUrl: 'https://www.iea.org/reports/nuclear-power-and-secure-energy-transitions',
  },
];

export const DEBATE_CONTROVERSIES: DebatePoint[] = [
  {
    title: 'Proliferação Nuclear vs. Uso Civil',
    description:
      'A fronteira tecnológica entre enriquecimento de urânio para reatores civis (3% a 5%) e enriquecimento armamentista (acima de 90%) exige vigilância e salvaguardas internacionais rigorosas.',
    stat: '3% vs 90%',
    statLabel: 'Grau de enriquecimento civil vs. militar',
    sourceLabel: 'Tratado de Não Proliferação (TNP / ONU)',
    sourceUrl: 'https://www.un.org/disarmament/wmd/nuclear/npt/',
  },
  {
    title: 'Taxonomia Verde e Transição Energética',
    description:
      'Governos e blocos econômicos debatem intensamente se a energia nuclear deve receber financiamentos e incentivos sustentáveis de energia limpa (como na Taxonomia da União Europeia).',
    stat: 'UE Taxonomia',
    statLabel: 'Classificação como energia de transição',
    sourceLabel: 'Comissão Europeia - EU Taxonomy Complementary Delegated Act',
    sourceUrl: 'https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en',
  },
  {
    title: 'Retirada de Operação (Decommissioning)',
    description:
      'O descomissionamento de usinas após 40 a 60 anos de atividade envolve logística de alta complexidade, desmontagem radiológica e orçamento bilionário previsto em fundos garantidores.',
    stat: '40 a 60 anos',
    statLabel: 'Vida útil média antes do descomissionamento',
    sourceLabel: 'World Nuclear Association - Decommissioning',
    sourceUrl: 'https://world-nuclear.org/information-library/nuclear-fuel-cycle/nuclear-wastes/decommissioning-nuclear-facilities',
  },
];

export const ENERGY_COMPARISON: EnergySourceComparison[] = [
  {
    source: 'Nuclear',
    co2GramsPerKwh: 12,
    capacityFactorPercent: 93,
    highlight: true,
    sourceLabel: 'IPCC WGIII & U.S. EIA',
    sourceUrl: 'https://www.ipcc.ch/report/ar6/wg3/',
  },
  {
    source: 'Eólica',
    co2GramsPerKwh: 11,
    capacityFactorPercent: 35,
    sourceLabel: 'IPCC WGIII / NREL',
    sourceUrl: 'https://www.nrel.gov/analysis/life-cycle-assessment.html',
  },
  {
    source: 'Hidrelétrica',
    co2GramsPerKwh: 24,
    capacityFactorPercent: 52,
    sourceLabel: 'IPCC WGIII',
    sourceUrl: 'https://www.ipcc.ch/report/ar6/wg3/',
  },
  {
    source: 'Solar Fotovoltaica',
    co2GramsPerKwh: 45,
    capacityFactorPercent: 25,
    sourceLabel: 'IPCC WGIII / NREL',
    sourceUrl: 'https://www.nrel.gov/analysis/life-cycle-assessment.html',
  },
  {
    source: 'Gás Natural',
    co2GramsPerKwh: 490,
    capacityFactorPercent: 57,
    sourceLabel: 'U.S. EIA',
    sourceUrl: 'https://www.eia.gov/tools/faqs/faq.php?id=74&t=11',
  },
  {
    source: 'Carvão Mineral',
    co2GramsPerKwh: 820,
    capacityFactorPercent: 54,
    sourceLabel: 'IPCC WGIII / IEA',
    sourceUrl: 'https://www.iea.org/reports/emissions-factors-2023',
  },
];

export const CURIOSITIES_ITEMS: CuriosityItem[] = [
  {
    id: 'pellet',
    eyebrow: 'EQUIVALÊNCIA ENERGÉTICA',
    title: 'O poder concentrado em uma pastilha de',
    highlightWord: '10 gramas',
    description:
      'Uma única pastilha cilíndrica de dióxido de urânio (UO₂) com cerca de 1 cm de altura produz a mesma energia que 1 tonelada de carvão mineral, 480 m³ de gás natural ou 3 barris de petróleo bruto.',
    bigStat: '1 : 100.000',
    bigStatUnit: 'Proporção de densidade de combustível (Urânio vs. Fósseis)',
    span: 'wide',
    sourceLabel: 'World Nuclear Association (Fuel Comparison)',
    sourceUrl: 'https://world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/nuclear-fuel-cycle-overview',
  },
  {
    id: 'cooling-towers',
    eyebrow: 'MITO POPULAR',
    title: 'As torres expelem apenas',
    highlightWord: 'vapor d’água',
    description:
      'Aquela imensa pluma branca expelida pelas icônicas torres hiperbólicas não possui radiação nem poluentes: é 100% vapor de água pura proveniente do circuito terciário de resfriamento.',
    bigStat: '100% H₂O',
    bigStatUnit: 'Zero fumaça ou gases de efeito estufa emitidos',
    span: 'narrow',
    sourceLabel: 'U.S. NRC - Cooling Towers Information',
    sourceUrl: 'https://www.nrc.gov/reading-rm/basic-ref/glossary/cooling-tower.html',
  },
  {
    id: 'brazil-angra',
    eyebrow: 'CENÁRIO BRASILEIRO',
    title: 'O Brasil domina o ciclo completo do',
    highlightWord: 'combustível',
    description:
      'Com a 7ª maior reserva geológica de urânio do planeta, o Brasil opera Angra 1 e Angra 2 (gerando cerca de 3% da eletricidade do país e 40% de todo o consumo do Rio de Janeiro) através da tecnologia de enriquecimento nacional das INB.',
    span: 'half',
    sourceLabel: 'Indústrias Nucleares do Brasil (INB) & Eletronuclear',
    sourceUrl: 'https://www.inb.gov.br',
  },
  {
    id: 'medicine-space',
    eyebrow: 'ALÉM DA ELETRICIDADE',
    title: 'Medicina nuclear e exploração do',
    highlightWord: 'espaço profundo',
    description:
      'Radioisótopos (como o Molibdênio-99 / Tecnécio-99m) viabilizam dezenas de milhões de exames diagnósticos e tratamentos contra o câncer por ano. No espaço, geradores termoelétricos de radioisótopos (RTGs) alimentam a sonda Voyager e o rover Perseverance em Marte há anos.',
    span: 'half',
    sourceLabel: 'NASA Jet Propulsion Laboratory & IAEA Human Health',
    sourceUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance/spacecraft/rover/power/',
  },
];

export const MEDIA_RECOMMENDATIONS: MediaRecommendationItem[] = [
  {
    type: 'filme',
    typeLabel: 'Filme Histórico',
    title: 'Oppenheimer',
    year: '2023',
    authorOrDirector: 'Direção: Christopher Nolan',
    description:
      'Vencedor de 7 Oscars, retrata o Projeto Manhattan em Los Alamos e as complexas implicações morais, políticas e científicas do nascimento da era atômica liderada por J. Robert Oppenheimer.',
    sourceLabel: 'Universal Pictures / IMDb',
    sourceUrl: 'https://www.imdb.com/title/tt15398776/',
  },
  {
    type: 'documentario',
    typeLabel: 'Documentário',
    title: 'Nuclear Now',
    year: '2022',
    authorOrDirector: 'Direção: Oliver Stone',
    description:
      'Baseado no livro "A Bright Future", o documentário investiga como a energia nuclear civil pode ser uma das principais soluções tecnológicas para enfrentar a crise climática global e descarbonizar a matriz mundial.',
    sourceLabel: 'Nuclear Now Documentary / Abramorama',
    sourceUrl: 'https://www.nuclearnowfilm.com/',
  },
  {
    type: 'documentario',
    typeLabel: 'Minissérie / Docudrama',
    title: 'Chernobyl',
    year: '2019',
    authorOrDirector: 'Criado por Craig Mazin (HBO)',
    description:
      'Aclamada minissérie dramática que reconstitui minuciosamente a sequência de falhas humanas e de projeto no reator RBMK soviético em 1986, ressaltando os custos da negligência e da desinformação.',
    sourceLabel: 'HBO Originals / IMDb',
    sourceUrl: 'https://www.imdb.com/title/tt8462700/',
  },
  {
    type: 'livro',
    typeLabel: 'Livro & Ensaio Científico',
    title: 'Como Evitar um Desastre Climático',
    year: '2021',
    authorOrDirector: 'Autor: Bill Gates (Ed. Companhia das Letras)',
    description:
      'Nesta análise abrangente sobre a corrida rumo às emissões líquidas zero, o autor discute por que reatores nucleares avançados de próxima geração (SMRs / Terrapower) são essenciais para suprir eletricidade confiável e descarbonizada.',
    sourceLabel: 'GatesNotes / Penguin Random House',
    sourceUrl: 'https://www.gatesnotes.com/How-to-Avoid-a-Climate-Disaster',
  },
  {
    type: 'livro',
    typeLabel: 'Livro Clássico',
    title: 'Vozes de Tchernóbil: A História Oral do Desastre',
    year: '1997',
    authorOrDirector: 'Autora: Svetlana Aleksiévitch (Prêmio Nobel de Literatura)',
    description:
      'Monumento literário que reúne centenas de relatos comoventes de bombeiros, médicos, cientistas, liquidadores e civis que enfrentaram em primeira pessoa as consequências humanas do acidente nuclear de 1986.',
    sourceLabel: 'Nobel Prize in Literature / Companhia das Letras',
    sourceUrl: 'https://www.nobelprize.org/prizes/literature/2015/alexievich/facts/',
  },
  {
    type: 'documentario',
    typeLabel: 'Documentário',
    title: 'Pandora’s Promise',
    year: '2013',
    authorOrDirector: 'Direção: Robert Stone',
    description:
      'Apresenta o depoimento de ambientalistas e historiadores que antes eram contrários à energia nuclear e mudaram de posicionamento após analisarem dados de mortalidade comparada e aquecimento global.',
    sourceLabel: 'Impact Partners / CNN Films',
    sourceUrl: 'https://www.imdb.com/title/tt1992193/',
  },
];

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    category: 'Relatório Internacional',
    organization: 'IAEA — Agência Internacional de Energia Atômica',
    title: 'Nuclear Power and the Clean Energy Transition',
    year: '2024',
    summary:
      'Dados oficiais sobre os mais de 410 reatores em operação comercial no mundo, padrões de segurança radiológica, novos reatores modulares pequenos (SMRs) e metas de transição energética.',
    url: 'https://www.iaea.org',
  },
  {
    category: 'Clima & Emissões',
    organization: 'IPCC — Painel Intergovernamental sobre Mudanças Climáticas',
    title: 'AR6 Working Group III: Mitigation of Climate Change',
    year: '2023',
    summary:
      'Avaliação comparativa rigorosa das emissões de gases de efeito estufa no ciclo de vida (gCO₂eq/kWh) de todas as matrizes elétricas mundiais.',
    url: 'https://www.ipcc.ch',
  },
  {
    category: 'Matriz Brasileira',
    organization: 'Eletronuclear & INB (Indústrias Nucleares do Brasil)',
    title: 'Panorama da Central Nuclear Almirante Álvaro Alberto (CNAAA)',
    year: '2024',
    summary:
      'Dados de despacho elétrico de Angra 1 e 2, monitoramento ambiental da baía de Ilha Grande, projeto de Angra 3 e tecnologia ultracentrífuga nacional.',
    url: 'https://www.eletronuclear.gov.br',
  },
  {
    category: 'Segurança & Estatística',
    organization: 'Our World in Data / Oxford Martin School',
    title: 'What are the safest and cleanest sources of energy?',
    year: '2024',
    summary:
      'Meta-análise comparando taxas de mortes atribuíveis à poluição do ar e acidentes industriais por TWh gerado entre fontes fósseis, renováveis e nuclear.',
    url: 'https://ourworldindata.org/safest-sources-of-energy',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Uma usina nuclear pode explodir como uma bomba atômica?',
    answer:
      'Não. É fisicamente impossível. Bombas atômicas utilizam Urânio-235 ou Plutônio com pureza superior a 90% em mecanismo de compressão imediata. Reatores comerciais empregam urânio enriquecido em apenas 3% a 5%, diluído em pastilhas cerâmicas termorresistentes.',
    sourceLabel: 'World Nuclear Association (Safety of Nuclear Power)',
    sourceUrl: 'https://world-nuclear.org/information-library/safety-and-security/safety-of-plants/safety-of-nuclear-power-reactors',
  },
  {
    question: 'O que é feito com o lixo atômico das usinas elétricas?',
    answer:
      'Diferente das termelétricas que dispersam gases e cinzas na atmosfera, 100% dos resíduos sólidos de usinas nucleares são retidos, blindados e catalogados. Após resfriamento em piscinas seladas, são acondicionados em cilindros de aço-concreto (dry casks) ou encaminhados para repositórios geológicos profundos, como o depósito Onkalo na Finlândia.',
    sourceLabel: 'Posiva Finland & IAEA Radioactive Waste Management',
    sourceUrl: 'https://www.iaea.org/topics/radioactive-waste-management',
  },
  {
    question: 'Qual a diferença científica entre fissão nuclear e fusão nuclear?',
    answer:
      'A fissão (tecnologia das usinas em operação hoje) consiste na quebra de núcleos atômicos pesados (Urânio-235). A fusão nuclear (processo que gera a energia do Sol e alvo de projetos de pesquisa internacionais como o ITER) realiza a junção de núcleos leves de hidrogênio (deutério e trítio), sem gerar resíduos de alta radioatividade.',
    sourceLabel: 'ITER Project Organization',
    sourceUrl: 'https://www.iter.org',
  },
];

export const TEAM_MEMBERS: string[] = [
  'Harison',
  'Willian',
  'Luis Guilherme',
  'Isaias',
  'Wanderson',
  'David',
  'Thays',
  'Maria Klara',
];
