# Tareas de inicio — Deni

> **Referencia:** [validation-to-first-revenue-plan.md](./validation-to-first-revenue-plan.md)  
> **Alcance:** Fase 0 (arranque) + Fase 1 (captación y validación B2B)  
> **Tu trabajo:** captar, entrevistar, calificar, conseguir compromiso de piloto y cerrar. No landings, no código, no informes cuantitativos.  
> **Duración orientativa:** 2–4 h en Fase 0; luego 1–2 h/día durante 2 semanas

---

## Cómo usar este documento

1. Lee primero **“Por dónde empezar hoy”**.
2. Trabaja en **paquetes** (bloques de 45–90 min), no en tareas sueltas.
3. Usa ChatGPT como asistente, no como decisor.
4. Todo mensaje se revisa y se envía manualmente.
5. Si la IA inventa un dato, se descarta aunque suene bien.

**Regla de oro:** mejor un mensaje genérico honesto que uno personalizado con un dato falso.

---

## Por dónde empezar hoy

### Si Gian aún no terminó Gate 0

Haz solo esto (2–3 h):

1. Define tu ICP operativo (15 min).
2. Abre el CRM que Gian te comparta.
3. Investiga y carga **20 prospectos** con fuente verificable.
4. Prepara borradores de mensaje, pero **no envíes** hasta confirmar que los formularios guardan leads.

### Si Gian ya cerró Gate 0

Haz esto en orden (día 1):

1. Revisa el Project de ChatGPT y los prompts v1.
2. Valida 3 filas del CRM con fuentes reales.
3. Envía **8–10 contactos** personalizados.
4. Agenda primeras entrevistas.
5. Registra tiempo, cambios al borrador IA y respuestas.

**No contactes voluntarios de Uruguay todavía.** Primero necesitas entrevistas y, idealmente, un show candidato.

---

## Tu ICP operativo (perfil ideal de prospecto)

Prioriza prospectos que cumplan **4 de 6**:

| Criterio | Por qué importa |
|----------|-----------------|
| Stand-up u open mic en Uruguay | Nicho con dolor de spoilers y decisión rápida |
| Sala de 30–200 personas | Tamaño manejable para piloto |
| Show en <30 días | Sin fecha no hay validación |
| Contacto directo (no solo formulario) | Ciclo corto |
| Dolor plausible con móviles/grabaciones | Hipótesis central |
| Puede ofrecer recompensa de bajo coste | No exijas que ya grabe contenido |

**Lista inicial objetivo (40 prospectos en Fase 1):**
- 20 comediantes
- 10 productores / organizadores de open mic
- 10 salas pequeñas

---

## Ritmo y paquetización de tareas

### Semana 1 — Descubrimiento

| Día | Paquete | Meta |
|-----|---------|------|
| D1 | ICP + 20 prospectos en CRM | Lista usable con fuentes |
| D2 | 8–10 mensajes enviados | Primeras respuestas |
| D3 | 2–3 entrevistas | Primeras fichas validadas |
| D4 | 8–10 mensajes + seguimientos | 3–5 entrevistas acumuladas |
| D5 | Síntesis semanal con Gian | Patrones y ajustes |

### Semana 2 — Compromiso

| Día | Paquete | Meta |
|-----|---------|------|
| D6–D7 | 8–10 contactos/día + entrevistas | 10+ entrevistas acumuladas |
| D8–D9 | Identificar 3 shows candidatos | Fecha + decisor |
| D10 | Proponer piloto gratuito al mejor candidato | 2 compromisos reales o aprendizaje claro |

**Ritmo mínimo diario (días hábiles):**
- 8–10 contactos personalizados
- 3 seguimientos a prospectos previos
- Actualizar CRM antes de cerrar el día
- Máximo 5 min de revisión IA por prospecto

---

## Sistema de señales (signal tiers)

Usa esto para decidir cuánto personalizar. Inspirado en buenas prácticas de outbound con IA: señales recientes y verificables valen más que datos genéricos.

