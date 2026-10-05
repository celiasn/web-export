// Spanish/English dictionary + tiny translation engine shared by every page.
// Usage in markup:
//   data-i18n="dotted.key"        -> sets textContent
//   data-i18n-html="dotted.key"   -> sets innerHTML (only for values with trusted inline markup)
//   data-i18n-attr='{"placeholder":"dotted.key","alt":"other.key"}' -> sets attributes
// Elements created dynamically by other scripts (common.js, main.js, productos.js,
// walia.js) can set these same attributes on the fly; the next applyTranslations()
// pass (run on load and whenever the language changes) will fill them in.
window.MEH_TRANSLATIONS = {
  es: {
    nav: {
      toggleAria: 'Abrir menú',
      empresa: 'Empresa',
      historia: 'Historia',
      equipo: 'Equipo',
      productos: 'Productos',
      walia: 'WALIA',
      contacto: 'Contacto',
      presupuesto: 'Solicitar presupuesto',
      distribuidor: 'Conviértete en distribuidor',
      trabaja: 'Trabaja con nosotros',
    },
    footer: {
      colabora: 'Colabora',
      tagline: 'Desde 1979 protegiendo tus cosechas, <span class="accent-green">tejiendo tus sueños</span>',
      direccion: 'Ctra Los Vives, 13<br>03315 La Murada-Orihuela<br>(Alicante), España',
      avisoLegal: 'Aviso legal',
      privacidad: 'Privacidad',
    },
    modal: {
      title: 'Política de Privacidad',
      closeAria: 'Cerrar',
      p1: 'En cumplimiento del Reglamento (UE) 2016/679 y de la Ley Orgánica de Protección de Datos de Carácter Personal, le informamos de que la identidad del responsable que trata sus datos es:',
      p2: 'MANTENIMIENTOS Y ESTRUCT. AGRÍCOLAS MATEO E HIJO, S.L.U.<br>CIF: B42531897<br>Ctra Los Vives, 13 · 03315 Orihuela (Alicante)<br><a href="mailto:administracion@mateoehijo.com">administracion@mateoehijo.com</a>',
      p3: 'Los datos personales que tratamos en nuestra organización son los mínimos necesarios para contactar con usted, con la finalidad de enviarle información, incluida, en su caso, la comercial y/o publicitaria.',
      p4: 'Le informamos de que todos ellos están protegidos con las seguridades necesarias y de que serán conservados exclusivamente hasta la finalización de la relación comercial o laboral. Este tratamiento se basa en nuestro interés legítimo en comunicarnos con usted, en cumplimiento y/o mantenimiento de relaciones comerciales o laborales.',
      p5: 'Le informamos de que no compartiremos sus datos personales facilitados por usted.',
      p6: 'Recuerde que tiene una serie de derechos en relación con el uso de sus datos personales. Le garantizamos el ejercicio del derecho de acceso, rectificación, supresión, oposición, limitación, portabilidad y oposición a la toma de decisiones.',
      p7: 'A fin de que sus datos sean un fiel reflejo de la realidad, no dude en hacer uso de su derecho de rectificación en el caso de que estos sufran alguna modificación, cambio o anulación.',
      p8: 'Puede ejercer todos estos derechos remitiendo un email a la dirección arriba indicada. También tiene derecho a presentar reclamaciones ante la Agencia Española de Protección de Datos y acudir a los Tribunales de Justicia.',
      consent: 'He leído y acepto la <a href="#" id="openPrivacy">política de privacidad</a>.',
    },
    form: {
      asuntoLabel: 'Asunto',
      consultaGeneral: 'Consulta general',
      nombreLabel: 'Nombre completo',
      nombrePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      telefonoLabel: 'Teléfono',
      mensajeLabel: 'Mensaje / Comentarios',
      mensajePlaceholder: 'Cuéntanos en qué podemos ayudarte…',
      submit: 'Enviar solicitud',
      sentMsg: '✓ Se ha abierto tu cliente de correo con la solicitud. ¡Gracias!',
    },
    mail: {
      nombre: 'Nombre',
      email: 'Email',
      telefono: 'Teléfono',
      consultaFallback: 'Consulta',
    },
    home: {
      title: 'Mateo e Hijo — Estructuras agrícolas desde 1979',
      description: 'Mateo e Hijo: invernaderos, WALIA, mallas, riego, cercados y proyectos llave en mano. Desde 1979 protegiendo tus cosechas, tejiendo tus sueños.',
      heroImgAlt: 'Invernadero Mateo e Hijo',
      heroTagline: '46 años. Estructuras agrícolas. <span class="accent-green">Tejiendo tus sueños.</span>',
      heroServiciosBtn: 'Nuestros servicios',
      heroContactaBtn: 'Contacta',
      statLabel: 'años',
      companyH2: 'Un aliado estratégico para tus cosechas.',
      companyP: 'Orihuela, Alicante · desde 1979.',
      productsSubheading: 'Descubre el catálogo completo con toda la información técnica en <a href="productos/productos.html">nuestra página de productos y servicios</a>.',
      carouselPrevAria: 'Anterior',
      carouselNextAria: 'Siguiente',
      carouselMore: 'Ver más ›',
      waliaTeaserP: 'El invernadero inteligente.',
      waliaTeaserBtn: 'Descúbrelo',
    },
    products: {
      'invernaderos-tradicionales': 'Invernaderos tradicionales',
      'walia': 'Invernaderos inteligentes (WALIA)',
      'malla-antihierba': 'Malla antihierba',
      'tunel-multitunel': 'Invernaderos túnel y multitúnel',
      'riego': 'Instalaciones de riego',
      'pantano': 'Cubrimientos de pantano',
      'cercados': 'Cercados',
      'llave-en-mano': 'Proyectos llave en mano',
      'mantenimientos': 'Mantenimientos agrícolas',
    },
    empresa: {
      title: 'Quiénes somos — Historia y equipo | Mateo e Hijo',
      description: 'Desde 1979, Mateo e Hijo diseña, fabrica e instala estructuras agrícolas y WALIA con un equipo propio que cubre todo el proceso, de la idea a la instalación.',
      breadcrumbHistoria: '<a href="../index.html">Mateo e Hijo</a> / Quiénes somos',
      breadcrumbEquipo: '<a href="../index.html">Mateo e Hijo</a> / Quiénes somos / Equipo',
      historiaH1: 'Nuestra historia',
      historiaSub: 'Más de cuatro décadas protegiendo el campo.',
      heroHistoriaImgAlt: 'Parral agrícola de Mateo e Hijo',
      origenesImgAlt: 'Estructura agrícola en el campo, imagen provisional de los orígenes de la empresa',
      origenesH2: 'Los orígenes',
      origenesP: 'En 1979, D. Mariano Ricardo Mateo Poveda fundó Mateo e Hijo bajo su propio nombre. Desde el principio, la empresa se dedicó a construir estructuras que protegen los cultivos frente al clima.',
      inventarImgAlt: 'Parral multicapilla en el campo',
      inventarH2: 'Inventar para proteger',
      inventarP: 'En 1989 inventamos y construimos nuestro primer parral multicapilla. En 2010 instalamos el primer invernadero con coberturas móviles manuales, el primer paso hacia estructuras que se adaptan al cultivo.',
      llaveManoImgAlt: 'Trabajo agrícola en invernadero, imagen provisional de los proyectos llave en mano',
      llaveManoH2: 'Proyectos "llave en mano"',
      llaveManoP: 'En 2019 dimos un paso más y empezamos a ofrecer proyectos "llave en mano": producimos nuestros propios materiales y contamos con logística y maquinaria propias. Así controlamos cada fase de la obra.',
      waliaImgAlt: 'Captura de la app Walia® controlando el estado de un invernadero desde el móvil',
      waliaP: 'En 2022 nació Walia® by Mateo e Hijo como proyecto, y en 2026 se convierte en producto. Une nuestras estructuras con motorización, sensores y software para gestionar las coberturas de forma remota y automatizada.',
      cronologiaHeading: 'Cronología',
      timeline1979: 'D. Mariano Ricardo Mateo Poveda funda Mateo e Hijo bajo su propio nombre',
      timeline1989: 'Invención y construcción del primer parral multicapilla',
      timeline2010: 'Instalación del primer invernadero con coberturas móviles manuales',
      timeline2019: 'Comienzo de proyectos "llave en mano" (materiales, logística y maquinaria propias)',
      timeline2022: 'Comienza Walia® by Mateo e Hijo como proyecto',
      timeline2026: 'Walia® by Mateo e Hijo se convierte en producto',
      closing1: 'Innovación y tecnología para la agricultura del futuro.',
      equipoHeroImgAlt: 'Equipo de Mateo e Hijo junto al material de invernaderos en la nave',
      equipoH1: 'Nuestro equipo',
      equipoSub: 'Un equipo propio, de la idea a la instalación.',
      teamLead: 'Mateo e Hijo diseña, fabrica e instala estructuras y soluciones de protección para la agricultura. Lo hacemos con un equipo propio que cubre todo el proceso, sin depender de terceros.',
      teamP1: 'Nuestro equipo de ingeniería y arquitectura proyecta cada estructura, y el equipo técnico de producción fabrica los materiales en nuestras instalaciones.',
      teamP2: 'Llegamos a la parcela con vehículos pesados, grúas y maquinaria propios, y construimos invernaderos y estructuras agrícolas con nuestra propia gente.',
      teamP3: 'Un equipo dedicado a I+D desarrolla la motorización, los sensores y la app de Walia®. Mateo e Hijo nació construyendo estructuras para proteger los cultivos y hoy incorpora inteligencia, datos y automatización para que esas estructuras puedan tomar decisiones.',
      coverageEyebrow: 'Dónde operamos',
      coverageMapAlt: 'Mapa de la zona de Levante español con los puntos donde opera Mateo e Hijo',
      gridHeading: 'Áreas del equipo',
      card1Alt: 'Diseño de estructuras agrícolas, imagen provisional',
      card1H3: 'Diseño',
      card1P: 'Ingeniería robótica y arquitectura.',
      card2Alt: 'Producción de materiales propios, imagen provisional',
      card2H3: 'Producción',
      card2P: 'Equipo técnico y producción de materiales propios.',
      card3Alt: 'Construcción de invernaderos y estructuras agrícolas',
      card3H3: 'Construcción',
      card3P: 'Invernaderos y estructuras agrícolas.',
      card4Alt: 'Logística con vehículos pesados y grúas propios, imagen provisional',
      card4H3: 'Logística',
      card4P: 'Vehículos pesados y grúas propios.',
      card5Alt: 'Maquinaria propia para el desarrollo de proyectos',
      card5H3: 'Desarrollo de proyectos',
      card5P: 'Maquinaria propia.',
      card6Alt: 'Automatización y desarrollo de apps para protección agrícola',
      card6H3: 'Automatización',
      card6P: 'Desarrollo de apps para protección agrícola e inversión en I+D.',
      closing2: 'El futuro de la agricultura está bajo control.',
      closingSignature: 'Equipo Walia® by Mateo e Hijo',
    },
    walia: {
      title: 'WALIA — Invernadero inteligente | Mateo e Hijo',
      description: 'WALIA: invernadero inteligente con plásticos retráctiles controlados desde el móvil. Un producto de Mateo e Hijo.',
      navProducto: 'Producto',
      navApp: 'App',
      navCultivos: 'Cultivos',
      heroPhotoAlt: 'Invernadero WALIA con plásticos retráctiles',
      heroTitle: 'El invernadero inteligente con plásticos retráctiles',
      heroSub: 'Monitoriza y controla tu invernadero desde el móvil. Abre y cierra los plásticos de forma automática según las condiciones climáticas.',
      heroInfoBtn: 'Solicitar información',
      heroConoceBtn: 'Conoce WALIA',
      heroDossierBtn: 'Descarga el dossier',
      dossierHref: '../assets/docs/walia-dossier-es.pdf',
      dossierDownloadName: 'walia-dossier-es.pdf',
      productoEyebrow: 'Invernadero inteligente',
      productoH2: 'Plásticos retráctiles controlados desde tu móvil',
      productoLead: 'WALIA es un sistema de invernadero diseñado para todo tipo de cultivos. Sus plásticos agrícolas se abren y cierran de forma automática o manual mediante una aplicación móvil, adaptándose a las condiciones climáticas en tiempo real.',
      featSensoresTitle: 'Sensores climáticos',
      featSensoresP: 'Temperatura, humedad y precipitaciones en tiempo real.',
      featControlTitle: 'Control remoto',
      featControlP: 'Abre y cierra los plásticos desde tu teléfono, estés donde estés.',
      featAutoTitle: 'Automatización',
      featAutoP: 'Respuesta automática a cambios en las condiciones meteorológicas.',
      appEyebrow: 'App WALIA',
      appH2: 'Tu invernadero en la palma de la mano',
      appLead: 'La aplicación WALIA te permite monitorizar en tiempo real los datos de tu invernadero y controlar el estado de los plásticos retráctiles desde cualquier lugar.',
      dataTemp: 'Temperatura',
      dataHum: 'Humedad',
      dataRain: 'Precipitaciones',
      dataHist: 'Histórico',
      cultivosEyebrow: 'Cultivos compatibles',
      cultivosH2: 'Diseñado para todo tipo de invernaderos',
      cultivosLead: 'WALIA protege y optimiza la producción de los principales cultivos.',
      cultivos: ['Uva de mesa', 'Pitahaya', 'Cítricos', 'Cereza', 'Arándanos', 'Kiwi', 'Berries', 'Otros cultivos'],
      ctaH2: 'Visítanos en IFEMA Madrid',
      ctaP: 'Descubre WALIA en persona. Solicita tu cita y te mostramos cómo funciona el invernadero inteligente.',
      ctaBtn: 'Solicitar cita',
      contactEyebrow: 'Contacto WALIA',
      contactH2: '¿Quieres saber más?',
      contactLead: 'Escríbenos y te informamos sin compromiso sobre WALIA y cómo puede ayudarte en tu explotación.',
      mensajeLabel: 'Mensaje',
      mensajePlaceholder: '¿En qué cultivo estás interesado? ¿Cuántas hectáreas?',
      submitBtn: 'Enviar consulta',
      sentMsg: '✓ Se ha abierto tu cliente de correo. ¡Gracias!',
      consultaSubject: 'Consulta WALIA',
    },
    productos: {
      title: 'Productos y servicios — Mateo e Hijo',
      description: 'Invernaderos multicapilla, parral, túnel y multitúnel, WALIA, malla antihierba, riego, cubrimientos de pantano, cercados, proyectos llave en mano y mantenimientos agrícolas. Mateo e Hijo, desde 1979.',
      breadcrumb: '<a href="../index.html">Mateo e Hijo</a> / Productos y servicios',
      heroH1: 'Productos y servicios',
      heroP: 'Proyectos llave e mano.',
      cuandoEscogerlo: 'Cuándo escogerlo:',
      eyebrowInvernaderos: 'Invernaderos',
      eyebrowInnovacion: 'Innovación y tecnología',
      eyebrowServicios: 'Servicios e instalaciones',
      panels: {
        'invernaderos-tradicionales': {
          imgAlt: 'Invernaderos tradicionales Mateo e Hijo',
          title: 'Invernaderos tradicionales',
          lead: 'Diseñamos y construimos invernaderos adaptados a cada cultivo, terreno y clima. Nuestro equipo técnico te asesora en la elección de la estructura más adecuada para tu explotación, desde modelos multicapilla y parral hasta pequeños invernaderos de jardín.',
          sub1Title: 'Multicapilla',
          sub1Body: 'Techo a dos aguas y estructura de cables de acero que minimiza la necesidad de pilares centrales, optimizando el espacio y facilitando el acceso de maquinaria agrícola. Ideal para cítricos, uva de mesa y kiwi.',
          sub1When: 'apto para todo tipo de clima; con refuerzos adicionales, también en zonas frías con carga de nieve.',
          sub2Title: 'Parral',
          sub2Body: 'Estructura flexible de alambres y trenzas tensados, con cerramiento de láminas de plástico entre mallas de alambre. Los soportes se fijan al suelo mediante cimentación en acero galvanizado.',
          sub2When: 'ideal en climas cálidos, para tomates, pimientos, judías y otras plantas trepadoras.',
          sub3Title: 'Parral plano',
          sub3Body: 'Techo esencialmente plano o ligeramente inclinado que maximiza el aprovechamiento del espacio, especialmente indicado para cultivos en espaldera como la vid.',
          sub3When: 'cultivos en espaldera y zonas con viento fuerte, granizo o lluvias intensas.',
          sub4Title: 'Jardín',
          sub4Body: 'Diseño compacto y estético pensado para huertos y jardines domésticos, con techo inclinado a dos aguas para un buen drenaje y entrada de luz solar.',
          sub4When: 'huertos pequeños y plantas ornamentales, en climas fríos o templados.',
        },
        'walia': {
          imgAlt: 'WALIA, invernadero inteligente',
          title: 'Invernaderos inteligentes WALIA',
          lead: 'WALIA dota de inteligencia a tus invernaderos multiparral y multicapilla: sensores, motores y conexiones que abren y cierran los plásticos automáticamente e informan en tiempo real del clima en tu finca, con opción de placas solares para funcionar de forma autosostenible.',
          list1: 'Temperatura, humedad y precipitaciones en tiempo real',
          list2: 'Viento y radiación solar desde la app',
          list3: 'Recomendaciones inteligentes para maximizar la producción',
          ctaBtn: 'Descubre WALIA en detalle',
        },
        'tunel-multitunel': {
          imgAlt: 'Invernaderos túnel y multitúnel',
          title: 'Invernaderos túnel y multitúnel',
          lead: 'Estructuras curvas prefabricadas pensadas para instalaciones rápidas y económicas, desde pequeñas superficies hasta explotaciones tecnificadas de gran tamaño.',
          sub1Title: 'Túnel',
          sub1Body: 'Estructura totalmente curva desde el suelo hasta la cumbrera, formada por arcos de tubo galvanizado que no precisan zapatas de hormigón, lo que facilita su traslado e instalación.',
          sub1When: 'superficies y cultivos pequeños, hortícolas de porte rastrero o entutorados a baja altura.',
          sub2Title: 'Multitúnel',
          sub2Body: 'Invernadero industrial de estructura totalmente metálica y cubierta curva, con cerramiento de malla mosquitera y láminas de EVA sujetas mediante perfiles de acero galvanizado.',
          sub2When: 'explotaciones tecnificadas que necesitan control climático avanzado y automatización.',
        },
        'riego': {
          imgAlt: 'Instalaciones de riego',
          title: 'Instalaciones de riego',
          lead: 'Diseñamos e instalamos sistemas de riego adaptados a cada cultivo e invernadero, integrables con la automatización del clima para un control preciso del agua y un mejor aprovechamiento de los recursos.',
          list1: 'Automatización completa junto con el control climático del invernadero',
          list2: 'Ahorro de agua y de mano de obra',
          list3: 'Asesoramiento técnico personalizado de principio a fin',
        },
        'pantano': {
          imgAlt: 'Cubrimientos de pantano',
          title: 'Cubrimientos de pantano',
          lead: 'Cubrimos balsas y pantanos de riego para proteger el agua acumulada de la evaporación, la suciedad y la proliferación de algas, alargando la vida útil del agua y de toda la instalación de riego.',
          list1: 'Reduce la evaporación y las pérdidas de agua',
          list2: 'Protege la instalación de riego de suciedad y algas',
          list3: 'Materiales resistentes a la intemperie',
        },
        'malla-antihierba': {
          imgAlt: 'Malla antihierba',
          title: 'Malla antihierba',
          lead: 'Tela cubresuelos que impide el crecimiento de malas hierbas bajo el cultivo, reduciendo el uso de herbicidas y las labores de mantenimiento. Disponible en distintos gramajes y colores según la necesidad de cada finca.',
          list1: 'Reduce el mantenimiento y el uso de herbicidas',
          list2: 'Ayuda a conservar la humedad del suelo',
          list3: 'Fácil de instalar y de larga duración',
        },
        'cercados': {
          imgAlt: 'Cercados',
          title: 'Cercados',
          lead: 'Ejecutamos cercados y vallados para delimitar y proteger tu finca: desde cercados con muro de hormigón hasta mallas simple torsión o anudada ganadera, con puertas, tensores y accesorios a medida.',
          list1: 'Materiales galvanizados de alta durabilidad',
          list2: 'Diseño adaptado al uso: ganadero, perimetral o de seguridad',
          list3: 'Instalación con maquinaria y transporte propios',
        },
        'llave-en-mano': {
          imgAlt: 'Proyectos llave en mano',
          title: 'Proyectos llave en mano',
          lead: 'Nos encargamos de tu proyecto de principio a fin: asesoramiento técnico personalizado, maquinaria y transporte propio, y ejecución completa de la obra, para que tú solo tengas que preocuparte de tu cosecha.',
          list1: 'Un único interlocutor durante todo el proyecto',
          list2: 'Maquinaria de última generación y transporte propio',
          list3: 'Materiales respaldados por certificaciones anuales de calidad',
        },
        'mantenimientos': {
          imgAlt: 'Mantenimientos agrícolas',
          title: 'Mantenimientos agrícolas',
          lead: 'Nos encargamos del mantenimiento y desarrollo de tus plantaciones, garantizando resultados óptimos y liberándote de preocupaciones, con maquinaria innovadora y técnicas avanzadas.',
          list1: 'Injerto y poda',
          list2: 'Maquinaria y tractor propios',
          list3: 'Transporte con camión grúa',
        },
      },
      finalCtaBadge: 'Desde 1979',
      finalCtaH2: '¿Necesitas asesoramiento para tu proyecto?',
      finalCtaP: 'Cuéntanos qué necesitas y nuestro equipo técnico te ayuda a elegir la solución más adecuada para tu finca.',
      finalCtaVolver: 'Volver al inicio',
    },
  },
  en: {
    nav: {
      toggleAria: 'Open menu',
      empresa: 'Company',
      historia: 'History',
      equipo: 'Team',
      productos: 'Products',
      walia: 'WALIA',
      contacto: 'Contact',
      presupuesto: 'Request a quote',
      distribuidor: 'Become a distributor',
      trabaja: 'Work with us',
    },
    footer: {
      colabora: 'Collaborate',
      tagline: 'Since 1979 protecting your harvests, <span class="accent-green">weaving your dreams</span>',
      direccion: 'Ctra Los Vives, 13<br>03315 La Murada-Orihuela<br>(Alicante), Spain',
      avisoLegal: 'Legal notice',
      privacidad: 'Privacy',
    },
    modal: {
      title: 'Privacy Policy',
      closeAria: 'Close',
      p1: 'In compliance with Regulation (EU) 2016/679 and the Spanish Organic Law on Personal Data Protection, we inform you that the identity of the data controller is:',
      p2: 'MANTENIMIENTOS Y ESTRUCT. AGRÍCOLAS MATEO E HIJO, S.L.U.<br>Tax ID: B42531897<br>Ctra Los Vives, 13 · 03315 Orihuela (Alicante), Spain<br><a href="mailto:administracion@mateoehijo.com">administracion@mateoehijo.com</a>',
      p3: 'The personal data we process in our organization is the minimum necessary to contact you, for the purpose of sending you information, including, where applicable, commercial and/or advertising information.',
      p4: 'We inform you that all of it is protected with the necessary safeguards and will be kept only until the end of the business or working relationship. This processing is based on our legitimate interest in communicating with you, in compliance with and/or maintenance of business or working relationships.',
      p5: 'We inform you that we will not share your personal data provided by you.',
      p6: 'Please remember that you have a series of rights regarding the use of your personal data. We guarantee the exercise of the right of access, rectification, erasure, objection, restriction, portability and objection to automated decision-making.',
      p7: 'So that your data is a faithful reflection of reality, please make use of your right of rectification if it undergoes any modification, change or cancellation.',
      p8: 'You can exercise all of these rights by sending an email to the address indicated above. You also have the right to file complaints with the Spanish Data Protection Agency and to go to the Courts of Justice.',
      consent: 'I have read and accept the <a href="#" id="openPrivacy">privacy policy</a>.',
    },
    form: {
      asuntoLabel: 'Subject',
      consultaGeneral: 'General inquiry',
      nombreLabel: 'Full name',
      nombrePlaceholder: 'Your name',
      emailLabel: 'Email',
      telefonoLabel: 'Phone',
      mensajeLabel: 'Message / Comments',
      mensajePlaceholder: 'Tell us how we can help you…',
      submit: 'Send request',
      sentMsg: '✓ Your email client has opened with the request. Thank you!',
    },
    mail: {
      nombre: 'Name',
      email: 'Email',
      telefono: 'Phone',
      consultaFallback: 'Inquiry',
    },
    home: {
      title: 'Mateo e Hijo — Agricultural structures since 1979',
      description: 'Mateo e Hijo: greenhouses, WALIA, mesh, irrigation, fencing and turnkey projects. Since 1979 protecting your harvests, weaving your dreams.',
      heroImgAlt: 'Mateo e Hijo greenhouse',
      heroTagline: '46 years. Agricultural structures. <span class="accent-green">Weaving your dreams.</span>',
      heroServiciosBtn: 'Our services',
      heroContactaBtn: 'Contact us',
      statLabel: 'years',
      companyH2: 'A strategic ally for your harvests.',
      companyP: 'Orihuela, Alicante · since 1979.',
      productsSubheading: 'Discover the full catalog with all the technical information on <a href="productos/productos.html">our products and services page</a>.',
      carouselPrevAria: 'Previous',
      carouselNextAria: 'Next',
      carouselMore: 'See more ›',
      waliaTeaserP: 'The smart greenhouse.',
      waliaTeaserBtn: 'Discover it',
    },
    products: {
      'invernaderos-tradicionales': 'Traditional greenhouses',
      'walia': 'Smart greenhouses (WALIA)',
      'malla-antihierba': 'Anti-weed mesh',
      'tunel-multitunel': 'Tunnel and multi-tunnel greenhouses',
      'riego': 'Irrigation systems',
      'pantano': 'Reservoir covers',
      'cercados': 'Fencing',
      'llave-en-mano': 'Turnkey projects',
      'mantenimientos': 'Agricultural maintenance',
    },
    empresa: {
      title: 'About us — History and team | Mateo e Hijo',
      description: 'Since 1979, Mateo e Hijo has designed, manufactured and installed agricultural structures and WALIA with its own team covering the whole process, from idea to installation.',
      breadcrumbHistoria: '<a href="../index.html">Mateo e Hijo</a> / About us',
      breadcrumbEquipo: '<a href="../index.html">Mateo e Hijo</a> / About us / Team',
      historiaH1: 'Our history',
      historiaSub: 'More than four decades protecting the land.',
      heroHistoriaImgAlt: 'Mateo e Hijo agricultural parral structure',
      origenesImgAlt: "Agricultural structure in the field, provisional image of the company's origins",
      origenesH2: 'The origins',
      origenesP: 'In 1979, Mr. Mariano Ricardo Mateo Poveda founded Mateo e Hijo under his own name. From the start, the company built structures that protect crops from the weather.',
      inventarImgAlt: 'Multi-span parral structure in the field',
      inventarH2: 'Inventing to protect',
      inventarP: 'In 1989 we invented and built our first multi-span parral. In 2010 we installed the first greenhouse with manual movable covers, the first step towards structures that adapt to the crop.',
      llaveManoImgAlt: 'Agricultural work in a greenhouse, provisional image of the turnkey projects',
      llaveManoH2: 'Turnkey projects',
      llaveManoP: 'In 2019 we took a step further and began offering turnkey projects: we produce our own materials and have our own logistics and machinery. This way we control every phase of the work.',
      waliaImgAlt: "Screenshot of the Walia® app controlling a greenhouse's status from a mobile phone",
      waliaP: 'In 2022 Walia® by Mateo e Hijo was born as a project, and in 2026 it becomes a product. It combines our structures with motorization, sensors and software to manage the covers remotely and automatically.',
      cronologiaHeading: 'Timeline',
      timeline1979: 'Mr. Mariano Ricardo Mateo Poveda founds Mateo e Hijo under his own name',
      timeline1989: 'Invention and construction of the first multi-span parral',
      timeline2010: 'Installation of the first greenhouse with manual movable covers',
      timeline2019: 'Start of turnkey projects (own materials, logistics and machinery)',
      timeline2022: 'Walia® by Mateo e Hijo begins as a project',
      timeline2026: 'Walia® by Mateo e Hijo becomes a product',
      closing1: 'Innovation and technology for the agriculture of the future.',
      equipoHeroImgAlt: 'Mateo e Hijo team next to greenhouse materials in the warehouse',
      equipoH1: 'Our team',
      equipoSub: 'Our own team, from idea to installation.',
      teamLead: 'Mateo e Hijo designs, manufactures and installs structures and protection solutions for agriculture. We do it with our own team covering the whole process, without relying on third parties.',
      teamP1: 'Our engineering and architecture team designs every structure, and our technical production team manufactures the materials at our own facilities.',
      teamP2: 'We arrive at the plot with our own heavy vehicles, cranes and machinery, and we build greenhouses and agricultural structures with our own people.',
      teamP3: "A team dedicated to R&D develops the motorization, sensors and Walia® app. Mateo e Hijo was born building structures to protect crops, and today it adds intelligence, data and automation so those structures can make decisions.",
      coverageEyebrow: 'Where we operate',
      coverageMapAlt: 'Map of the Spanish Levante region with the points where Mateo e Hijo operates',
      gridHeading: 'Team areas',
      card1Alt: 'Design of agricultural structures, provisional image',
      card1H3: 'Design',
      card1P: 'Robotics engineering and architecture.',
      card2Alt: 'Production of our own materials, provisional image',
      card2H3: 'Production',
      card2P: 'Technical team and production of our own materials.',
      card3Alt: 'Construction of greenhouses and agricultural structures',
      card3H3: 'Construction',
      card3P: 'Greenhouses and agricultural structures.',
      card4Alt: 'Logistics with our own heavy vehicles and cranes, provisional image',
      card4H3: 'Logistics',
      card4P: 'Our own heavy vehicles and cranes.',
      card5Alt: 'Our own machinery for project development',
      card5H3: 'Project development',
      card5P: 'Our own machinery.',
      card6Alt: 'Automation and app development for agricultural protection',
      card6H3: 'Automation',
      card6P: 'App development for agricultural protection and R&D investment.',
      closing2: 'The future of agriculture is under control.',
      closingSignature: 'Walia® by Mateo e Hijo Team',
    },
    walia: {
      title: 'WALIA — Smart greenhouse | Mateo e Hijo',
      description: 'WALIA: smart greenhouse with retractable plastics controlled from your phone. A Mateo e Hijo product.',
      navProducto: 'Product',
      navApp: 'App',
      navCultivos: 'Crops',
      heroPhotoAlt: 'WALIA greenhouse with retractable plastics',
      heroTitle: 'The smart greenhouse with retractable plastics',
      heroSub: 'Monitor and control your greenhouse from your phone. Open and close the plastics automatically based on weather conditions.',
      heroInfoBtn: 'Request information',
      heroConoceBtn: 'Discover WALIA',
      heroDossierBtn: 'Download the dossier',
      dossierHref: '../assets/docs/walia-dossier-en.pdf',
      dossierDownloadName: 'walia-dossier-en.pdf',
      productoEyebrow: 'Smart greenhouse',
      productoH2: 'Retractable plastics controlled from your phone',
      productoLead: 'WALIA is a greenhouse system designed for all types of crops. Its agricultural plastics open and close automatically or manually through a mobile app, adapting to weather conditions in real time.',
      featSensoresTitle: 'Climate sensors',
      featSensoresP: 'Temperature, humidity and rainfall in real time.',
      featControlTitle: 'Remote control',
      featControlP: 'Open and close the plastics from your phone, wherever you are.',
      featAutoTitle: 'Automation',
      featAutoP: 'Automatic response to changes in weather conditions.',
      appEyebrow: 'WALIA App',
      appH2: 'Your greenhouse in the palm of your hand',
      appLead: 'The WALIA app lets you monitor your greenhouse data in real time and control the state of the retractable plastics from anywhere.',
      dataTemp: 'Temperature',
      dataHum: 'Humidity',
      dataRain: 'Rainfall',
      dataHist: 'History',
      cultivosEyebrow: 'Compatible crops',
      cultivosH2: 'Designed for all types of greenhouses',
      cultivosLead: 'WALIA protects and optimizes the production of the main crops.',
      cultivos: ['Table grapes', 'Dragon fruit', 'Citrus', 'Cherry', 'Blueberries', 'Kiwi', 'Berries', 'Other crops'],
      ctaH2: 'Visit us at IFEMA Madrid',
      ctaP: "Discover WALIA in person. Request your appointment and we'll show you how the smart greenhouse works.",
      ctaBtn: 'Request appointment',
      contactEyebrow: 'WALIA Contact',
      contactH2: 'Want to know more?',
      contactLead: "Write to us and we'll tell you, with no obligation, about WALIA and how it can help your farm.",
      mensajeLabel: 'Message',
      mensajePlaceholder: 'What crop are you interested in? How many hectares?',
      submitBtn: 'Send inquiry',
      sentMsg: '✓ Your email client has opened. Thank you!',
      consultaSubject: 'WALIA Inquiry',
    },
    productos: {
      title: 'Products and services — Mateo e Hijo',
      description: 'Multi-span, parral, tunnel and multi-tunnel greenhouses, WALIA, anti-weed mesh, irrigation, reservoir covers, fencing, turnkey projects and agricultural maintenance. Mateo e Hijo, since 1979.',
      breadcrumb: '<a href="../index.html">Mateo e Hijo</a> / Products and services',
      heroH1: 'Products and services',
      heroP: 'Turnkey projects.',
      cuandoEscogerlo: 'When to choose it:',
      eyebrowInvernaderos: 'Greenhouses',
      eyebrowInnovacion: 'Innovation and technology',
      eyebrowServicios: 'Services and installations',
      panels: {
        'invernaderos-tradicionales': {
          imgAlt: 'Traditional greenhouses by Mateo e Hijo',
          title: 'Traditional greenhouses',
          lead: 'We design and build greenhouses adapted to each crop, terrain and climate. Our technical team advises you on choosing the most suitable structure for your farm, from multi-span and parral models to small garden greenhouses.',
          sub1Title: 'Multi-span',
          sub1Body: 'Gable roof and steel cable structure that minimizes the need for central posts, optimizing space and making it easier for agricultural machinery to access. Ideal for citrus, table grapes and kiwi.',
          sub1When: 'suitable for all climates; with additional reinforcements, also in cold areas with snow load.',
          sub2Title: 'Parral',
          sub2Body: 'Flexible structure of tensioned wires and strands, enclosed with plastic sheets between wire mesh. The supports are fixed to the ground with galvanized steel foundations.',
          sub2When: 'ideal in warm climates, for tomatoes, peppers, beans and other climbing plants.',
          sub3Title: 'Flat parral',
          sub3Body: 'Essentially flat or slightly sloped roof that maximizes the use of space, especially suited to espalier crops such as vines.',
          sub3When: 'espalier crops and areas with strong wind, hail or heavy rain.',
          sub4Title: 'Garden',
          sub4Body: 'Compact, attractive design for vegetable gardens and home gardens, with a gable roof for good drainage and sunlight.',
          sub4When: 'small gardens and ornamental plants, in cold or temperate climates.',
        },
        'walia': {
          imgAlt: 'WALIA, smart greenhouse',
          title: 'WALIA smart greenhouses',
          lead: 'WALIA brings intelligence to your multi-parral and multi-span greenhouses: sensors, motors and connections that open and close the plastics automatically and report your farm\'s weather in real time, with the option of solar panels for self-sufficient operation.',
          list1: 'Temperature, humidity and rainfall in real time',
          list2: 'Wind and solar radiation from the app',
          list3: 'Smart recommendations to maximize production',
          ctaBtn: 'Discover WALIA in detail',
        },
        'tunel-multitunel': {
          imgAlt: 'Tunnel and multi-tunnel greenhouses',
          title: 'Tunnel and multi-tunnel greenhouses',
          lead: 'Prefabricated curved structures designed for fast, economical installations, from small areas to large-scale technified farms.',
          sub1Title: 'Tunnel',
          sub1Body: 'Fully curved structure from the ground to the ridge, made of galvanized tube arches that do not require concrete footings, making it easier to move and install.',
          sub1When: 'small areas and crops, low-growing or low-staked vegetable crops.',
          sub2Title: 'Multi-tunnel',
          sub2Body: 'Industrial greenhouse with a fully metal structure and curved roof, enclosed with insect mesh and EVA sheets held by galvanized steel profiles.',
          sub2When: 'technified farms that need advanced climate control and automation.',
        },
        'riego': {
          imgAlt: 'Irrigation systems',
          title: 'Irrigation systems',
          lead: "We design and install irrigation systems adapted to each crop and greenhouse, which can be integrated with the greenhouse's climate automation for precise water control and better use of resources.",
          list1: "Full automation together with the greenhouse's climate control",
          list2: 'Water and labor savings',
          list3: 'Personalized technical advice from start to finish',
        },
        'pantano': {
          imgAlt: 'Reservoir covers',
          title: 'Reservoir covers',
          lead: 'We cover irrigation reservoirs and ponds to protect the stored water from evaporation, dirt and algae growth, extending the life of the water and of the whole irrigation system.',
          list1: 'Reduces evaporation and water loss',
          list2: 'Protects the irrigation system from dirt and algae',
          list3: 'Weather-resistant materials',
        },
        'malla-antihierba': {
          imgAlt: 'Anti-weed mesh',
          title: 'Anti-weed mesh',
          lead: 'Ground cover fabric that prevents weed growth under the crop, reducing herbicide use and maintenance work. Available in different weights and colors depending on each farm\'s needs.',
          list1: 'Reduces maintenance and herbicide use',
          list2: 'Helps retain soil moisture',
          list3: 'Easy to install and long-lasting',
        },
        'cercados': {
          imgAlt: 'Fencing',
          title: 'Fencing',
          lead: 'We build fences and enclosures to mark out and protect your farm: from concrete-wall fencing to simple-twist or knotted livestock mesh, with gates, tensioners and custom accessories.',
          list1: 'Highly durable galvanized materials',
          list2: 'Design adapted to use: livestock, perimeter or security',
          list3: 'Installation with our own machinery and transport',
        },
        'llave-en-mano': {
          imgAlt: 'Turnkey projects',
          title: 'Turnkey projects',
          lead: 'We take care of your project from start to finish: personalized technical advice, our own machinery and transport, and complete execution of the work, so you only have to worry about your harvest.',
          list1: 'A single point of contact throughout the project',
          list2: 'State-of-the-art machinery and our own transport',
          list3: 'Materials backed by annual quality certifications',
        },
        'mantenimientos': {
          imgAlt: 'Agricultural maintenance',
          title: 'Agricultural maintenance',
          lead: 'We take care of the maintenance and development of your crops, guaranteeing optimal results and freeing you from worries, with innovative machinery and advanced techniques.',
          list1: 'Grafting and pruning',
          list2: 'Our own machinery and tractor',
          list3: 'Transport with a crane truck',
        },
      },
      finalCtaBadge: 'Since 1979',
      finalCtaH2: 'Need advice for your project?',
      finalCtaP: "Tell us what you need and our technical team will help you choose the best solution for your farm.",
      finalCtaVolver: 'Back to home',
    },
  },
};

