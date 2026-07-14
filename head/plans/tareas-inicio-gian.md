# Tareas de inicio — Gian

> **Referencia:** [validation-to-first-revenue-plan.md](./validation-to-first-revenue-plan.md)  
> **Alcance:** Fase 0 completa + soporte mínimo de Fase 1  
> **Objetivo:** dejar medición, landings y sistema AI-native listos para que Deni empiece captación sin perder datos  
> **Duración orientativa:** 2–3 días calendario (10–16 h)

---

## Orden de ejecución

No avanzar a la siguiente tarea hasta cumplir los criterios de aceptación de la anterior, salvo bloqueo externo documentado.

| # | Tarea | Depende de | Estimación | Estado |
|---|-------|------------|------------|--------|
| 1 | Persistencia de leads B2B y B2C | — | 2–3 h | Completada 2026-07-14 |
| 2 | Analítica y eventos del embudo | 1 | 1–2 h | Completada 2026-07-15 |
| 3 | Privacidad, consentimiento y errores visibles | 1 | 1 h | Completada 2026-07-14 |
| 4 | Limpieza de verdad comercial en landings | — | 1–2 h | Completada 2026-07-14 |
| 5 | CRM exportable + estructura de etapas | — | 1 h | Completada 2026-07-14 |
| 6 | Asistente IA (Gemini Gem) + prompts base | 5 | 2–3 h | Completada 2026-07-15 |
| 7 | QR/UTM y pruebas móviles end-to-end | 1, 2, 4, 10 | 1–2 h | En curso — QR generados; falta prueba móvil |
| 8 | Handoff a Deni + soporte Fase 1 | 1–7 | 1 h | Pendiente |
| 9 | Comprar dominio | — | 30 min | Completada 2026-07-14 |
| 10 | Configurar DNS (trybehere.com → Netlify) | 9 | 30–60 min | Completada 2026-07-14 |

---

## Tarea 1 — Persistencia de leads

**Completada:** 2026-07-14  
**Implementación:** Web3Forms (`submitLead.ts`), `PilotForm` B2B y `BetaModal` B2C.

**Objetivo:** que ningún envío de formulario se pierda al cerrar el navegador.

**Acciones:**
- Conectar `PilotForm` (B2B) y `BetaModal` (B2C) a almacenamiento real.
- Validar en servidor; no confiar solo en el cliente.
- Añadir protección básica anti-spam.
- Mostrar éxito y error de forma visible al usuario.

**Criterios de aceptación:**
- [x] Un envío B2B de prueba queda guardado y es recuperable.
- [x] Un envío B2C de prueba queda guardado y es recuperable.
- [x] Campos mínimos persistidos: email, nombre (B2B), ciudad, tipo de acto/show, timestamp, landing, UTM si existe.
- [x] Submit inválido muestra error sin perder datos ya escritos.
- [x] No hay secretos ni credenciales en el repositorio.

---

## Tarea 2 — Analítica y eventos

**Completada:** 2026-07-15  
**Herramienta:** Umami Cloud (plan Hobby). Website ID: `18ee3c65-c408-45b3-8203-190d545762ee`  
**Implementación:** `web/src/lib/analytics.ts`, `BaseLayout.astro`, formularios.  
**Documentación:** `head/ops/analytics-events.md`.

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
- [x] Cada evento aparece una sola vez por acción real.
- [x] Se distingue tráfico B2B (`/`) de B2C (`/app`).
- [x] Exportación o vista simple permite revisar embudo sin entrar a consola del navegador.
- [x] Documentado qué mide cada CTA B2B y B2C (intención distinta; no mezclar).

---

## Tarea 3 — Privacidad y consentimiento

**Completada:** 2026-07-14  
**Implementación:** checkbox consentimiento, `/privacidad`, footer, `head/ops/privacidad-operativa.md`.

**Objetivo:** cumplir mínimo legal/operativo para captar emails.

**Acciones:**
- Añadir consentimiento explícito antes de guardar email.
- Enlazar aviso de privacidad mínimo.
- Definir retención y quién responde en <24 h.

**Criterios de aceptación:**
- [x] No se guarda email sin consentimiento.
- [x] Existe URL o página de privacidad accesible desde el formulario.
- [x] Deni aparece como responsable de respuesta comercial documentado.

---

## Tarea 4 — Verdad comercial en landings

**Completada:** 2026-07-14  
**Implementación:** copy B2B/B2C, `EarlyAccessSection`, ciudad en B2C, `head/plans/cta-hypotheses.md`, imágenes restauradas.

**Objetivo:** que las landings no prometan lo que aún no existe.

**Acciones:**
- Eliminar u ocultar testimonios placeholder.
- Corregir imágenes rotas o quitar referencias.
- Alinear copy con piloto web asistido, no app instalada ni detección automática.
- Definir CTA B2B único: conversación de 15–20 min para piloto.
- Decidir y documentar hipótesis del CTA B2C.
- Añadir ciudad al formulario B2C si se comparará demanda geográfica.

**Criterios de aceptación:**
- [x] `/` y `/app` cargan sin imágenes rotas ni testimonios ficticios.
- [x] No se afirma plataforma completa, pilotos en marcha ni detección fiable.
- [x] CTA B2B y B2C documentados con métrica esperada cada uno.
- [x] Cambios de copy revisados contra `lean-canvas.md` y plan v2.0.

---

## Tarea 5 — CRM exportable

