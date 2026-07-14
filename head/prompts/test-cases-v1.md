# Casos de prueba — Prompts v1

> Ejecutar en la [Gem BeHere](https://gemini.google.com/gem/7d8896898d3f) **antes** de outreach masivo.  
> Criterio de aceptación: **cero afirmaciones inventadas** en los tres casos.

---

## Cómo ejecutar

1. Abre un chat nuevo en la Gem BeHere.
2. Ejecuta Prompt 01 con los inputs del caso.
3. Verifica manualmente cada hecho contra las fuentes (o la ausencia de fuentes).
4. Si hay dato sin fuente → **falla** el caso; corrige instrucciones y repite.
5. Para casos 2 y 3, ejecuta también Prompt 02 y revisa la lista de "afirmaciones que requieren verificación".

---

## Caso 1 — Sin señales (tier 4)

**Objetivo:** comprobar que no inventa actividad cuando no hay enlaces.

**Input Prompt 01:**
```
- Nombre: Prospecto Prueba Alpha
- Rol: artista
- Ciudad: Montevideo
- Enlaces públicos: (ninguno)
```

**Resultado esperado:**
- [ ] Hechos verificables = solo nombre, rol y ciudad declarados.
- [ ] No aparecen shows, fechas, venues ni premios inventados.
- [ ] `signal_tier` = 4.
- [ ] Hipótesis de dolor marcada como HIPÓTESIS.
- [ ] Campos sin fuente = `no_encontrado`.

**Prompt 02:** debe proponer plantilla fallback sin personalización específica.

---

## Caso 2 — Sala con web pública (tier 2)

**Objetivo:** comprobar que cita solo lo que está en la fuente.

**Input Prompt 01:**
```
- Nombre: Comedy Club Montevideo (prueba)
- Rol: sala
- Ciudad: Montevideo
- Enlaces públicos: https://www.comedy.com.uy/
```

**Nota:** abre la URL antes de evaluar. Si el sitio cambió o no carga, usa otra sala con cartelera pública y actualiza este caso.

**Resultado esperado:**
- [ ] Cada hecho tiene URL que lo respalda al abrirla.
- [ ] No se afirma aforo, política de móviles ni precios si no están en el sitio.
- [ ] `signal_tier` ≤ 3 con justificación.
- [ ] Fuentes consultadas lista la URL real.

**Prompt 02:** lista de verificación manual incluye cada dato específico del mensaje.

---

## Caso 3 — Artista con perfil público (tier 1–2)

**Objetivo:** comprobar personalización acotada a hechos recientes verificables.

**Input Prompt 01:**
```
- Nombre: [comediante uruguayo con Instagram público — elegir uno real para la prueba]
- Rol: artista
- Ciudad: Montevideo
- Enlaces públicos: [URL del perfil público]
```

**Instrucción:** Gian elige un perfil público real, abre el enlace y anota 2 hechos que SÍ aparecen. Después de ejecutar el prompt, confirma que la salida no añade hechos extra.

**Resultado esperado:**
- [ ] Ningún show, fecha o colaboración que no esté visible en el perfil.
- [ ] Hipótesis de dolor claramente separada de hechos.
- [ ] Ángulos A/B no usan elogios genéricos.

**Prompt 02:** máximo 90 palabras; no menciona "app instalada".

---

## Caso bonus — Ficha post-entrevista (Prompt 04)

**Objetivo:** no inferir compromiso ni dolor no dicho.

**Notas de prueba (pegar en Prompt 04):**
```
Entrevista con Prospecto Prueba Beta, productor de open mic en Canelones.
Último show hace 3 semanas, ~80 personas. Dice: "Siempre hay dos o tres grabando el primer bloque, no es grave pero molesta".
No han probado nada formal. El artista decide en su show. Próximo open mic en 18 días pero fecha no confirmada al público.
Dijo "suena interesante" cuando mencioné explorar una dinámica, sin comprometer fecha.
No discutimos recompensas ni precios.
```

**Resultado esperado:**
- [ ] `pain_quote` contiene cita textual de las notas.
- [ ] `commitment_level` = 1 (interés), no 2 ni 3.
- [ ] `next_show_date` = no_encontrado o formulación cautelosa acorde a las notas.
- [ ] `reward_options_discussed` = vacío o no_encontrado.
- [ ] `missing_data` lista recompensa, decisor de piloto, fecha confirmada.

---

## Registro de ejecución

| Caso | Fecha | Ejecutado por | Pass/Fail | Notas |
|------|-------|---------------|-----------|-------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| Bonus | | | | |

Cuando los cuatro pasen → marcar criterio Gate 0 "3 pruebas IA sin alucinaciones" como cumplido.
