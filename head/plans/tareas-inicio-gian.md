# Tareas de inicio — Gian

> **Referencia:** [validation-to-first-revenue-plan.md](./validation-to-first-revenue-plan.md)  
> **Alcance:** Fase 0 completa + soporte mínimo de Fase 1  
> **Objetivo:** dejar medición, landings y sistema AI-native listos para que Deni empiece captación sin perder datos  
> **Duración orientativa:** 2–3 días calendario (10–16 h)

---

## Orden de ejecución

No avanzar a la siguiente tarea hasta cumplir los criterios de aceptación de la anterior, salvo bloqueo externo documentado.

| # | Tarea | Depende de | Estimación |
|---|-------|------------|------------|
| 1 | Persistencia de leads B2B y B2C | — | 2–3 h |
| 2 | Analítica y eventos del embudo | 1 | 1–2 h |
| 3 | Privacidad, consentimiento y errores visibles | 1 | 1 h |
| 4 | Limpieza de verdad comercial en landings | — | 1–2 h |
| 5 | CRM exportable + estructura de etapas | — | 1 h |
| 6 | Project de ChatGPT + prompts base | 5 | 2–3 h |
| 7 | QR/UTM y pruebas móviles end-to-end | 1, 2, 4 | 1–2 h |
| 8 | Handoff a Deni + soporte Fase 1 | 1–7 | 1 h |

---

## Tarea 1 — Persistencia de leads

**Objetivo:** que ningún envío de formulario se pierda al cerrar el navegador.

**Acciones:**
- Conectar `PilotForm` (B2B) y `BetaModal` (B2C) a almacenamiento real.
- Validar en servidor; no confiar solo en el cliente.
- Añadir protección básica anti-spam.
- Mostrar éxito y error de forma visible al usuario.

**Criterios de aceptación:**
- [ ] Un envío B2B de prueba queda guardado y es recuperable.
- [ ] Un envío B2C de prueba queda guardado y es recuperable.
- [ ] Campos mínimos persistidos: email, nombre (B2B), ciudad, tipo de acto/show, timestamp, landing, UTM si existe.
- [ ] Submit inválido muestra error sin perder datos ya escritos.
- [ ] No hay secretos ni credenciales en el repositorio.

---

## Tarea 2 — Analítica y eventos

**Objetivo:** medir embudo antes de enviar tráfico o QR.

**Eventos mínimos:**
- `page_view`
- `primary_cta_click`
- `lead_submit_success`
- `lead_submit_error`
- `interview_booked` (manual o vía enlace de agenda)

**Acciones:**
- Instrumentar CTAs con `data-cta` existentes o equivalente.
- Conservar fuente: landing, UTM, país/ciudad declarada, fecha.

**Criterios de aceptación:**
- [ ] Cada evento aparece una sola vez por acción real.
- [ ] Se distingue tráfico B2B (`/`) de B2C (`/app`).
- [ ] Exportación o vista simple permite revisar embudo sin entrar a consola del navegador.
- [ ] Documentado qué mide cada CTA B2B y B2C (intención distinta; no mezclar).

---

## Tarea 3 — Privacidad y consentimiento

**Objetivo:** cumplir mínimo legal/operativo para captar emails.

**Acciones:**
- Añadir consentimiento explícito antes de guardar email.
- Enlazar aviso de privacidad mínimo.
- Definir retención y quién responde en <24 h.

**Criterios de aceptación:**
- [ ] No se guarda email sin consentimiento.
- [ ] Existe URL o página de privacidad accesible desde el formulario.
- [ ] Deni aparece como responsable de respuesta comercial documentado.

---

## Tarea 4 — Verdad comercial en landings

**Objetivo:** que las landings no prometan lo que aún no existe.

**Acciones:**
- Eliminar u ocultar testimonios placeholder.
- Corregir imágenes rotas o quitar referencias.
- Alinear copy con piloto web asistido, no app instalada ni detección automática.
- Definir CTA B2B único: conversación de 15–20 min para piloto.
- Decidir y documentar hipótesis del CTA B2C.
- Añadir ciudad al formulario B2C si se comparará demanda geográfica.

**Criterios de aceptación:**
- [ ] `/` y `/app` cargan sin imágenes rotas ni testimonios ficticios.
- [ ] No se afirma plataforma completa, pilotos en marcha ni detección fiable.
- [ ] CTA B2B y B2C documentados con métrica esperada cada uno.
- [ ] Cambios de copy revisados contra `lean-canvas.md` y plan v2.0.

---

## Tarea 5 — CRM exportable

**Objetivo:** que Deni trabaje en un sistema simple, portable y auditable.