| Tier | Señal | Ejemplo | Acción |
|------|-------|---------|--------|
| **1** | Actividad reciente del prospecto | Post, show anunciado, entrevista en prensa | Personalización alta |
| **2** | Hecho verificable del negocio | Cartelera, sala, gira, podcast reciente | Personalización media |
| **3** | Dato estable pero genérico | Ciudad, tipo de venue, rol | Personalización baja |
| **4** | Poca o ninguna señal | Solo nombre y ciudad | Plantilla honesta, sin inventar |

**Regla:** si `signal_tier = 4` o la fuente tiene >30 días, no afirmes nada específico sobre su actividad reciente.

---

## Flujo AI-native paso a paso

```text
Prospecto → Investigación IA → Verificación humana → Mensaje IA → Edición → Envío
    → Entrevista → Ficha IA → Validación → CRM → Seguimiento IA → Cierre
```

**Tú eres responsable de:** verificar, enviar, entrevistar, decidir, cerrar.  
**La IA hace:** borradores, extracción, síntesis, comparación.

---

## Prompts optimizados

### Principios (basados en buenas prácticas actuales)

- Dale **rol, contexto, formato de salida y restricciones** (OpenAI Prompt Engineering).
- En Deep Research, escribe un **brief**, no una pregunta vaga: objetivo, alcance, exclusiones, fuentes, formato, citas.
- **Revisa el plan** que propone Deep Research antes de ejecutarlo.
- En outreach: límites de palabras, frases prohibidas, una sola pregunta de cierre.
- **Prompt chaining:** investigar en un chat, redactar en otro con el resumen verificado.
- Nunca envíes la primera respuesta sin leerla.

---

### Prompt A — Investigación rápida de 1 prospecto (ChatGPT normal)

Usa para cada fila del CRM. No gastes Deep Research aquí.

```text
Actúa como analista de prospección B2B para BeHere.

Contexto:
- BeHere valida si artistas/salas de stand-up quieren reducir el uso de móviles en sala mediante un reto voluntario con recompensa.
- No vendemos todavía una app instalada. Ofrecemos piloto gratuito asistido por web.
- Mercado inicial: Uruguay, salas 30-200 personas.

Input:
- Nombre: [NOMBRE]
- Rol: [artista / productor / sala]
- Ciudad: [CIUDAD]
- Enlaces públicos: [URL1, URL2, URL3]

Tarea:
1. Resume solo hechos verificables en los enlaces (máx. 120 palabras).
2. Clasifica signal_tier (1-4) y explica por qué.
3. Propón una hipótesis de dolor sobre móviles/grabaciones/spoilers. Márcala como HIPÓTESIS.
4. Indica quién probablemente decide (artista, productor, sala).
5. Sugiere el mejor canal de contacto.
6. Propón 2 ángulos de mensaje distintos (máx. 25 palabras cada uno).

Restricciones:
- Si un dato no aparece en los enlaces, escribe "no encontrado".
- No inventes shows, premios, opiniones ni citas.
- No uses tono comercial agresivo.

Formato de salida:
## Hechos verificables
## Signal tier
## Hipótesis de dolor
## Decisor probable
## Canal recomendado
## Ángulo A / Ángulo B
## Fuentes consultadas (URL)
```

**Tu revisión (2 min):** abre cada URL citada. Si un hecho no está, bórralo antes de pasar al Prompt B.

---

### Prompt B — Mensaje inicial personalizado

```text
Actúa como redactor de outreach B2B para validación de problema (no venta agresiva).

Contexto verificado (usar solo esto, nada más):
[PEGAR HECHOS VERIFICADOS DEL PROMPT A]

Objetivo:
Conseguir una entrevista de 15 minutos para entender cómo afectan los móviles/grabaciones en sus shows.

Restricciones de estilo:
- Español rioplatense neutro, tono directo y humano.
- Máximo 90 palabras.
- No empieces con "Espero que estés bien".
- No uses: "me encanta tu trabajo", "admiro", "innovador", "revolucionario".
- No afirmes que viste algo que no está en el contexto verificado.
- No menciones BeHere como app instalada.
- Cierra con una pregunta de baja fricción para agendar 15 min.

Entregables:
1. Versión para LinkedIn/Instagram DM (máx. 70 palabras)
2. Versión para email (máx. 90 palabras)
3. Línea de asunto (solo email)
4. Lista de afirmaciones del mensaje que requieren verificación manual (bullet list)

Si signal_tier = 4, usa plantilla honesta sin personalización específica.
```

