# Setup — Gemini Gem BeHere Prospecting

> **Estado:** activa desde 2026-07-15  
> **Responsable:** Gian  
> **Operador:** Deni  
> **Gem:** [BeHere — Prospecting v1](https://gemini.google.com/gem/7d8896898d3f)

Equivalente operativo al Project de ChatGPT del plan de validación. Misma lógica: instrucciones permanentes, archivos de contexto y prompts versionados en el repo.

---

## Acceso

| Quién | Acción |
|-------|--------|
| Gian | Owner de la Gem |
| Deni | Compartir Gem desde Gemini → **Share** (misma cuenta Google o enlace según plan) |

Enlace directo para Deni: https://gemini.google.com/gem/7d8896898d3f

---

## Contenido cargado en la Gem

Instrucciones basadas en [`../prompts/project-instructions.md`](../prompts/project-instructions.md).

Archivos de conocimiento recomendados (si no están ya):

| Archivo | Obligatorio |
|---------|-------------|
| `head/plans/validation-to-first-revenue-plan.md` | Sí |
| `head/lean-canvas.md` | Sí |
| `head/prompts/guardrails.md` | Sí |
| `head/prompts/interview-script.md` | Sí |
| `head/prompts/post-interview-template.md` | Sí |

**No subir:** `.env`, claves, exports CRM con emails masivos, transcripciones sin consentimiento.

---

## Cómo usa Deni la Gem

1. Abrir la Gem desde el enlace.
2. Consultar [`../prompts/README.md`](../prompts/README.md) para saber qué prompt pedir (01–06).
3. Ejemplo de inicio: *"Usa el Prompt 01 con [nombre], [rol], [ciudad], enlaces: [URLs]"*.
4. Verificar hechos antes de pedir Prompt 02.
5. Nunca enviar sin revisar (ver [`../prompts/guardrails.md`](../prompts/guardrails.md)).

---

## Casos de prueba (Gate 0)

Ejecutar en la Gem siguiendo [`../prompts/test-cases-v1.md`](../prompts/test-cases-v1.md).

Smoke test mínimo:

> Usa el Prompt 01 con Prospecto Prueba Alpha, artista, Montevideo, sin enlaces.

Debe devolver `signal_tier = 4` sin datos inventados.

---

## Mantenimiento

| Cuándo | Acción |
|--------|--------|
| Cambio de prompt en repo | Actualizar instrucciones o archivos en la Gem; entrada en `CHANGELOG.md` |
| Semanal | Gian revisa errores repetidos con Deni |
| Alternativa futura | Si se migra a ChatGPT Project, ver [`chatgpt-project-setup.md`](./chatgpt-project-setup.md) |

---

## Checklist

- [x] Gem creada con instrucciones permanentes
- [x] Enlace documentado en repo
- [ ] Deni con acceso confirmado
- [ ] Casos de prueba en `test-cases-v1.md` ejecutados (pass)