**Columnas mínimas sugeridas:**

| Campo | Tipo |
|-------|------|
| `id` | autoincremental |
| `name` | texto |
| `role` | artista / productor / sala |
| `city` | texto |
| `channel` | linkedin / email / instagram / referido |
| `source_url` | URL verificable |
| `signal_tier` | 1–4 |
| `pain_hypothesis` | texto (marcado como hipótesis) |
| `stage` | ver etapas abajo |
| `next_action` | texto |
| `next_action_date` | fecha |
| `last_contact_at` | fecha |
| `owner` | Deni |
| `notes` | texto libre |
| `ai_draft` | último borrador IA |
| `sent_message` | mensaje enviado real |
| `response` | sí/no + resumen |
| `interview_date` | fecha |
| `commitment_level` | 0–3 |
| `lost_reason` | texto |

**Etapas:** Identificado → Contactado → Respondió → Entrevistado → Calificado → Piloto propuesto → Piloto comprometido → Pagado → Perdido.

**Criterios de aceptación:**
- [ ] CRM creado y compartido con Deni.
- [ ] Exportable a CSV sin pérdida de columnas.
- [ ] Cada fila puede tener fuente y siguiente acción.
- [ ] Instrucciones de uso de 1 página para Deni.

---

## Tarea 6 — Project de ChatGPT y prompts base

**Objetivo:** que Deni pueda operar el flujo AI-native desde el día 1.

**Archivos a cargar en el Project:**
- `validation-to-first-revenue-plan.md`
- `lean-canvas.md`
- Guion de entrevista (del plan)
- Plantilla de ficha post-entrevista
- Reglas de guardrails (no inventar, marcar hipótesis, citar fuente)

**Prompts a preparar (v1):**
1. Investigación de prospecto (rápida, no Deep Research)
2. Mensaje inicial personalizado
3. Preparación de entrevista
4. Ficha estructurada post-entrevista
5. Seguimiento post-entrevista
6. Síntesis semanal

**Criterios de aceptación:**
- [ ] Project creado con instrucciones permanentes.
- [ ] Prompts versionados en repo o doc compartido (`prompts/` o sección en doc Deni).
- [ ] Probados con 3 prospectos públicos ficticios o reales.
- [ ] Cero afirmaciones inventadas en los 3 casos de prueba.
- [ ] Deni tiene acceso y sabe cuál prompt usar en cada paso.

---

## Tarea 7 — QR, UTM y prueba end-to-end

**Objetivo:** validar el sistema completo antes de outreach.

**Acciones:**
- Generar 2 QR: B2B outreach, B2C piloto.
- URLs con UTM predefinidos.
- Probar flujo en iPhone y Android: escaneo → landing → formulario → lead guardado → evento registrado.

**Criterios de aceptación:**
- [ ] Gate 0 del plan cumplido en su totalidad.
- [ ] Checklist de handoff completado y compartido con Deni.
- [ ] Tiempo de respuesta comercial <24 h acordado.

---

## Tarea 8 — Soporte Fase 1 (mientras Deni captura)

**Objetivo:** no bloquear captación; iterar IA y datos.

**Acciones:**
- Revisar 1 vez por semana calidad de borradores IA de Deni.
- Corregir prompts si aparecen errores repetidos.
- Incorporar objeciones reales a copy de landing solo con evidencia de Deni.
- Mantener exportaciones de leads y CRM sincronizadas.

**Criterios de aceptación:**
- [ ] Deni no espera más de 24 h por dudas de CRM, prompts o landings.
- [ ] Cada corrección de prompt queda versionada.
- [ ] No se inicia MVP de evento hasta piloto comprometido (Fase 2).

---

## Gate 0 — checklist final

Marcar todo antes de decir “listo para captar”:

- [ ] Lead B2B de prueba guardado
- [ ] Lead B2C de prueba guardado
- [ ] Eventos sin duplicados
- [ ] Landings honestas y sin roturas
- [ ] CRM exportable operativo
- [ ] Project + prompts entregados a Deni
- [ ] 3 pruebas IA sin alucinaciones
- [ ] Responsable de respuesta <24 h definido

---

## Fuera de alcance ahora (no empezar)

- MVP web de evento
- App nativa iOS/Android
- PWA offline
- Panel de artista
- Pagos integrados
- Geofencing o detección antifraude
- Ads pagados

---

## Referencias técnicas

- Landings: `web/src/pages/index.astro`, `web/src/pages/app/index.astro`
- Formularios: `web/src/components/forms/PilotForm.astro`, `BetaModal.astro`
- Contenido: `web/src/content/b2b.ts`, `b2c.ts`
- Deploy: `netlify.toml`
