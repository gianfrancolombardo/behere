# Prompt 04 — Ficha post-entrevista

> **v1.0** · Usar inmediatamente después de la llamada. Pegar notas brutas o transcripción.

---

```
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

## Validación humana obligatoria

- Si `pain_quote` no existe en tus notas → no marcar dolor como confirmado.
- Copiar campos validados a CRM usando [`post-interview-template.md`](./post-interview-template.md).
