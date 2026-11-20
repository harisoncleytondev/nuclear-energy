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

export const HOW_IT_WORKS_STEPS: FissionStep[] = [
  {
    number: '01',
    badge: 'Núcleo Atômico',
    title: 'A fissão do Urânio-235',
    description:
      'Um nêutron lento atinge o núcleo de um átomo de urânio-235. O átomo fica instável e se divide em dois núcleos menores, liberando calor imediato e novos nêutrons.',
    metricLabel: 'Energia por fissão',
    metricValue: '200 MeV',
    details: [
      'Gera calor e libera de 2 a 3 nêutrons livres',
      'Barras de controle absorvem nêutrons para regular o ritmo da reação',
      'Usinas civis usam urânio enriquecido entre 3% e 5%',
    ],
    sourceLabel: 'IAEA — Reatores de Potência',
    sourceUrl: 'https://www.iaea.org/topics/nuclear-power-reactors',
  },
  {
    number: '02',
    badge: 'Ciclo Térmico',
    title: 'Calor, vapor e pressão',
    description:
      'A água do circuito primário retira calor do núcleo sob alta pressão, sem ferver. Em seguida, transfere esse calor para um circuito secundário de água pura, gerando vapor.',
    metricLabel: 'Temperatura no circuito',
    metricValue: '~320 °C',
    details: [
      'Circuitos isolados evitam que a água radioativa saia do reator',
      'O vapor sob pressão movimenta o conjunto de turbinas',
      'As torres externas liberam condensação de água limpa',
    ],
    sourceLabel: 'Eletronuclear — Operação de Angra',
    sourceUrl: 'https://www.eletronuclear.gov.br',
  },
  {
    number: '03',
    badge: 'Geração Contínua',
    title: 'Turbinas e geração elétrica',
    description:
      'O vapor em expansão gira as pás da turbina, que aciona o gerador elétrico. A usina entrega energia firme à rede de forma contínua.',
    metricLabel: 'Fator de capacidade',
    metricValue: '92,5%',
    details: [
      'Reatores operam entre 12 e 18 meses seguidos entre recargas de combustível',
      'A geração elétrica não emite dióxido de carbono nem fuligem',
      'Mantém a estabilidade da rede sem depender de chuva, vento ou sol',
    ],
    sourceLabel: 'U.S. EIA — Electric Power Monthly',
    sourceUrl: 'https://www.eia.gov/electricity/monthly/',
  },
];

export const DEBATE_PROS: DebatePoint[] = [
  {
    title: 'Alta densidade energética',
    description:
      'Uma pastilha de dióxido de urânio de 10 gramas gera a mesma quantidade de eletricidade que uma tonelada de carvão mineral.',
    stat: '10 g = 1 t',
    statLabel: 'Pastilha de UO₂ versus carvão mineral',
    sourceLabel: 'World Nuclear Association',
    sourceUrl: 'https://world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/nuclear-fuel-cycle-overview',
  },
  {
    title: 'Baixa emissão de gases estufa',
    description:
      'No cálculo de ciclo de vida completo (construção, mineração e operação), a usina nuclear emite cerca de 12 gramas de CO₂ por quilowatt-hora, taxa comparável à eólica.',
    stat: '12 gCO₂',
    statLabel: 'Emissões médias por kWh gerado',
    sourceLabel: 'IPCC AR6 WGIII',
    sourceUrl: 'https://www.ipcc.ch/report/ar6/wg3/',
  },
  {
    title: 'Geração contínua sem intermitência',
    description:
      'Reatores nucleares funcionam como carga de base do sistema elétrico, mantendo disponibilidade média acima de 90% ao longo do ano.',
    stat: '90%+',
    statLabel: 'Fator de disponibilidade operacional',
    sourceLabel: 'IAEA PRIS',
    sourceUrl: 'https://pris.iaea.org/PRIS/home.aspx',
  },
];

