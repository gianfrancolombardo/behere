# Prompt 01 — Investigación rápida de prospecto

> **v1.0** · Usar por cada fila del CRM. No usar Deep Research aquí.

---

```
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
- Si un dato no aparece en los enlaces, escribe "no_encontrado".
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

## Revisión humana (Deni, ~2 min)

1. Abre cada URL citada.
2. Si un hecho no está en la fuente, bórralo.
3. Solo entonces pasa al Prompt 02.