**Plantilla fallback (si no hay señales):**

```text
Hola [nombre]. Estoy investigando cómo afectan los móviles y las grabaciones en shows pequeños de stand-up en [ciudad]. No te quiero vender nada todavía: busco entender qué pasa realmente en sala. ¿Te puedo hacer 6 preguntas en 15 minutos?
```

---

### Prompt C — Deep Research: mapa del ecosistema (1 vez)

Úsalo **una sola vez** al inicio para construir mejor la lista. No por cada prospecto.

**Antes de ejecutar:** edita el plan que ChatGPT te proponga. Añade exclusiones y fuentes preferidas.

```text
Deep Research brief — BeHere Uruguay

Research goal:
Mapear el ecosistema de stand-up y open mics en Uruguay para identificar los mejores puntos de entrada a un piloto de validación (artistas, productores, salas pequeñas).

Audience:
Fundador operativo que hará outreach manual.

Decision this supports:
¿En qué ciudades, venues y perfiles conviene concentrar los primeros 40 contactos?

Scope:
- Include: stand-up, open mic, comedy clubs, salas 30-200 personas, Montevideo y ciudades con escena activa si hay evidencia.
- Exclude: festivales masivos, arenas, ticketing enterprise, datos globales sin aplicación local.
- Time window: información actualizada preferentemente últimos 24 meses.

Sources:
- Priorizar: sitios oficiales de salas, carteleras, Instagram/Linktree de comediantes, notas de prensa local, entrevistas.
- Evitar: blogs sin autor, foros, datos sin fecha.

Output format:
1. Executive summary (150 palabras)
2. Tabla: ciudad | venue/evento | tipo | contacto público | señal de actividad | prioridad 1-3
3. Top 15 cuentas/perfiles para contactar primero
4. Top 5 riesgos de contactar mal (ej. sin show, sin decisor)
5. Recomendación de enfoque inicial
6. Sección "evidencia débil o no encontrada"

Citation requirements:
- Mínimo 12 fuentes con URL.
- Marca cada hallazgo como: estable / probable / incierto.
- Si dos fuentes contradicen, muestra ambas.
```

**Después del informe:**
1. Verifica 5 citas al azar (abre URL y busca el dato).
2. Extrae solo filas con prioridad 1–2 al CRM.
3. No copies todo el informe a mensajes de outreach.

---

### Prompt D — Preparación de entrevista (5 min antes)

```text
Actúa como coach de discovery para entrevistas de validación.

Contexto verificado del prospecto:
[PEGAR FICHA CRM + HECHOS VERIFICADOS]

Guion base (no modificar, solo priorizar):
1. Último show
2. Móviles/grabaciones
3. Último incidente concreto
4. Impacto
5. Qué han probado
6. Fricción/coste de solución actual
7. Quién decide
8. Qué haría que valga la pena repetir
9. ¿Graban material?
10. Si no graban, ¿qué recompensa de bajo coste podrían ofrecer?
11. ¿Cuál cree que valoraría más su público?
12. Derechos/aprobaciones
13. ¿Show en próximos 30 días?

Tarea:
- Sugiere las 5 preguntas más importantes para ESTE prospecto y por qué.
- Sugiere 3 preguntas de profundización si confirma dolor.
- Sugiere 3 señales de alerta de "falso positivo".
- Propón una frase de apertura de 20 segundos.

Restricciones:
- No propongas vender BeHere en los primeros 10 minutos.
- No inventes contexto.
```

---

### Prompt E — Ficha post-entrevista (después de la llamada)

Pega notas brutas o transcripción (con consentimiento). Luego valida campo por campo.

