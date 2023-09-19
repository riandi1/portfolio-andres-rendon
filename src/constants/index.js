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
    aoa
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre Mi",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    // {
    //   id: "contact",
    //   title: "Contactame",
    // },
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
   
    
    {
      title: "Desarrollador Senior y Movil",
      company_name: "AOA Colombia",
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
      company_name: "Urbibox",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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