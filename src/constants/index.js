import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tecnoparque,
  freelance,
  urbibox,
  aoa,
  laravel,
  php
} from "../assets";
import andres_felipe from '../assets/andres_felipe.jpg';
import alberto from '../assets/alberto.jpg';
import sebas_ocampo from '../assets/sebas_ocampo.jpg';

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contactame",
  },
];

const services = [
  {
    title: "Desarrollador Frontend",
    icon: web,
  },
  {
    title: "Desarrollador Backend",
    icon: mobile,
  },
  {
    title: "Desarrollador Movil",
    icon: backend,
  },
  {
    title: "Arquitectura Clean Code",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [


  {
    title: "Desarrollador Senior y Movil",
    company_name: "<a href='https://aoacolombia.com/' target='_blank' class='underline font-bold'>AOA Colombia</a>",
    icon: aoa,
    iconBg: "#E6DEDD",
    date: "Enero 2022 - Actual",
    points: [
      "<span class='font-bold'>Soporte y Mejora del Software Actual:</span> Contribuí al mantenimiento y mejora continua del software existente, solucionando problemas y agregando nuevas características.",
      "<span class='font-bold'>App Móvil en React Native para Clientes:</span> Desarrollé una aplicación móvil en React Native para clientes, mejorando la accesibilidad y la experiencia del usuario.",
      "<span class='font-bold'>Módulos de Compras:</span> Creé nuevos módulos para gestionar compras, incluyendo carritos, seguimiento de pedidos y pagos en línea.",
      "<span class='font-bold'>Automatización de Correos y Módulos de Auditoría:</span> Implementé la automatización de correos electrónicos y desarrollé módulos para permitir auditorías por parte de los encargados de este proceso, garantizando la integridad y el rendimiento de los servicios.",
    ],
  },
  {
    title: "Desarrollador Laravel y Movil",
    company_name: "<a href='https://urbibox.com/' target='_blank' class='underline font-bold'>Urbibox</a>",
    icon: urbibox,
    iconBg: "#383E56",
    date: "Enero 2022 - Dic 2022",
    points: [
      "<span class='font-bold'>Geolocalización de Conductores:</span> Desarrollé interfaces frontend y backend para la geolocalización de conductores, mejorando la eficiencia de las entregas.",
      "<span class='font-bold'>CRUDs y Gestión de Datos:</span> Creé operaciones CRUD para la gestión de conductores, pedidos y entregas, simplificando las operaciones diarias.",
      "<span class='font-bold'>App Móvil en Flutter:</span> Diseñé una aplicación móvil estilo Rappi para conductores en Flutter, permitiendo la gestión de pedidos y rutas, incluso sin conexión.",
      "<span class='font-bold'>Seguridad y Ofuscación:</span> Implementé medidas de seguridad, incluyendo la gestión de datos offline y la ofuscación del código fuente para proteger la aplicación.",
    ],
  },
  {
    title: "Desarrollador de Microservicios",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Junio 2021 - Dic 2021",
    points: [
      "<span class='font-bold'>APIs de Autenticación en Laravel:</span> Desarrollé APIs de autenticación segura con Laravel.",
      "<span class='font-bold'>Microservicios de Productos y Categorías:</span> Creé microservicios para gestionar productos y categorías.",
      "<span class='font-bold'>Comparación de Productos:</span> Implementé una función de comparación de productos.",
      "<span class='font-bold'>Despliegue en Producción:</span> Lideré el despliegue de proyectos Laravel en servidores de producción para su acceso en línea.",
    ],
  },
  {
    title: "Desarrollador Junior",
    company_name: "Tecnoparque SENA",
    icon: tecnoparque,
    iconBg: "#383E56",
    date: "Junio 2021 - Dic 2021",
    points: [
      "<a href='https://www.rescatedesemillas.com/' target='_blank' class='underline font-bold'>Sitio Web de Semillas con WordPress:</a> Creé un sitio web de venta de semillas utilizando WordPress.",
      "<span class='font-bold'>Tienda Virtual con Laravel y Livewire:</span> Desarrollé una tienda en línea interactiva mediante Laravel y Livewire.",
      "<a href='https://www.milrealidades.com/' target='_blank' class='underline font-bold'>Mil Realidades - Red Social:</a> Diseñé y construí la plataforma 'Mil Realidades,' una red social basada en Laravel.",
      "<a href='https://www.rutadeinnovacion.com/' target='_blank' class='underline font-bold'>Ruta de la Innovación:</a>  Además, trabajé en la implementación de la 'Ruta de la Innovación,' que consiste en eventos y rutas de emprendimiento también desarrollados en Laravel con Livewire.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mauricio es un desarrollador altamente competente y versátil, con experiencia en el desarrollo FullStack y conocimientos en tecnologías móviles como Flutter. Su capacidad para aprender rápidamente y adaptarse a nuevas tecnologías lo convierte en un recurso invaluable en cualquier proyecto. Además, posee excelentes habilidades de comunicación, trabaja de manera efectiva en equipo, es un solucionador de problemas meticuloso y muestra una fuerte ética de responsabilidad en su trabajo. Su creatividad y empatía complementan sus sólidas habilidades técnicas, lo que lo convierte en un profesional completo y valioso en el mundo del desarrollo de software.",
    name: "Andres Felipe",
    designation: "Software Engineer",
    company: "Sena",
    image: andres_felipe,
  },
  {
    testimonial:
      "Mi primer encuentro con Andrés ocurrió en las instalaciones del SENA, en la localidad de Rionegro, Antioquía, donde se me otorgó el privilegio de supervisarlo. Durante esta experiencia, su desempeño se distinguió por su altísimo nivel de profesionalismo y eficiencia. Andrés destacaba notablemente por su inigualable amabilidad, su espíritu colaborador arraigado, su ardiente pasión y su compromiso incansable en cada proyecto que abrazaba con entusiasmo o le era encomendado. Su presencia se convirtió en un activo invaluable para nuestro equipo, y no dudo en recomendarlo para cualquier desafío en el desarrollo web.",
    name: "Alberto Echeverry",
    designation: "Teacher",
    company: "U. ITM",
    image: alberto,
  },
  {
    testimonial:
      " Durante nuestro tiempo juntos en Tecnoparque SENA de Rionegro Antioquia, demostró una habilidad impresionante para crear sitios web de alta calidad, cumpliendo siempre con los plazos y superando nuestras expectativas. Su profundo conocimiento técnico, su disposición para aprender nuevas tecnologías y su capacidad para comunicar de manera efectiva hicieron que fuera un miembro valioso de nuestro equipo. Además, su actitud positiva y su ética de trabajo ejemplar lo convirtieron en un colega excepcional. Recomiendo encarecidamente a Andrés Mauricio Rendón para cualquier proyecto de desarrollo web y estoy seguro de que continuará teniendo un impacto positivo en cualquier empresa en la que trabaje.",
    name: "Sebastian Ocampo",
    designation: "Software Engineer",
    company: "ShippyPro",
    image: sebas_ocampo,
  },
];

const projects = [
  {
    name: "No disponible aún.",
    description:
      "El contenido aún no se encuentra disponible. Estará libre para futuras actualizaciones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "No disponible aún.",
    description:
      "El contenido aún no se encuentra disponible. Estará libre para futuras actualizaciones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "No disponible aún.",
    description:
      "El contenido aún no se encuentra disponible. Estará libre para futuras actualizaciones.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };