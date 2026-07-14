# QR de campaña — BeHere

Códigos QR con UTM para atribución en Umami y Web3Forms.

**Regenerar** (desde `web/`):

```bash
npm run generate:qr
```

---

## Archivos

| Archivo | Uso |
|---------|-----|
| `b2b-outreach.png` / `.svg` | Outreach B2B (tarjetas, flyers, sala) |
| `b2c-pilot.png` / `.svg` | Piloto B2C en show (fans) |
| `campaigns.json` | URLs y metadatos (fuente para el script) |

---

## URLs destino

| ID | URL |
|----|-----|
| `b2b-outreach` | `https://trybehere.com/?utm_source=qr&utm_medium=print&utm_campaign=b2b-outreach` |
| `b2c-pilot` | `https://trybehere.com/app?utm_source=qr&utm_medium=print&utm_campaign=b2c-pilot` |

Los UTM se capturan al entrar, se guardan en `sessionStorage` y viajan a:

- eventos Umami (`primary_cta_click`, `lead_submit_success`)
- payload del lead en Web3Forms

Ver `head/ops/analytics-events.md`.

---

## Impresión

- **PNG 512×512** — impresión y materiales físicos.
- **SVG** — escalable para diseño (Illustrator, Figma, Canva).

Margen de error corrección: nivel M (adecuado para impresión en papel común).

---

## Checklist E2E (móvil)

Probar cada QR en iPhone y Android:

- [ ] Escaneo abre la URL correcta (`/` o `/app`)
- [ ] Umami Realtime muestra pageview
- [ ] Clic en CTA → evento con `utm_campaign` esperado
- [ ] Envío de formulario de prueba → lead en Web3Forms con UTM
- [ ] Evento `lead_submit_success` en Umami con mismos UTM

URLs de prueba manual (sin QR):

- B2B: `https://trybehere.com/?utm_source=qr&utm_medium=print&utm_campaign=b2b-outreach`
- B2C: `https://trybehere.com/app?utm_source=qr&utm_medium=print&utm_campaign=b2c-pilot`