**Completada:** 2026-07-14  
**Implementación:** Google Sheets — [BeHere CRM B2B](https://docs.google.com/spreadsheets/d/1EMn4J-KOSb-L48-y15rUnicn3DlDeyuxlREZuSneOE4/edit?usp=sharing)

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
- [x] CRM creado y compartido con Deni.
- [x] Exportable a CSV sin pérdida de columnas.
- [x] Cada fila puede tener fuente y siguiente acción.
- [x] Instrucciones de uso de 1 página para Deni.

---

## Tarea 6 — Asistente IA (Gemini Gem) y prompts base

**Completada:** 2026-07-15  
**Gem:** [BeHere — Prospecting v1](https://gemini.google.com/gem/7d8896898d3f)  
**Implementación:** prompts en `head/prompts/`; setup en `head/ops/gemini-gem-setup.md`.

**Objetivo:** que Deni pueda operar el flujo AI-native desde el día 1.

**Criterios de aceptación:**
- [x] Gem creada con instrucciones permanentes.
- [x] Prompts versionados en repo (`head/prompts/`).
- [ ] Probados con 3 prospectos públicos ficticios o reales (`test-cases-v1.md`).
- [ ] Cero afirmaciones inventadas en los 3 casos de prueba.
- [ ] Deni tiene acceso y sabe cuál prompt usar en cada paso.

---

## Tarea 7 — QR, UTM y prueba end-to-end

**En curso:** 2026-07-15 — UTM unificado en `getSessionUtm()`; QR en `head/ops/qr/`. Pendiente: prueba móvil iPhone/Android.

**Objetivo:** validar el sistema completo antes de outreach.

**Implementación:**
- QR PNG/SVG: `head/ops/qr/b2b-outreach.*`, `b2c-pilot.*`
- Config: `head/ops/qr/campaigns.json`
- Regenerar: `cd web && npm run generate:qr`
- UTM en formularios: `getSessionUtm()` (misma sesión que Umami)

**Acciones:**
- [x] Generar 2 QR: B2B outreach, B2C piloto.
- [x] URLs con UTM predefinidos.
- [ ] Probar flujo en iPhone y Android: escaneo → landing → formulario → lead guardado → evento registrado.

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

## Tarea 9 — Comprar dominio

**Completada:** 2026-07-14  
**Dominio:** `trybehere.com`

**Objetivo:** tener dominio propio para landings, QR y outreach.

**Criterios de aceptación:**
- [x] Dominio registrado y activo en el registrador.
- [x] Acceso al panel DNS del registrador.
- [x] Dominio acordado con el equipo: `trybehere.com`.

---

## Tarea 10 — Configurar DNS

**Completada:** 2026-07-14  
**Dominio:** `trybehere.com` → Netlify

**Objetivo:** que las landings respondan en producción con HTTPS en el dominio propio.

**Acciones:**
- Añadir dominio custom en Netlify (Site settings → Domain management).
- Configurar registros DNS en el registrador (A/AAAA o CNAME según indique Netlify).
- Configurar `www.trybehere.com` (redirect a apex o CNAME).
- Verificar certificado SSL activo.
- Actualizar `site` en `web/astro.config.mjs` a `https://trybehere.com`.
- Configurar `PUBLIC_WEB3FORMS_ACCESS_KEY` en variables de entorno de Netlify.

**Criterios de aceptación:**
- [x] `https://trybehere.com` carga la landing B2B (`/`).
- [x] `https://trybehere.com/app` carga la landing B2C.
- [x] `https://www.trybehere.com` redirige correctamente al apex.
- [x] SSL válido sin avisos en navegador.
- [x] Canonical y OG URLs usan `trybehere.com`.

---

## Gate 0 — checklist final

Marcar todo antes de decir “listo para captar”:

- [x] Lead B2B de prueba guardado
- [x] Lead B2C de prueba guardado
- [x] Eventos sin duplicados
- [x] Landings honestas y sin roturas
- [x] CRM exportable operativo
- [ ] Gem compartida con Deni + smoke test (`test-cases-v1.md` caso 1)
- [ ] 3 pruebas IA sin alucinaciones
- [x] Responsable de respuesta <24 h definido
- [x] Dominio `trybehere.com` registrado
- [x] DNS apuntando a producción con HTTPS

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
- Persistencia: `web/src/lib/submitLead.ts`, Web3Forms (`PUBLIC_WEB3FORMS_ACCESS_KEY`)
- Analítica: `web/src/lib/analytics.ts`, Umami (`PUBLIC_UMAMI_WEBSITE_ID`), `head/ops/analytics-events.md` (completada 2026-07-15)
- Privacidad: `web/src/pages/privacidad.astro`, `head/ops/privacidad-operativa.md`
- CTAs: `head/plans/cta-hypotheses.md`
- Contenido: `web/src/content/b2b.ts`, `b2c.ts`
- Deploy: `netlify.toml`
- Dominio: `trybehere.com` (registrado y DNS en producción 2026-07-14)
- CRM B2B: [Google Sheets](https://docs.google.com/spreadsheets/d/1EMn4J-KOSb-L48-y15rUnicn3DlDeyuxlREZuSneOE4/edit?usp=sharing) (creado 2026-07-14)
- Prompts AI-native: `head/prompts/` · Gem: https://gemini.google.com/gem/7d8896898d3f · setup: `head/ops/gemini-gem-setup.md`
- QR campañas: `head/ops/qr/` · regenerar: `npm run generate:qr` (desde `web/`)