export const DEBATE_CONS: DebatePoint[] = [
  {
    title: 'Armazenamento de rejeitos',
    description:
      'O combustível usado contém elementos radioativos de vida longa que exigem isolamento seguro em formações geológicas estáveis por milhares de anos.',
    stat: '10.000+ anos',
    statLabel: 'Período de decaimento do combustível usado',
    sourceLabel: 'Posiva Oy (Repositório Onkalo)',
    sourceUrl: 'https://www.posiva.fi/en/',
  },
  {
    title: 'Severidade de acidentes graves',
    description:
      'Embora falhas catastróficas sejam raras na história da indústria, acidentes de nível 7 na escala INES causam evacuações prolongadas e contaminação de áreas vizinhas.',
    stat: 'Nível 7',
    statLabel: 'Classificação máxima na escala INES',
    sourceLabel: 'IAEA — Escala INES',
    sourceUrl: 'https://www.iaea.org/resources/databases/ines',
  },
  {
    title: 'Custos e prazos de obra',
    description:
      'O licenciamento rigoroso e os múltiplos sistemas redundantes de contenção elevam o custo de capital e estendem as obras por 7 a 12 anos por reator.',
    stat: 'US$ 6 a 9 bi',
    statLabel: 'Custo inicial médio por reator de grande porte',
    sourceLabel: 'IEA — Relatório de Transição',
    sourceUrl: 'https://www.iea.org/reports/nuclear-power-and-secure-energy-transitions',
  },
];

export const DEBATE_CONTROVERSIES: DebatePoint[] = [
  {
    title: 'Uso civil versus proliferação',
    description:
      'O domínio do enriquecimento isotópico exige fiscalização internacional permanente pela AIEA para garantir que o combustível permaneça na faixa civil de até 5%, distante dos 90% usados em ogivas.',
    stat: '3% a 5%',
    statLabel: 'Enriquecimento civil para usinas comerciais',
    sourceLabel: 'ONU — Tratado de Não Proliferação',
    sourceUrl: 'https://www.un.org/disarmament/wmd/nuclear/npt/',
  },
  {
    title: 'Classificação na transição energética',
    description:
      'Governos divergem sobre incluir reatores em programas de financiamento sustentável. A União Europeia incluiu a fonte em sua taxonomia verde com exigências técnicas sobre gestão de rejeitos.',
    stat: 'Taxonomia UE',
    statLabel: 'Inclusão sob critérios técnicos e ambientais',
    sourceLabel: 'Comissão Europeia',
    sourceUrl: 'https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-taxonomy-sustainable-activities_en',
  },
  {
    title: 'Descomissionamento de instalações',
    description:
      'Ao final da vida útil de 40 a 60 anos, desmontar o reator e descontaminar o terreno exige planejamento de longo prazo e fundos financeiros provisionados desde o início da operação.',
    stat: '40 a 60 anos',
    statLabel: 'Período operacional até a desativação',
    sourceLabel: 'World Nuclear Association',
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
    sourceLabel: 'NREL LCA Harmonization',
    sourceUrl: 'https://www.nrel.gov',
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
    sourceLabel: 'NREL LCA Harmonization',
    sourceUrl: 'https://www.nrel.gov',
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
    sourceLabel: 'IPCC WGIII & IEA',
    sourceUrl: 'https://www.iea.org',
  },
];

