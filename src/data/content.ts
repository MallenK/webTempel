export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Empresa', path: '/empresa' },
  { name: 'Soluciones', path: '/soluciones' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Mercados', path: '/mercados' },
  { name: 'Tecnología', path: '/tecnologia' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Contacto', path: '/contacto' },
];

export const STATS = [
  { label: 'Años de Experiencia', value: '45+', suffix: '' },
  { label: 'Presencia Global', value: '25', suffix: 'Países' },
  { label: 'Proyectos Completados', value: '1200', suffix: '+' },
  { label: 'Ingenieros Especialistas', value: '350', suffix: '+' },
];

export const SOLUTIONS = [
  {
    id: 'energy',
    title: 'Energy Storage Systems',
    description: 'Sistemas avanzados de almacenamiento de energía basados en tecnología de Litio-Hierro-Fosfato (LiFePO4) para aplicaciones industriales, residenciales y de red.',
    icon: 'Battery',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    features: [
      'Baterías de Litio de alta densidad energética',
      'Sistemas de Gestión de Baterías (BMS) inteligentes',
      'Soluciones de Backup Crítico para Data Centers',
      'Integración con Energías Renovables (Solar/Eólica)',
      'Sistemas UPS industriales de alta fiabilidad'
    ],
    specs: [
      { label: 'Eficiencia', value: '98%' },
      { label: 'Ciclos de Vida', value: '>6000' },
      { label: 'Escalabilidad', value: 'Modular' }
    ]
  },
  {
    id: 'engineering',
    title: 'Industrial Engineering',
    description: 'Servicios integrales de ingeniería para la automatización, control y optimización de procesos industriales complejos.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    features: [
      'Diseño de cuadros eléctricos a medida',
      'Automatización y Control Industrial (PLC/SCADA)',
      'Consultoría técnica y auditoría energética',
      'Mantenimiento predictivo basado en IA',
      'Instalaciones llave en mano'
    ],
    specs: [
      { label: 'Certificación', value: 'ISO 9001' },
      { label: 'Soporte', value: '24/7 Global' },
      { label: 'Tecnología', value: 'Industry 4.0' }
    ]
  },
  {
    id: 'distribution',
    title: 'Technology Distribution',
    description: 'Distribución oficial de componentes electrónicos y sistemas informáticos industriales de los fabricantes líderes mundiales.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    features: [
      'Paneles PC industriales y monitores rugerizados',
      'Sistemas embebidos y computación en el borde (Edge)',
      'Comunicación industrial (Switches, Gateways)',
      'Componentes electrónicos de grado militar',
      'Soluciones de almacenamiento flash industrial'
    ],
    specs: [
      { label: 'Partners', value: '50+' },
      { label: 'Stock', value: 'Real-time' },
      { label: 'Logística', value: 'Express' }
    ]
  },
];

export const MARKETS = [
  { 
    name: 'Telecomunicaciones', 
    icon: 'Radio',
    details: 'Infraestructura crítica para redes 5G, centros de datos y estaciones base remotas.'
  },
  { 
    name: 'Industria 4.0', 
    icon: 'Factory',
    details: 'Digitalización de procesos, robótica colaborativa y mantenimiento inteligente.'
  },
  { 
    name: 'Energía & Utilities', 
    icon: 'Zap',
    details: 'Redes inteligentes (Smart Grids), microrredes y gestión de renovables.'
  },
  { 
    name: 'Infraestructura', 
    icon: 'Building2',
    details: 'Sistemas de control para túneles, aeropuertos y transporte ferroviario.'
  },
  { 
    name: 'Smart Cities', 
    icon: 'Globe',
    details: 'Iluminación inteligente, movilidad eléctrica y gestión urbana conectada.'
  },
  { 
    name: 'Defensa & Aeroespacial', 
    icon: 'Shield',
    details: 'Componentes certificados para entornos extremos y misiones críticas.'
  },
];

export const PROJECTS = [
  {
    title: 'Smart Lighting Hub - Madrid',
    category: 'Iluminación Urbana',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Implementación de un sistema de gestión punto a punto para 5.000 luminarias LED, reduciendo el consumo energético en un 65%.',
    client: 'Ayuntamiento de Madrid',
    year: '2024'
  },
  {
    title: 'Energy Storage - Olympic Stadium',
    category: 'Iluminación Deportiva',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
    description: 'Sistema de respaldo energético de 2MWh para garantizar la continuidad de la iluminación durante eventos internacionales.',
    client: 'Comité Olímpico',
    year: '2023'
  },
  {
    title: 'Industrial Automation - Automotive Plant',
    category: 'Ingeniería Industrial',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
    description: 'Rediseño completo de la línea de ensamblaje con integración de cobots y sistemas de visión artificial.',
    client: 'Global Motors Corp',
    year: '2024'
  },
  {
    title: 'Data Center Power Grid',
    category: 'Infraestructura Energética',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    description: 'Instalación de sistemas UPS modulares y redundantes para un centro de datos Tier IV.',
    client: 'CloudTech Solutions',
    year: '2023'
  },
];

export const TIMELINE = [
  { year: '1978', title: 'Fundación', description: 'Nace Tempel Group como distribuidor local de componentes electrónicos.' },
  { year: '1995', title: 'Expansión Internacional', description: 'Apertura de las primeras sedes en Portugal y Latinoamérica.' },
  { year: '2008', title: 'División de Ingeniería', description: 'Creación del departamento especializado en soluciones de ingeniería a medida.' },
  { year: '2015', title: 'Liderazgo en Litio', description: 'Pioneros en la introducción de sistemas de almacenamiento de litio industrial.' },
  { year: '2023', title: 'Era Digital', description: 'Lanzamiento de plataformas IoT y servicios de mantenimiento predictivo.' },
];
