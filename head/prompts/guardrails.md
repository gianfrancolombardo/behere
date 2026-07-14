# Guardrails — BeHere AI-native

> Aplica a todo uso de IA (Gemini Gem) en captación y entrevistas.

---

## Datos: qué NO subir

- Documentos de identidad, pasaportes, DNI.
- Datos de pago, tarjetas, cuentas bancarias.
- Contraseñas, tokens, claves API.
- Historiales médicos o datos sensibles de terceros.
- Conversaciones privadas no autorizadas.
- Emails o teléfonos masivos sin consentimiento.

## Datos: qué SÍ se puede usar

- Enlaces públicos (Instagram, Linktree, web de sala, notas de prensa).
- Notas propias de entrevista (con consentimiento informado).
- Transcripciones con consentimiento explícito del entrevistado.
- Export CSV del CRM (seudonimizar si se comparte fuera del equipo).
- Documentos estratégicos del repositorio BeHere.

## Reglas de afirmación

| Tipo | Regla |
|------|-------|
| Hecho | Debe tener URL o cita en notas |
| Hipótesis | Marcar explícitamente como `HIPÓTESIS` |
| Inferencia | No usar en mensajes de outreach |
| Opinión del prospecto | Solo con cita textual de la entrevista |

**Regla de oro:** mejor un mensaje genérico honesto que uno personalizado con un dato falso.

## Frases prohibidas en outreach

- "Me encanta tu trabajo" / "Admiro" (sin evidencia concreta verificable).
- "Innovador" / "Revolucionario" / "Disruptivo".
- "Nuestra app" / "Descarga la app" (aún no existe app instalada).
- "Detección automática" / "Bloqueo de pantalla garantizado".
- "Pilotos en marcha" / "Clientes satisfechos" (sin evidencia real).
- "Espero que estés bien" como apertura.

## Promesas prohibidas

- Precio (49 €, 25 €) salvo que ya se discutió en entrevista.
- Funcionalidades no mencionadas en el plan de piloto.
- Producción audiovisual por parte de BeHere.
- Resultados garantizados de adopción o comportamiento.

## Revisión humana obligatoria

| Artefacto | Quién revisa | Antes de |
|-----------|--------------|----------|
| Investigación de prospecto | Deni | Redactar mensaje |
| Mensaje de outreach | Deni | Enviar |
| Ficha post-entrevista | Deni | Actualizar CRM |
| Seguimiento | Deni | Enviar |
| Síntesis semanal | Gian + Deni | Tomar decisiones |

## Privacidad del plan Gemini

- Revisar configuración de privacidad y retención de la cuenta Google / Gemini utilizada.
- No usar conversaciones de la Gem como único CRM.
- Mantener copia exportable de prompts, fichas y resultados en el repo.

## Conectores y Actions

**No habilitar** escritura automática a CRM, email o calendario en esta etapa. Lectura manual y export CSV únicamente.

## Si la IA alucina

1. Descartar el borrador completo o el campo afectado.
2. Anotar el error en `CHANGELOG.md` del directorio prompts.
3. Corregir el prompt si el error se repite ≥2 veces.
4. No enviar "por si acaso".