export const CURIOSITIES_ITEMS: CuriosityItem[] = [
  {
    id: 'pellet',
    eyebrow: 'DENSIDADE ENERGÉTICA',
    title: 'O conteúdo de uma pastilha de',
    highlightWord: '10 gramas',
    description:
      'Uma pastilha cerâmica de urânio do tamanho da ponta de um dedo rende a mesma quantidade de energia térmica que 1.000 quilos de carvão ou 480 metros cúbicos de gás natural.',
    bigStat: '1 : 100.000',
    bigStatUnit: 'Proporção de consumo em massa versus combustíveis fósseis',
    span: 'wide',
    sourceLabel: 'World Nuclear Association',
    sourceUrl: 'https://world-nuclear.org/information-library/nuclear-fuel-cycle/introduction/nuclear-fuel-cycle-overview',
  },
  {
    id: 'cooling-towers',
    eyebrow: 'SISTEMA DE RESFRIAMENTO',
    title: 'O vapor visível nas torres de',
    highlightWord: 'resfriamento',
    description:
      'A pluma branca que sai das torres externas é apenas condensação de vapor de água comum. O circuito de resfriamento não entra em contato com o material do reator.',
    bigStat: '100% água',
    bigStatUnit: 'Condensação de água pura sem fuligem',
    span: 'narrow',
    sourceLabel: 'U.S. NRC — Glossário de Reatores',
    sourceUrl: 'https://www.nrc.gov',
  },
  {
    id: 'brazil-angra',
    eyebrow: 'OPERAÇÃO NACIONAL',
    title: 'A matriz nuclear no',
    highlightWord: 'Brasil',
    description:
      'O país tem jazidas próprias de urânio e opera Angra 1 e Angra 2 no litoral do Rio de Janeiro. As duas usinas respondem por cerca de 2% a 3% do consumo elétrico nacional e por mais de um terço da energia do estado fluminense.',
    span: 'half',
    sourceLabel: 'Eletronuclear & INB',
    sourceUrl: 'https://www.eletronuclear.gov.br',
  },
  {
    id: 'medicine-space',
    eyebrow: 'OUTRAS APLICAÇÕES',
    title: 'Medicina diagnóstica e sondas',
    highlightWord: 'espaciais',
    description:
      'Reatores de pesquisa produzem radioisótopos hospitalares como o tecnécio-99m, usado em cintilografias e tratamentos oncológicos. No espaço, geradores termoelétricos de radioisótopos (RTGs) alimentam o jipe Perseverance em Marte e a sonda Voyager.',
    span: 'half',
    sourceLabel: 'NASA — Mars 2020 Perseverance',
    sourceUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance',
  },
];

