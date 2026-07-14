# Setup — Project de ChatGPT BeHere

> **Nota:** BeHere usa **Gemini Gem** en producción. Ver [`gemini-gem-setup.md`](./gemini-gem-setup.md).  
> Este doc queda como referencia si se migra a ChatGPT Projects.

> **Tiempo estimado:** 30–45 min  
> **Responsable:** Gian  
> **Prerequisito:** cuenta ChatGPT con Projects habilitado

---

## 1. Crear el Project

1. Abre [ChatGPT](https://chatgpt.com) → **Projects** → **New project**.
2. Nombre: `BeHere — Prospecting v1`
3. Descripción: `Captación B2B y validación para stand-up Uruguay. Borradores solo; Deni revisa y envía.`

---

## 2. Pegar instrucciones permanentes

1. En el Project → **Settings** / **Custom instructions**.
2. Copia el contenido completo de [`../prompts/project-instructions.md`](../prompts/project-instructions.md).
3. Guarda.

---

## 3. Subir archivos al Project

Sube estos archivos desde el repositorio (exporta o copia como `.md` / `.txt`):

| Archivo local | Obligatorio |
|---------------|-------------|
| `head/plans/validation-to-first-revenue-plan.md` | Sí |
| `head/lean-canvas.md` | Sí |
| `head/prompts/guardrails.md` | Sí |
| `head/prompts/interview-script.md` | Sí |
| `head/prompts/post-interview-template.md` | Sí |
| `head/prompts/README.md` | Recomendado |
| `head/plans/cta-hypotheses.md` | Opcional |

**No subir:** `.env`, claves API, exports del CRM con emails masivos, transcripciones sin consentimiento.

---

## 4. Compartir con Deni

1. Project → **Share** → invitar email de Deni con acceso de **miembro** (puede crear chats dentro del Project).
2. Enviarle enlace a:
   - [`head/prompts/README.md`](../prompts/README.md) — qué prompt usar y cuándo
   - [`head/plans/tareas-inicio-deni.md`](../plans/tareas-inicio-deni.md) — flujo operativo completo
   - [CRM Google Sheets](https://docs.google.com/spreadsheets/d/1EMn4J-KOSb-L48-y15rUnicn3DlDeyuxlREZuSneOE4/edit?usp=sharing)

---

## 5. Ejecutar casos de prueba

Seguir [`../prompts/test-cases-v1.md`](../prompts/test-cases-v1.md) y completar la tabla de registro.

Si algún caso falla → corregir `project-instructions.md` o el prompt afectado, bump versión en `CHANGELOG.md`, repetir pruebas.

---

## 6. Primer chat de Deni (smoke test)

Pedir a Deni que abra un chat en el Project y ejecute:

> "Usa el Prompt 01 con Prospecto Prueba Alpha, artista, Montevideo, sin enlaces."

Debe recibir tier 4 sin datos inventados. Si pasa → Deni puede empezar investigación real.

---

## 7. Mantenimiento

| Frecuencia | Acción |
|------------|--------|
| Cuando cambie un prompt en el repo | Re-subir archivo al Project o notificar a Deni el cambio |
| Semanal (con síntesis) | Gian revisa errores repetidos de IA |
| Tras cada corrección | Entrada en `head/prompts/CHANGELOG.md` |

---

## Checklist de entrega

- [ ] Project creado con instrucciones permanentes
- [ ] Archivos obligatorios cargados
- [ ] Deni invitada al Project
- [ ] 3 casos de prueba + bonus ficha ejecutados (ver `test-cases-v1.md`)
- [ ] `tareas-inicio-gian.md` Tarea 6 marcada completada
