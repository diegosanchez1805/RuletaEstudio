// Datos iniciales de temas de Ingeniería de Software
const INITIAL_TOPICS = [
  {
    "id": 1,
    "categoria": "Desarrollo Web",
    "subtemas": ["HTML semántico", "CSS Grid y Flexbox", "Frameworks (React, Vue)", "APIs REST"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#3B82F6"
  },
  {
    "id": 2,
    "categoria": "Desarrollo Móvil",
    "subtemas": ["Ciclo de vida de una app", "Diseño responsivo móvil", "React Native / Flutter", "Publicación en stores"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#10B981"
  },
  {
    "id": 3,
    "categoria": "Estructuras de Datos y Algoritmos",
    "subtemas": ["Listas y árboles", "Complejidad Big O", "Recursión", "Algoritmos de ordenamiento"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#F59E0B"
  },
  {
    "id": 4,
    "categoria": "Lenguajes de Programación y Paradigmas",
    "subtemas": ["POO vs funcional", "Tipado estático vs dinámico", "Concurrencia", "Manejo de memoria"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#EF4444"
  },
  {
    "id": 5,
    "categoria": "Compiladores e Intérpretes",
    "subtemas": ["Análisis léxico", "Análisis sintáctico", "AST", "Diferencia compilado vs interpretado"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#8B5CF6"
  },
  {
    "id": 6,
    "categoria": "Testing y QA",
    "subtemas": ["Pruebas unitarias vs integración", "Pruebas E2E", "Test-Driven Development", "Casos de prueba"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#EC4899"
  },
  {
    "id": 7,
    "categoria": "Automatización de Pruebas",
    "subtemas": ["Jest básico", "Playwright vs Cypress", "Mocks y stubs", "Reportes de cobertura"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#06B6D4"
  },
  {
    "id": 8,
    "categoria": "DevOps y CI/CD",
    "subtemas": ["Pipelines básicos", "Contenedores (Docker)", "Integración continua", "Despliegue continuo"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#14B8A6"
  },
  {
    "id": 9,
    "categoria": "Monitoreo y Observabilidad",
    "subtemas": ["Logs estructurados", "Métricas y dashboards", "Alertas", "Trazas distribuidas"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#F97316"
  },
  {
    "id": 10,
    "categoria": "Performance y Optimización",
    "subtemas": ["Perfilado de código", "Caché", "Lazy loading", "Optimización de consultas"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#EAB308"
  },
  {
    "id": 11,
    "categoria": "Arquitectura de Software",
    "subtemas": ["Monolito vs microservicios", "Patrones de diseño", "MVC", "Principios SOLID"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#6366F1"
  },
  {
    "id": 12,
    "categoria": "Ingeniería de Requisitos",
    "subtemas": ["Requisitos funcionales vs no funcionales", "Historias de usuario", "Técnicas de elicitación", "Trazabilidad"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#84CC16"
  },
  {
    "id": 13,
    "categoria": "UX/UI y Diseño de Interfaces",
    "subtemas": ["Principios de usabilidad", "Wireframes y prototipos", "Diseño centrado en el usuario", "Sistemas de diseño"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#D946EF"
  },
  {
    "id": 14,
    "categoria": "Bases de Datos",
    "subtemas": ["Modelado relacional", "NoSQL vs SQL", "Normalización", "Índices y optimización"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#3B82F6"
  },
  {
    "id": 15,
    "categoria": "Cloud Computing",
    "subtemas": ["IaaS vs PaaS vs SaaS", "Servicios básicos de AWS/GCP", "Escalabilidad", "Serverless"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#0284C7"
  },
  {
    "id": 16,
    "categoria": "Redes y Comunicaciones",
    "subtemas": ["Modelo OSI/TCP-IP", "HTTP/HTTPS", "DNS", "Protocolos de mensajería (WebSockets)"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#0D9488"
  },
  {
    "id": 17,
    "categoria": "Sistemas Operativos",
    "subtemas": ["Procesos e hilos", "Gestión de memoria", "Sistemas de archivos", "Concurrencia y sincronización"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#7C3AED"
  },
  {
    "id": 18,
    "categoria": "Ciberseguridad",
    "subtemas": ["OWASP Top 10", "Autenticación y autorización", "Criptografía básica", "Manejo seguro de datos"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#DC2626"
  },
  {
    "id": 19,
    "categoria": "Gestión de Proyectos",
    "subtemas": ["Scrum vs Kanban", "Estimación de tareas", "Gestión de riesgos", "Roles en un equipo ágil"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#EA580C"
  },
  {
    "id": 20,
    "categoria": "Control de Versiones",
    "subtemas": ["Git branching strategies", "Rebase vs merge", "Pull requests", "Resolución de conflictos"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#4F46E5"
  },
  {
    "id": 21,
    "categoria": "Inteligencia Artificial / Machine Learning",
    "subtemas": ["Aprendizaje supervisado vs no supervisado", "Redes neuronales básicas", "Modelos de lenguaje", "Ética en IA"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#9333EA"
  },
  {
    "id": 22,
    "categoria": "Ingeniería de Datos",
    "subtemas": ["ETL básico", "Data warehouses", "Pipelines de datos", "Calidad de datos"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#059669"
  },
  {
    "id": 23,
    "categoria": "Ética y Legislación del Software",
    "subtemas": ["Licencias de software", "Propiedad intelectual", "Privacidad y GDPR", "Responsabilidad profesional"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#475569"
  },
  {
    "id": 24,
    "categoria": "Accesibilidad Web",
    "subtemas": ["WCAG básico", "Lectores de pantalla", "Contraste y semántica", "Navegación por teclado"],
    "vecesEstudiado": 0,
    "ultimaFecha": null,
    "color": "#16A34A"
  }
];