```text
Actúa como analista de discovery. Convierte notas de entrevista en ficha estructurada.

Notas/transcripción:
[PEGAR NOTAS]

Tarea:
Extrae SOLO lo que esté explícito en las notas.

Devuelve JSON con estas claves:
{
  "pain_quote": "",
  "pain_frequency": "alta|media|baja|no_encontrado",
  "recent_incident": "",
  "impact": "",
  "current_solution": "",
  "decision_maker": "",
  "possible_payer": "",
  "reward_options_discussed": [],
  "best_reward_candidate": "",
  "rights_owner": "",
  "next_show_date": "",
  "commitments_offered": [],
  "objections": [],
  "commitment_level": 0,
  "confidence": "alta|media|baja",
  "missing_data": [],
  "recommended_next_action": "",
  "recommended_next_action_date": ""
}

Reglas:
- commitment_level: 0 ninguno, 1 interés, 2 acción concreta (ej. pasa contacto), 3 fecha/show comprometido.
- Si un campo no está en las notas, usa "no_encontrado".
- Incluye al menos 1 cita textual corta para pain_quote si existe.
- No inferir entusiasmo no dicho.
```

**Validación humana obligatoria:** si `pain_quote` no existe en tus notas, no marques dolor como confirmado.

---

### Prompt F — Seguimiento post-entrevista (<24 h)

```text
Redacta seguimiento post-entrevista usando SOLO esta información:
[PEGAR FICHA VALIDADA]

Objetivo:
- Agradecer
- Resumir 1 dolor escuchado (con sus palabras)
- Proponer siguiente paso concreto (segunda llamada, fecha de show, o invitación a piloto)
- Mantener tono humano y breve

Restricciones:
- Máximo 120 palabras
- No prometer funcionalidades no discutidas
- No mencionar precio salvo que ya se habló
- No inventar acuerdos
- Incluir un solo CTA

Entrega:
1. Versión email
2. Versión WhatsApp/DM
3. Checklist de 3 puntos que debo verificar antes de enviar
```

---

### Prompt G — Síntesis semanal (viernes, 30 min con Gian)

```text
Actúa como analista de validación. Resume la semana de outreach.

Input:
- Export CRM de la semana
- Notas de entrevistas (anonimizadas si hace falta)

Métricas a calcular:
- Prospectos nuevos
- Contactos enviados
- Respuestas
- Entrevistas realizadas
- Entrevistas con dolor 4-5
- Compromisos nivel >=2
- Tiempo promedio por prospecto
- % borradores IA enviados con cambios menores
- Afirmaciones sin fuente detectadas

Entregables:
1. Qué parece estar funcionando (con evidencia)
2. Qué no funciona (con evidencia)
3. Objeciones repetidas (top 5)
4. Tipo de recompensa más mencionado
5. Recomendación de UN solo experimento para la semana siguiente
6. Sección "conclusiones NO válidas todavía"

Restricciones:
- No declarar PMF ni validación sin pagos ni piloto ejecutado.
- Señala contradicciones entre entrevistas.
```

---

## Guion de entrevista (base fija)

No vendas BeHere los primeros 10 minutos. Escucha.

1. Cuéntame cómo fue tu último show.
2. ¿Qué pasó con los móviles o grabaciones?
3. ¿Cuándo fue la última vez que eso te generó un problema concreto?
4. ¿Qué impacto tuvo en material, ambiente, equipo o ingresos?
5. ¿Qué has probado para evitarlo?
6. ¿Qué fricción o coste tiene esa solución?
7. ¿Quién decide si se hace algo en el show?
8. ¿Qué tendría que pasar para que valga la pena repetirlo?
9. ¿Suelen grabar el show o producir material después?
10. Si no graban, ¿qué podrían ofrecer como recompensa de bajo coste?
11. ¿Cuál crees que valoraría más tu público?
12. ¿Quién debe aprobar esa recompensa?
13. ¿Tienes un show en los próximos 30 días?

**Pregunta puente al piloto (solo si hubo dolor real):**

> “Si te parece, podemos probar gratis un piloto asistido por web en un show próximo: reto voluntario de presencia + una recompensa que tú elijas. Sin bolsas, sin retener teléfonos. ¿Te interesa explorarlo?”

---

## Cómo tratar la recompensa (sin asumir grabación)

No descartes a quien no graba. Clasifica:

| Tipo | Ejemplos | Cuándo usar |
|------|----------|-------------|
| Contenido ligero | Clip corto, audio de agradecimiento, foto/setlist | Si ya producen algo |
| Acceso / privilegio | Preventa, meet & greet breve, voto de tema | Muy común en escena chica |
| Beneficio sala | Descuento siguiente show, consumición | Si el venue aporta |

**Pregunta clave en entrevista:** “¿Qué recompensa podrías ofrecer sin grabar nada nuevo?”

**No prometas que BeHere grabará por ellos.** Si surge la idea, deja claro que es excepcional y no escalable.

---

## CRM: qué actualizar cada día

Al cerrar el día, cada prospecto activo debe tener:

- `stage` correcto
- `next_action` con verbo concreto
- `next_action_date`
- `source_url`
- `signal_tier`
- `sent_message` si ya contactaste
- `commitment_level` si hubo entrevista

**Definición de compromiso:**
- **0:** sin interés
- **1:** “suena interesante”
- **2:** acción concreta (pasa contacto, comparte fecha, acepta segunda llamada)
- **3:** show/fecha + decisor + permiso para explorar piloto

Un “me gusta” sin fecha no es compromiso.

---

## Métricas que debes mirar tú

| Métrica | Meta inicial |
|---------|--------------|
| Contactos personalizados / día | 8–10 |
| Respuestas / 100 contactos | Baseline semana 1 |
| Entrevistas / semana | 3–5 |
| Minutos por prospecto | ≤5 |
| Seguimientos <24 h | 100% |
| Afirmaciones sin fuente enviadas | 0 |
| Entrevistas con dolor 4–5 | ≥5 antes de proponer piloto |
| Compromisos nivel ≥2 | ≥2 antes de Fase 2 |

---

## Gates: cuándo avanzar

### Gate 0 (con Gian)
No envíes outreach masivo hasta que Gian confirme leads + analítica + CRM.

### Gate 1 (tu responsabilidad)
Avanza cuando:
- [ ] 15 entrevistas completas en el mismo nicho, o
- [ ] 10 entrevistas + 6 con dolor claro + 1 show candidato con fecha

Si tras 15 entrevistas <4 personas describen incidentes recientes → parar y revisar segmento con Gian.

### Señales para proponer piloto
- Dolor reciente y frecuente
- Decisor identificado
- Show en <30 días
- Recompensa viable (aunque no sea video)
- Disposición a mención breve desde escenario

---

## Errores comunes (evítalos)

1. Enviar el primer borrador de IA sin editar.
2. Personalizar con datos no verificados.
3. Hablar de “app” o “detección automática”.
4. Pedir a voluntarios UY que prospecten o coordinen.
5. Aceptar “me interesa” sin fecha ni decisor.
6. Cambiar guion y oferta cada dos entrevistas.
7. Gastar Deep Research en cada prospecto individual.
8. Concluir validación sin piloto ni pago.

---

## Checklist diario (10 min al cierre)

- [ ] CRM actualizado
- [ ] Seguimientos pendientes enviados o programados
- [ ] Borradores IA revisados y versiones finales guardadas
- [ ] Afirmaciones sin fuente = 0
- [ ] Próxima acción de cada prospecto caliente definida
- [ ] Una cosa que aprendiste hoy anotada para el weekly con Gian

---

## Qué NO es tu trabajo

- Editar landings o CTAs
- Configurar formularios o analítica
- Crear MVP web
- Redactar informe cuantitativo del piloto
- Coordinar voluntarios antes de tener show comprometido
- Decidir cambios de producto sin Gian

Si detectas objeción repetida útil para copy, envíasela a Gian como evidencia, no la implementas tú.

---

## Referencias útiles

- Plan maestro: [validation-to-first-revenue-plan.md](./validation-to-first-revenue-plan.md)
- Lean Canvas: [lean-canvas.md](./lean-canvas.md)
- Copy B2B de referencia: [landing-b2b-artistas-salas.md](./landing-b2b-artistas-salas.md)

**Fuentes de buenas prácticas de prompts:**
- [OpenAI — Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- [OpenAI — Projects in ChatGPT](https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt)
- [Master Prompting — Deep Research guide](https://masterprompting.net/blog/chatgpt-deep-research-guide)
