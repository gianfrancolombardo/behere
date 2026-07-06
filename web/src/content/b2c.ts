import type { LandingContent } from './types';

export const b2cContent: LandingContent = {
  seo: {
    title: 'BeHere — Vive el concierto. Quédate con el premio.',
    description:
      'Guarda el móvil, vive el show de verdad y desbloquea el contenido exclusivo que el artista reservó para ti. Sin spoilers. Sin videos borrosos. Solo presencia.',
    ogTitle: 'Siente el ruido. Tu premio te espera al salir.',
    ogDescription:
      'La app que te premia por estar presente. Modo Show activo = contenido exclusivo del artista al salir del recinto.',
  },
  hero: {
    headline: 'Siente el ruido. Tu premio te espera al salir.',
    subheadline:
      'Activa el Modo Show, guarda el móvil y vive el directo sin filtros. Si aguantas todo el set, desbloqueas el contenido exclusivo que el artista subió para quienes estuvieron de verdad.',
    primaryCta: 'Descargar BeHere',
    secondaryCta: '¿Cómo funciona?',
    secondaryCtaHref: '#how-it-works',
    trustBar: [
      'Gratis para quien completa el reto',
      'Contenido oficial del artista',
      'Sin publicidad',
      'Sin spam',
    ],
    tagline: 'Be Here. Get It.',
  },
  problem: {
    title: '¿Pagaste 40 euros para ver un concierto a través del móvil de otro?',
    body: 'Hiciste fila bajo la lluvia. Compraste la entrada. Viajaste hasta la sala. Y cuando por fin sonó tu canción favorita, tu primer instinto fue levantar el teléfono.\n\nAudio saturado. Video tembloroso. Un recuerdo de 30 segundos enterrado en tu galería que no volverás a ver jamás.\n\nMientras tanto, el artista está a cinco metros dándolo todo. Pero tú estás ocupado con el encuadre para tus stories.',
    painPoints: [
      {
        title: 'El de adelante',
        description:
          'Ves el show entero a través de la pantalla del desconocido de delante. Pagaste entrada VIP para mirar un iPhone.',
        icon: 'smartphone',
      },
      {
        title: 'Tu propia galería',
        description:
          '200 videos de conciertos. Audio horrible. Nunca los abres. Pero perdiste la mitad de cada show grabándolos.',
        icon: 'image',
      },
      {
        title: 'El spoiler',
        description:
          'Subes un fragmento a redes. El artista lo ve. Tu momento robó material que no te pertenece.',
        icon: 'share-2',
      },
    ],
    transition: 'No te estamos juzgando. Todos lo hacemos. Pero tiene que haber una forma mejor.',
  },
  solution: {
    title: 'Un trato justo: tú vives el show, el artista te da el premio',
    body: 'BeHere no te prohíbe nada. Te propone un pacto:\n\nGuarda el móvil en el bolsillo. Activa el Modo Show. Vive las próximas dos horas como si fuera 2005 — pero con mejor música y peor tabaco de la sala.\n\nSi aguantas todo el set sin desbloquear la pantalla, al salir del recinto desbloqueas el contenido exclusivo que el artista subió a BeHere — puede ser el show completo, un fragmento, detrás de escena, merch digital u otro extra. En tu correo o en la app. Gratis. El premio que mereces, sin arruinarte la noche.',
    pillars: [
      {
        headline: 'Presencia',
        title: 'Presencia real',
        copy: 'Siente la batería en el pecho, el bajo en el suelo y la mirada del artista. Sin pantalla de por medio.',
        icon: 'heart',
      },
      {
        headline: 'Recuerdo',
        title: 'Recuerdo perfecto',
        copy: 'Contenido oficial del artista. Mejor que cualquier cosa que pudieras grabar con tu móvil. Y sí, esta vez lo vas a reproducir.',
        icon: 'video',
      },
      {
        headline: 'Sin culpa',
        title: 'Sin culpa',
        copy: 'No es autocontrol castigado. Es un juego con recompensa real. Ganas por estar ahí de verdad.',
        icon: 'trophy',
      },
    ],
  },
  steps: {
    title: 'Tres pasos. Cero excusas.',
    steps: [
      {
        title: 'Llegas al show',
        description:
          'Escaneas el QR en la entrada o abres la app. Un email. Un botón. Aceptas el Pacto de Presencia. Listo en 15 segundos.',
      },
      {
        title: 'Modo Show ON',
        description:
          'Tu pantalla se oscurece. El móvil se duerme. Tú despiertas. El contador corre. El show empieza. Tú empiezas a vivirlo.',
      },
      {
        title: 'Show terminado',
        description:
          'Sales del recinto. Abres la app (o revisa tu correo). Ahí está: el contenido exclusivo que el artista reservó para ti. Gratis. Porque estuviste presente.',
      },
    ],
    microcopy:
      'Si aguantas, ganas. Si no, siempre puedes comprar el contenido después. Pero confía: una vez que lo pruebas, no quieres volver atrás.',
    intermediateCta: 'Quiero probarlo',
  },
  challenge: {
    title: '¿Aguantas todo el set sin mirar el móvil?',
    body: 'A que no aguantas todo el concierto sin revisar WhatsApp.\n\nA que no puedes ver a tu artista favorito a los ojos sin pensar en el encuadre.\n\nA que no eres capaz de sentir un show entero sin documentarlo para nadie.\n\nPon a prueba tu atención. Nosotros ponemos el premio.',
    placeholder:
      'Sé de los primeros en completar el reto. Los early adopters tendrán acceso prioritario a shows exclusivos.',
  },
  reward: {
    title: 'Esto es lo que puede desbloquear al salir',
    items: [
      'Contenido exclusivo que el artista subió para ese show',
      'Puede ser show completo, fragmento, detrás de escena o merch digital',
      'Calidad oficial — no el audio de tu micrófono a 15 metros del escenario',
      'Descarga directa a tu móvil',
      'Sin marca de agua. Sin publicidad. Contenido del artista.',
    ],
    comparison: {
      headers: ['Tu video', 'El premio BeHere'],
      rows: [
        { yours: 'Tembloroso', behere: 'Contenido oficial del artista' },
        { yours: 'Audio saturado', behere: 'Calidad de producción profesional' },
        { yours: '30 segundos', behere: 'Lo que el artista decidió regalarte' },
        { yours: 'Nadie lo ve', behere: 'El recuerdo que sí reproduces' },
        { yours: 'Gratis (pero inútil)', behere: 'Gratis (y vale la pena)' },
      ],
    },
  },
  profiles: {
    title: 'Si esto te suena, BeHere es para ti',
    inclusion:
      'No importa si vas a salas de 200 o festivales de 5.000. Si hay un show en vivo, hay un reto que ganar.',
    items: [
      {
        title: 'El superfan',
        description:
          'Vas a todos los shows de tu banda. Quieres el contenido exclusivo del artista sin perderte un solo segundo del directo.',
        icon: 'star',
      },
      {
        title: 'El del comedy club',
        description:
          'Sabes que un video de un chiste arruina la gira. Quieres reír sin culpa y llevarte lo que el artista reservó para la sala.',
        icon: 'mic-2',
      },
      {
        title: 'El quemado de pantallas',
        description:
          'Estás harto de ver conciertos a través del móvil del de delante. Quieres recuperar la experiencia en vivo.',
        icon: 'monitor-off',
      },
    ],
  },
  testimonials: {
    title: 'La sala entera lo está haciendo',
    items: [
      {
        quote:
          'No pensé que aguantaría dos horas sin el móvil. Pero cuando salí y vi lo que el artista había preparado... fue mejor que haberlo grabado yo mil veces.',
        author: '[Nombre]',
        role: 'Fan de [Artista]',
        placeholder: true,
      },
      {
        quote:
          'Por primera vez bailé un concierto entero sin pensar en Instagram. Y tengo el video más épico de mi galería.',
        author: '[Nombre]',
        role: '[Ciudad]',
        placeholder: true,
      },
    ],
    footnote: 'Estamos en beta cerrada. Sé de los primeros en probarlo en tu ciudad.',
  },
  faq: {
    items: [
      {
        question: '¿Me obligáis a guardar el móvil?',
        answer:
          'No. BeHere premia, no castiga. Si no activas el Modo Show o no completas el reto, simplemente no recibes el contenido exclusivo gratis. Puedes comprarlo después si quieres. Cero presión.',
      },
      {
        question: '¿Cómo sabéis que no miro el móvil?',
        answer:
          'El Modo Show detecta si desbloqueas la pantalla. Si aguantas, ganas. Es un juego, no una vigilancia. Sin cámaras. Sin datos personales raros. Solo tu teléfono y tu fuerza de voluntad.',
      },
      {
        question: '¿Funciona sin internet en la sala?',
        answer:
          'Sí. El Modo Show funciona offline. Al salir del recinto, cuando recuperas señal, se sincroniza y recibes tu recompensa.',
      },
      {
        question: '¿De verdad es gratis?',
        answer:
          'Sí — si completas el reto. El contenido exclusivo del artista te cuesta 0 € por el simple hecho de haber estado presente. Financiado por fans que no asistieron y compran el contenido después.',
      },
      {
        question: '¿Qué pasa con mi batería?',
        answer:
          'La app usa pantalla negra OLED (apaga píxeles) y baja el brillo al mínimo. Diseñada para sobrevivir un show entero sin dejarte tirado.',
      },
      {
        question: '¿En qué salas funciona?',
        answer:
          'Estamos en beta cerrada con salas y artistas seleccionados. Déjanos tu email y te avisamos cuando lleguemos a tu ciudad.',
      },
      {
        question: '¿Puedo usarlo en cualquier concierto?',
        answer:
          'Solo en shows que tengan acuerdo con BeHere. Pero cada vez son más. Consulta la cartelera dentro de la app (próximamente).',
      },
    ],
  },
  finalCta: {
    title: 'Tu pantalla de seis pulgadas no es más grande que este escenario',
    subtitle: 'El próximo show puede ser diferente. Modo Show. Bolsillo. Presencia.',
    cta: 'Descargar BeHere',
  },
  betaModal: {
    title: 'Estamos en beta cerrada. ¿Quieres entrar?',
    body: 'BeHere llega a tu ciudad muy pronto. Déjanos tu email y serás de los primeros en recibir acceso cuando abramos tu zona.',
    cta: 'Avísame cuando esté listo',
    microcopy: 'Sin spam. Solo un email cuando tengamos un show cerca de ti.',
    successMessage:
      'Listo. Estás en la lista. Cuando haya un show BeHere en tu ciudad, serás de los primeros en saberlo. Ahora sí: guarda el móvil y vive el directo.',
    fields: {
      email: 'Email',
      city: 'Ciudad',
      showType: '¿Qué tipo de shows sueles ver?',
      showTypeOptions: ['Conciertos', 'Stand-up', 'Teatro', 'Festivales', 'Otro'],
    },
  },
  stickyCta: 'Descargar',
};