(function () {
  const STORAGE_KEY = 'meh_lang';
  const FLAG_FILES = { es: 'ES.webp', en: 'EN.webp' };
  const LANG_NAMES = { es: 'Español', en: 'English' };
  const SUPPORTED = ['es', 'en'];

  function detectDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'es';
  }

  let currentLang = detectDefaultLang();

  function resolve(dict, key) {
    return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
  }

  function t(key, lang) {
    lang = lang || currentLang;
    const value = resolve(window.MEH_TRANSLATIONS[lang], key);
    if (value !== undefined) return value;
    return resolve(window.MEH_TRANSLATIONS.es, key);
  }

  function applyTranslations(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = t(el.getAttribute('data-i18n'));
      if (typeof val === 'string') el.textContent = val;
    });
    root.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const val = t(el.getAttribute('data-i18n-html'));
      if (typeof val === 'string') el.innerHTML = val;
    });
    root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      let map;
      try { map = JSON.parse(el.getAttribute('data-i18n-attr')); } catch (e) { return; }
      Object.keys(map).forEach((attr) => {
        const val = t(map[attr]);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });
    document.documentElement.lang = currentLang;
    const titleKey = document.body.dataset.i18nTitle;
    if (titleKey) {
      const val = t(titleKey);
      if (typeof val === 'string') document.title = val;
    }
    const descKey = document.body.dataset.i18nDescription;
    if (descKey) {
      const val = t(descKey);
      const metaDesc = document.querySelector('meta[name="description"]');
      if (typeof val === 'string' && metaDesc) metaDesc.setAttribute('content', val);
    }
  }

  function updateSwitcherUI() {
    document.querySelectorAll('.lang-option').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    });
  }

  function buildSwitchers() {
    const base = document.body.dataset.base || '';
    document.querySelectorAll('.lang-switcher').forEach((wrap) => {
      if (wrap.dataset.built) return;
      wrap.dataset.built = 'true';
      SUPPORTED.forEach((lang) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-option';
        btn.dataset.lang = lang;
        btn.setAttribute('aria-label', LANG_NAMES[lang]);
        btn.innerHTML = `<span class="lang-flag"><img src="${base}assets/${FLAG_FILES[lang]}" alt="" aria-hidden="true"></span><span class="lang-code">${lang.toUpperCase()}</span>`;
        btn.addEventListener('click', () => setLang(lang));
        wrap.appendChild(btn);
      });
    });
    updateSwitcherUI();
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
    updateSwitcherUI();
    // Selecting a language is also a good time to close the mobile nav
    // menu, in case the switcher was reached from inside it.
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('open');
    const navToggle = document.getElementById('navToggle');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    document.dispatchEvent(new CustomEvent('meh:langchange', { detail: { lang } }));
  }

  function getLang() { return currentLang; }

  document.addEventListener('DOMContentLoaded', () => {
    buildSwitchers();
    applyTranslations();
  });

  window.MEH_I18N = { t, setLang, getLang, applyTranslations: () => applyTranslations() };
})();
