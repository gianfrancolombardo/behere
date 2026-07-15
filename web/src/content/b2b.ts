import type { LandingContent } from './types';

export const b2bContent: LandingContent = {
  seo: {
    title: 'BeHere para Artistas — Recupera tu show y monetiza sin spoilers',
    description:
      'Elimina las pantallas del público sin bolsas ni fricción. Sube tu contenido exclusivo, recupera un público atento e ingresa con quienes no asistieron. Piloto gratuito.',
    ogTitle: 'Tu escenario merece miradas, no lentes de iPhone',
    ogDescription:
      'BeHere devuelve la atención al directo y distribuye el contenido exclusivo que tú subes. Sin hardware. Sin riesgo en el piloto.',
  },
  hero: {
    headline: 'Tu show. Tu control. Tu ingreso extra.',
    subheadline:
      'BeHere elimina las pantallas del público sin bolsas, sin seguridad y sin cuellos de botella. Recuperas la atención del directo y monetizas el contenido exclusivo que tú subes — a quienes estuvieron en la sala y a quienes no pudieron venir. Piloto gratuito para los primeros shows.',
    primaryCta: 'Solicitar piloto gratuito',
    secondaryCta: 'Ver cómo funciona',
    secondaryCtaHref: '#how-it-works',
    trustBar: [
      'Sin hardware',
      'Piloto a coste cero',
      '70% de ingresos para el artista',
      'Onboarding en tu primer show',
    ],
    microcopy: 'Te llamamos en un máximo de 48 h laborables. Conversación de 15 min para encajar tu show.',
  },
  problem: {
    title: 'Cada show que das, alguien lo está arruinando en TikTok',
    body: 'Pagas ensayos, giras y producción. Llegas al escenario y la mitad del público te ve a través de un rectángulo de seis pulgadas.\n\nUn chiste grabado y subido antes de que termine la gira. Un solo de tres minutos convertido en spoiler de mala calidad. Un teatro lleno de luces de pantalla que te impiden conectar con la sala.\n\nLas soluciones actuales empeoran el problema: bolsas que generan filas interminables, personal de seguridad agresivo, y un público que llega ya de mal humor.',
    painPoints: [
      {
        title: 'Spoilers fuera de control',
        description:
          'Tu material exclusivo circula en redes antes de que tú decidas publicarlo.',
        icon: 'eye-off',
      },
      {
        title: 'Público desconectado',
        description: 'Menos energía en la sala. Menos conexión. Menos magia del directo.',
        icon: 'users',
      },
      {
        title: 'Logística imposible',
        description:
          'Bloquear teléfonos con hardware no escala. Y tu staff ya tiene suficiente con lo que tiene.',
        icon: 'package-x',
      },
    ],
    transition:
      'Tiene que haber una forma de recuperar tu escenario sin convertirte en el policía de la sala.',
  },
  solution: {
    title: 'BeHere: tecnología invisible, escenario sagrado',
    body: 'BeHere es la app que convierte la atención del público en un trato de honor. Los fans activan el "Modo Show", guardan el teléfono y viven el directo de verdad. Tú recuperas una sala que te mira a los ojos.\n\nY cuando el show termina, el contenido exclusivo que tú subes a la plataforma — show completo, un fragmento, detrás de escena, merch digital u otro extra — se convierte en tu nueva fuente de ingresos.',
    pillars: [
      {
        headline: 'Control',
        title: 'Recupera tu estreno',
        copy: 'Tú decides qué contenido subes y cuándo se distribuye. Sin leaks. Sin spoilers. Sin sorpresas en TikTok a las 11 de la noche.',
        icon: 'shield',
      },
      {
        headline: 'Monetización',
        title: 'Ingresa con quienes no vinieron',
        copy: 'Vende tu contenido exclusivo a fans que no pudieron asistir. RevShare justo: 70% para ti, 30% para BeHere. Cero inversión inicial.',
        icon: 'trending-up',
      },
      {
        headline: 'Experiencia',
        title: 'Cero fricción en la entrada',
        copy: 'Sin bolsas. Sin cajas fuertes. Sin filas extra. Un QR en la puerta y el artista en el escenario hace el resto.',
        icon: 'qr-code',
      },
    ],
    comparison: {
      competitorLabel: 'Bolsas físicas',
      behereLabel: 'BeHere',
      rows: [
        {
          label: 'Fricción en entrada',
          competitor: 'Alta — filas y personal extra',
          behere: 'Mínima — QR y app',
        },
        {
          label: 'Coste de hardware',
          competitor: 'Por dispositivo',
          behere: 'Cero',
        },
        {
          label: 'Recompensa al fan',
          competitor: 'Ninguna (solo restricción)',
          behere: 'Contenido exclusivo gratis por asistir',
        },
        {
          label: 'Monetización post-show',
          competitor: 'No',
          behere: 'Sí — venta del contenido que tú subes',
        },
        {
          label: 'Escalabilidad',
          competitor: 'Logística pesada',
          behere: '100% software',
        },
      ],
    },
  },
  steps: {
    title: 'Cuatro pasos. Cero complicaciones.',
    steps: [
      {
        title: 'Acuerdo',
        description:
          'Firmamos un piloto gratuito. Tú nos cedes licencia de distribución del contenido exclusivo de ese show. Tú te quedas con el 70% de las ventas y el control creativo total.',
      },
      {
        title: 'Tu contenido',
        description:
          'Tú subes a la plataforma lo que quieras ofrecer: el show completo, una parte, detrás de escena, merchandising digital u otro extra. Tú produces; nosotros distribuimos.',
      },
      {
        title: 'Activación',
        description:
          'En la entrada del recinto, carteles con QR invitan al público a activar el Modo Show. Tú (o tu MC) lanzas el reto desde el escenario. Soporte dedicado en tu primer show.',
      },
      {
        title: 'Resultado',
        description:
          'Fans que completan el reto reciben tu contenido gratis. Los que no, pueden comprarlo. Los que no asistieron, también. Tú cobras. El público gana. Tu material queda protegido.',
      },
    ],
    intermediateCta: 'Quiero mi piloto gratuito',
  },
  urgency: {
    title:
      'El stand-up lo sabe. La música indie lo siente. Los teatros pequeños lo viven cada fin de semana.',
    body: 'No necesitas un estadio de 20.000 personas para que el problema duela. En una sala de 200, un solo video viral puede destrozar meses de material nuevo.\n\nEstamos seleccionando 5 artistas o salas para el piloto de lanzamiento. Tú subes el contenido. Solo falta tu próximo show.',
    scarcity: 'Plazas de piloto limitadas — acceso anticipado para los primeros shows.',
  },
  earlyAccess: {
    title: 'Sé de los primeros en activar BeHere en tu sala',
    body: 'El piloto gratuito incluye soporte dedicado para tu show: configuración, activación en sala y seguimiento post-evento.\n\nUna oportunidad para ser de los primeros en recuperar tu escenario.',
    bullets: [
      'Piloto a coste cero con reparto 70/30',
      'Sin hardware ni instalación en tu sala',
      'Contenido exclusivo que tú produces y controlas',
      'Respuesta comercial en un máximo de 48 h laborables',
    ],
    footnote: '5 plazas para el piloto de lanzamiento.',
  },
  pricing: {
    title: 'Ganas cuando ganas. Literalmente.',
    rows: [
      { concept: 'Coste del piloto', detail: '0 € — plataforma y tecnología incluidas' },
      { concept: 'Reparto de ventas', detail: '70% artista / 30% BeHere' },
      {
        concept: 'Fan que completa el reto',
        detail: 'Recibe tu contenido exclusivo gratis (financiado por el modelo)',
      },
      {
        concept: 'Fan que falla el reto',
        detail: 'Puede comprar el contenido a precio que tú defines',
      },
      {
        concept: 'Fan que no asistió',
        detail: 'Puede comprar el contenido — nuevo mercado para ti',
      },
      { concept: 'Hardware', detail: 'Ninguno. Cero.' },
    ],
    closing: 'Si el piloto no te convence, no debes nada. Si funciona, escalamos juntos.',
  },
  faq: {
    items: [
      {
        question: '¿Y si mi público no quiere guardar el teléfono?',
        answer:
          'No obligamos a nadie. BeHere premia la atención, no castiga la distracción. Quien no participa simplemente no recibe el contenido exclusivo gratis — pero puede comprarlo después. La gamificación y la recompensa hacen que la mayoría elija participar voluntariamente.',
      },
      {
        question: '¿Necesito instalar algo en mi sala?',
        answer:
          'No. Cero hardware. Cero instalación. Solo carteles con QR en la entrada y que tú (o tu equipo) mencionéis BeHere desde el escenario. Nosotros nos encargamos del resto.',
      },
      {
        question: '¿Quién es dueño del contenido?',
        answer:
          'Tú. Siempre. BeHere actúa como pasarela tecnológica con licencia de distribución comercial del contenido que subes para ese show. Los derechos de autor son tuyos. Tú decides qué subir: show completo, fragmento, detrás de escena, merch digital u otro extra.',
      },
      {
        question: '¿Funciona sin internet durante el show?',
        answer:
          'Pensado para salas con mala cobertura. En el piloto adaptamos la configuración a tu venue para que la experiencia funcione de principio a fin.',
      },
      {
        question: '¿Solo funciona para música?',
        answer:
          'No. Nació pensando en stand-up (donde un spoiler destruye material), pero funciona igual para teatro, música indie, spoken word y cualquier show en vivo donde la pantalla roba la experiencia.',
      },
      {
        question: '¿Qué necesito para empezar el piloto?',
        answer:
          'Un show programado, el contenido exclusivo que quieras ofrecer, disposición a mencionar BeHere desde el escenario, y 15 minutos para una llamada de onboarding. Nosotros ponemos la plataforma, la tecnología y el soporte.',
      },
      {
        question: '¿Cuánto cuesta después del piloto?',
        answer:
          'El modelo de ingresos es por reparto de ventas (70/30). Sin cuotas mensuares en esta fase. Los detalles del contrato post-piloto se acuerdan contigo directamente.',
      },
    ],
  },
  finalCta: {
    title: 'Tu próximo show puede ser el primero sin pantallas',
    subtitle:
      'Solicita acceso al piloto gratuito. Sin compromiso. Te llamamos en un máximo de 48 h laborables.',
    cta: 'Solicitar mi piloto gratuito',
    riskReversal:
      'Sin tarjeta. Sin permanencia. Si el piloto no funciona para tu show, paramos ahí.',
  },
  pilotForm: {
    microcopy: 'Te llamamos en un máximo de 48 h laborables. Conversación de 15 min para encajar tu show.',
    successMessage:
      'Recibido. Te contactamos en un máximo de 48 h laborables para una conversación breve y coordinar tu piloto.',
    actTypeOptions: ['Stand-up', 'Música indie', 'Teatro', 'Otro'],
  },
  stickyCta: 'Piloto gratuito',
};
