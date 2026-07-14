# BeHere — Prompts v1

> **Versión:** 1.0  
> **Fecha:** 2026-07-15  
> **Mantenedor:** Gian  
> **Operador:** Deni  
> **Fuente de verdad:** este repositorio + CRM en Google Sheets

Prompts versionados para el flujo AI-native de captación B2B. La **Gemini Gem** lee copias de estos archivos; **el repo sigue siendo la fuente de verdad**.

**Gem activa:** https://gemini.google.com/gem/7d8896898d3f

---

## Cuándo usar cada prompt

| Paso | Archivo | Cuándo | Tiempo Deni |
|------|---------|--------|-------------|
| 0 (una vez) | [`deep-research-ecosystem.md`](./deep-research-ecosystem.md) | Al armar la primera lista de 40 prospectos | 30–45 min |
| 1 | [`01-prospect-research.md`](./01-prospect-research.md) | Por cada fila nueva del CRM | 2 min revisión |
| 2 | [`02-outreach-message.md`](./02-outreach-message.md) | Después de verificar hechos del paso 1 | 2–3 min edición |
| 3 | [`03-interview-prep.md`](./03-interview-prep.md) | 5 min antes de cada entrevista | 2 min |
| 4 | [`04-post-interview-ficha.md`](./04-post-interview-ficha.md) | Inmediatamente después de la llamada | 5–10 min validación |
| 5 | [`05-follow-up.md`](./05-follow-up.md) | Dentro de las 24 h post-entrevista | 2 min |
| 6 | [`06-weekly-synthesis.md`](./06-weekly-synthesis.md) | Viernes, con Gian | 30 min |

**Regla:** investigar en un chat, redactar en otro con el resumen **ya verificado**. No pegues el Prompt B sin haber validado el Prompt A.

---

## Archivos de contexto (cargar en la Gem)

| Archivo | Propósito |
|---------|-----------|
| [`project-instructions.md`](./project-instructions.md) | Instrucciones permanentes de la Gem |
| [`guardrails.md`](./guardrails.md) | Reglas de datos y calidad |
| [`interview-script.md`](./interview-script.md) | Guion fijo de entrevista |
| [`post-interview-template.md`](./post-interview-template.md) | Plantilla de ficha para CRM |
| `../plans/validation-to-first-revenue-plan.md` | Plan maestro |
| `../lean-canvas.md` | Contexto estratégico |

---

## Versionado

- Cambios de prompt → nueva versión en el nombre del archivo o bump en este README.
- Registrar correcciones en `CHANGELOG.md` con fecha, motivo y quién aprobó.
- Deni reporta errores repetidos; Gian corrige y versiona.

---

## Pruebas de aceptación

Antes de entregar a Deni, ejecutar los 3 casos en [`test-cases-v1.md`](./test-cases-v1.md). Criterio: **cero afirmaciones sin fuente** en los tres.

---

## Setup de la Gem

Ver [`../ops/gemini-gem-setup.md`](../ops/gemini-gem-setup.md).
