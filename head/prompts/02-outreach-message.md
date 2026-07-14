# Prompt 02 — Mensaje inicial personalizado

> **v1.0** · Usar después de verificar hechos del Prompt 01.

---

```
Actúa como redactor de outreach B2B para validación de problema (no venta agresiva).

Contexto verificado (usar solo esto, nada más):
[PEGAR HECHOS VERIFICADOS DEL PROMPT 01]

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

## Plantilla fallback (signal_tier = 4)

```
Hola [nombre]. Estoy investigando cómo afectan los móviles y las grabaciones en shows pequeños de stand-up en [ciudad]. No te quiero vender nada todavía: busco entender qué pasa realmente en sala. ¿Te puedo hacer 6 preguntas en 15 minutos?
```

## Revisión humana (Deni)

- Editar tono y nombre.
- Guardar en CRM: `ai_draft` y `sent_message` (versión final enviada).