export const MEDIA_RECOMMENDATIONS: MediaRecommendationItem[] = [
  {
    type: 'filme',
    typeLabel: 'Filme',
    title: 'Oppenheimer',
    year: '2023',
    authorOrDirector: 'Direção: Christopher Nolan',
    description:
      'O longa acompanha o Projeto Manhattan durante a Segunda Guerra Mundial e mostra os debates técnicos e éticos dos cientistas envolvidos na criação das primeiras armas atômicas.',
    sourceLabel: 'IMDb',
    sourceUrl: 'https://www.imdb.com/title/tt15398776/',
  },
  {
    type: 'documentario',
    typeLabel: 'Documentário',
    title: 'Nuclear Now',
    year: '2022',
    authorOrDirector: 'Direção: Oliver Stone',
    description:
      'O documentário entrevista físicos e engenheiros sobre o histórico da indústria nuclear civil e defende a tecnologia como fonte de energia firme para descarbonizar a matriz elétrica.',
    sourceLabel: 'Site Oficial do Filme',
    sourceUrl: 'https://www.nuclearnowfilm.com/',
  },
  {
    type: 'documentario',
    typeLabel: 'Minissérie',
    title: 'Chernobyl',
    year: '2019',
    authorOrDirector: 'Criação: Craig Mazin (HBO)',
    description:
      'A minissérie dramatiza as horas que antecederam e sucederam a explosão do reator 4 em 1986, reconstituindo as falhas de projeto do reator RBMK soviético e os erros de comando na sala de controle.',
    sourceLabel: 'IMDb',
    sourceUrl: 'https://www.imdb.com/title/tt8462700/',
  },
  {
    type: 'livro',
    typeLabel: 'Livro',
    title: 'Como Evitar um Desastre Climático',
    year: '2021',
    authorOrDirector: 'Bill Gates',
    description:
      'O autor analisa os números da emissão global por setor econômico e argumenta que reatores nucleares de nova geração são necessários para complementar redes com fontes renováveis variáveis.',
    sourceLabel: 'GatesNotes',
    sourceUrl: 'https://www.gatesnotes.com',
  },
  {
    type: 'livro',
    typeLabel: 'Livro',
    title: 'Vozes de Tchernóbil: A História Oral do Desastre',
    year: '1997',
    authorOrDirector: 'Svetlana Aleksiévitch',
    description:
      'A jornalista bielorrussa reuniu depoimentos de moradores, bombeiros, viúvas e militares convocados para conter a radiação em 1986, registrando as perdas humanas provocadas pelo acidente.',
    sourceLabel: 'Comitê do Prêmio Nobel',
    sourceUrl: 'https://www.nobelprize.org/prizes/literature/2015/alexievich/facts/',
  },
  {
    type: 'documentario',
    typeLabel: 'Documentário',
    title: 'Pandora’s Promise',
    year: '2013',
    authorOrDirector: 'Direção: Robert Stone',
    description:
      'O filme reúne ambientalistas que revisaram suas posições sobre energia atômica após compararem as estatísticas de poluição atmosférica fóssil com dados de segurança operacional.',
    sourceLabel: 'IMDb',
    sourceUrl: 'https://www.imdb.com/title/tt1992193/',
  },
];

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    category: 'Relatório Técnico',
    organization: 'IAEA — Agência Internacional de Energia Atômica',
    title: 'Nuclear Power and the Clean Energy Transition',
    year: '2024',
    summary:
      'Publicação com dados consolidados dos mais de 400 reatores comerciais em operação, procedimentos de segurança e estimativas de demanda energética.',
    url: 'https://www.iaea.org',
  },
  {
    category: 'Estudo Climático',
    organization: 'IPCC — Painel Intergovernamental sobre Mudanças Climáticas',
    title: 'AR6 Working Group III: Mitigation of Climate Change',
    year: '2023',
    summary:
      'Compilação de inventários de ciclo de vida que calculam as emissões médias de gases de efeito estufa por quilowatt-hora gerado entre as diferentes fontes.',
    url: 'https://www.ipcc.ch',
  },
  {
    category: 'Dados Nacionais',
    organization: 'Eletronuclear & INB',
    title: 'Relatório Operacional da Central de Angra',
    year: '2024',
    summary:
      'Informações públicas sobre a geração de Angra 1 e Angra 2, monitoramento radiológico do entorno e mineração de urânio em Caetité.',
    url: 'https://www.eletronuclear.gov.br',
  },
  {
    category: 'Estatística Comparada',
    organization: 'Our World in Data / Oxford Martin School',
    title: 'What are the safest and cleanest sources of energy?',
    year: '2024',
    summary:
      'Estudo que compara mortalidade humana decorrente da poluição do ar e de acidentes de trabalho por terawatt-hora produzido no setor elétrico.',
    url: 'https://ourworldindata.org/safest-sources-of-energy',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Uma usina nuclear pode explodir como uma bomba atômica?',
    answer:
      'Não. O combustível das usinas tem urânio enriquecido entre 3% e 5%, enquanto ogivas nucleares exigem urânio ou plutônio enriquecido acima de 90%, além de um mecanismo de compressão explosiva rápida. A física do combustível civil não permite uma detonação atômica.',
    sourceLabel: 'World Nuclear Association',
    sourceUrl: 'https://world-nuclear.org',
  },
  {
    question: 'Onde fica o lixo atômico produzido pelas usinas?',
    answer:
      'Ao contrário de usinas fósseis, todo o resíduo do reator é sólido e mantido em contenção física. As varetas usadas passam primeiro por piscinas de resfriamento com blindagem hídrica por alguns anos e depois são transferidas para silos de aço e concreto (armazéns a seco) ou repositórios geológicos profundos.',
    sourceLabel: 'Posiva & IAEA',
    sourceUrl: 'https://www.posiva.fi/en/',
  },
  {
    question: 'Qual a diferença entre fissão e fusão nuclear?',
    answer:
      'A fissão é o processo empregado nas usinas comerciais atuais, no qual núcleos pesados de urânio são partidos ao meio. A fusão é a reação que ocorre no Sol, na qual núcleos leves de hidrogênio se unem para formar hélio. A fusão ainda está em fase de pesquisa em instalações experimentais como o reator ITER.',
    sourceLabel: 'Consórcio ITER',
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
