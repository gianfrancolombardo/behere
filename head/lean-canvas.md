# **Modelo de Negocio y Estrategia Lean: App "Be Here"**

Para un equipo de dos personas (un perfil técnico y uno operativo/comercial), el enfoque Lean Startup es vital: construir rápido, medir y aprender con el menor costo posible. Tu objetivo no es crear la app perfecta, sino demostrar que el usuario está dispuesto a cambiar su comportamiento por una recompensa y que el artista ve valor en esto.

## **1\. El Lean Canvas del Proyecto**

| Bloque | Descripción para el MVP |
| :---- | :---- |
| **1\. Problema** | Los artistas pierden el control de su contenido (spoilers/mala calidad). El público sufre fatiga de pantallas. Las soluciones físicas (Yondr) generan cuellos de botella logísticos. |
| **2\. Segmento de Clientes** | **B2B (Early Adopters):** Comediantes de stand-up locales, bandas indie, teatros pequeños. **B2C:** Fans acérrimos ("Superfans") que valoran el material oficial. |
| **3\. Propuesta de Valor** | Para el **artista**: Recuperar la exclusividad del show y monetizar el contenido que él sube a la plataforma. Para el **fan**: Disfrutar el momento y desbloquear contenido exclusivo del artista como recompensa. |
| **4\. Solución** | App gamificada ("Modo Show") que detecta si el usuario abandona la pantalla. Si aguanta todo el show, desbloquea el contenido exclusivo que el artista subió — show completo, fragmento, detrás de escena, merch digital u otro extra. |
| **5\. Canales** | Venta directa B2B (Operaciones contacta a mánagers/salas). El artista promociona la dinámica a sus fans por redes y pantallas del recinto. |
| **6\. Flujo de Ingresos** | Modelo B2B2C: Venta del contenido premium que el artista sube — a asistentes que fallaron el reto y a quienes no asistieron. Reparto de ingresos (RevShare) con el artista. |
| **7\. Estructura de Costos** | Horas de desarrollo (Socio Tech), servidores/almacenamiento en la nube para el contenido que suben los artistas, gestiones legales (contratos de derechos de autor). |
| **8\. Métricas Clave** | Tasa de adopción (% de asistentes que abren el "Modo Show"). Tasa de retención (% que lo completa). Tasa de conversión (% que descarga/compra el contenido exclusivo). |
| **9\. Ventaja Injusta** | Cero hardware, cero fricción de entrada al recinto. Totalmente escalable por software. El artista produce y sube su propio contenido; BeHere no graba ni produce. |

## **2\. Dificultades Técnicas y Legales (Para el Socio Tech y Operativo)**

**El reto de la conectividad (Técnico):**

En un concierto con 5,000 personas, las redes móviles (4G/5G) colapsan. Tu app no puede depender de internet constante.

* *Solución:* El "Modo Show" debe funcionar 100% *offline*. La app guarda un token criptográfico localmente si el usuario falla. Al salir del recinto (donde ya hay internet), la app se sincroniza con el servidor para validar si ganó o no la recompensa.

**El consumo de batería (Técnico):**

Mantener una app activa durante 2 horas drena la batería. La interfaz debe ser de color negro puro (en pantallas OLED apaga los píxeles) y bajar el brillo del teléfono al 1% automáticamente usando las APIs del sistema.

**Derechos de Propiedad Intelectual (Legal):**

Tú no eres dueño de la música ni de la imagen del artista.

* *Solución:* El contrato debe estipular claramente que el artista te cede una licencia temporal de distribución comercial del contenido que sube para ese show específico. Tú actúas como pasarela tecnológica; el artista es dueño del contenido y decide qué ofrece.

## **3\. Estrategia de Validación (Cómo saber si lo usarán sin programar nada)**

Antes de que el socio Tech programe la app nativa, el socio Operativo debe validar la hipótesis del comportamiento humano.

**El experimento "Conserje" (MVP de baja fidelidad):**

1. Busca un show de comedia local o una banda de covers pequeña en un bar para 50 personas.  
2. En la entrada, pon un cartel: *"Experimento libre de móviles. Entrega tu teléfono en esta caja fuerte (o guárdalo en esta bolsa sellada con un sticker). Al salir con el sticker intacto, te daremos un código QR privado para desbloquear el contenido exclusivo que el artista preparó y una cerveza gratis"*.  
3. **¿Qué mides?** ¿Cuánta gente aceptó el trato? ¿Cuánta gente rompió el sticker? ¿Cuántos descargaron el video después?  
   Si a la gente no le importa la recompensa en este experimento manual, tampoco descargarán una app para hacerlo.

## **4\. Estrategia Comercial: Cómo conseguir al primer cliente**

Tu socio operativo tiene que enfocarse en los nichos donde el teléfono duele más. No vayas a grandes promotoras musicales; tienen demasiada burocracia.

* **El Nicho Ideal:** El Stand-up Comedy local. Los comediantes odian los teléfonos porque un chiste grabado y subido a TikTok arruina su rutina para el resto de la gira. Tienen un dolor masivo y control total sobre sus shows.  
* **La Oferta Irresistible (Piloto a Costo Cero):** Acércate al mánager o al artista y dile: *"Queremos activar BeHere en tu próximo show sin coste. Tú subes el contenido exclusivo que quieras ofrecer — show completo, un fragmento, detrás de escena, merch digital, lo que decidas. Le pedimos a tu público que use la app piloto. Tú te quedas con el 70% de las ventas a quienes no fueron, nosotros el 30%, y recuperas un público atento"*.

Al eliminar el riesgo económico para el artista, consigues tu primer entorno de pruebas real, validas la tecnología y obtienes un caso de éxito para venderlo a salas más grandes.

## **5\. Validación Extra: Estrategia de Doble Landing Page (Smoke Test)**

Para complementar el experimento físico y medir el interés a escala digital, crear dos Landing Pages distintas es una jugada maestra. Sí, sirve muchísimo como apoyo porque te da "data dura" (métricas de conversión) para convencer tanto a inversionistas como a futuros clientes, todo antes de escribir una sola línea de código backend.

### **Landing Page 1: Enfocada al Cliente Negocio (B2B \- Artistas/Mánagers/Salas)**

* **Mensaje Principal:** "Recupera el control de tu show, elimina los spoilers y monetiza el contenido exclusivo que tú subes".  
* **Propuesta Visual:** Un diseño sobrio, mostrando el dashboard de cuántos ingresos extra generarían vendiendo su contenido en la plataforma.  
* **Call to Action (Llamado a la acción):** "Agenda una demo gratuita" o "Solicita acceso anticipado para tu próxima gira".  
* **Objetivo de Validación:** Medir cuántos mánagers o artistas dejan su email o piden una reunión. Si consigues 10 reuniones de 100 visitas, tienes un dolor de mercado confirmadísimo.

### **Landing Page 2: Enfocada al Usuario Fan (B2C)**

* **Mensaje Principal:** "Vive el concierto sin distracciones. Guarda tu celular y desbloquea el contenido exclusivo que el artista reservó para ti".  
* **Propuesta Visual:** Muy emocional, imágenes de conciertos épicos, mostrando una simulación de la app (pantalla negra con un contador o gráfica chula).  
* **Call to Action (Llamado a la acción):** "Descargar en App Store/Google Play" (botones falsos que, al hacer clic, abren un popup que dice: *¡Estamos en fase beta cerrada\! Déjanos tu email y te avisaremos cuando estemos listos*).  
* **Objetivo de Validación:** Medir el porcentaje de clics en el botón de descarga. Si mandas tráfico (con unos 20-50 euros de ads en Instagram a fans de música en vivo) y tienes un 10-15% de conversión a emails, el usuario sí quiere tu recompensa.