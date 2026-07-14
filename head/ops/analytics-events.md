# Eventos de analítica — BeHere

**Herramienta:** [Umami Cloud](https://cloud.umami.is) (plan Hobby, gratis hasta 100K eventos/mes)  
**Website ID:** `18ee3c65-c408-45b3-8203-190d545762ee`  
**Implementación:** `web/src/lib/analytics.ts`, script en `BaseLayout.astro`  
**Variable de entorno:** `PUBLIC_UMAMI_WEBSITE_ID` (fallback en código si falta en build)

---

## Eventos del embudo

| Evento Umami | Equivalente plan | Cuándo se dispara | Propiedades |
|--------------|-------------------|-------------------|-------------|
| `pageview` (automático) | `page_view` | Cada carga de página | URL, referrer (Umami nativo) |
| `primary_cta_click` | `primary_cta_click` | Clic en cualquier elemento con `data-cta` | `landing`, `cta_id`, UTM |
| `lead_submit_success` | `lead_submit_success` | Web3Forms responde 200 | `landing`, `form_type`, `city`, UTM |
| `lead_submit_error` | `lead_submit_error` | Error de API o validación previa | `landing`, `error_reason`, `form_type`, UTM |
| — | `interview_booked` | Manual en Umami o CRM | Deni registra en CRM al agendar entrevista |

**Distinción B2B / B2C:** propiedad `landing` (`b2b` | `b2c`) en todos los eventos custom. También se puede filtrar por URL (`/` vs `/app`).

**UTM:** se capturan de la URL al entrar y se persisten en `sessionStorage` para adjuntarlos a eventos posteriores en la misma sesión.

---

## CTAs instrumentados

### B2B (`/`)

| `cta_id` | Ubicación | Intención medida |
|----------|-----------|------------------|
| `hero-primary` | Hero | Interés inicial → scroll al formulario |
| `hero-secondary` | Hero | Interés secundario (enlace) |
| `header` | Header desktop | CTA sticky header |
| `sticky-header` | Header móvil | Mismo, viewport pequeño |
| `sticky-footer` | Footer sticky | CTA persistente al hacer scroll |
| `steps-intermediate` | Steps | Interés tras entender el proceso |
| `pilot-form-submit` | Formulario piloto | **Conversión primaria B2B** |

### B2C (`/app`)

| `cta_id` | Ubicación | Intención medida |
|----------|-----------|------------------|
| `hero-primary` | Hero | Abrir modal waitlist |
| `hero-secondary` | Hero | Interés secundario |
| `header` / `sticky-header` / `sticky-footer` | Navegación | Abrir modal desde nav |
| `challenge-cta` | Challenge | Dolor reconocido → modal |
| `steps-intermediate` | Steps | Proceso entendido → modal |
| `final-cta` | CTA final | Última oportunidad antes de salir |
| `beta-modal-submit` | Modal waitlist | **Conversión primaria B2C** |

Ver hipótesis y métricas esperadas en `head/plans/cta-hypotheses.md`.

---

## Embudo sugerido en Umami

1. **B2B:** pageview `/` → `primary_cta_click` (cualquier) → `lead_submit_success` (`form_type=b2b_pilot`)
2. **B2C:** pageview `/app` → `primary_cta_click` → `lead_submit_success` (`form_type=b2c_waitlist`)

Filtrar eventos por propiedad `landing` para no mezclar audiencias.

---

## Configuración

1. Crear cuenta en [cloud.umami.is](https://cloud.umami.is) (plan Hobby gratis).
2. Añadir sitio `trybehere.com` (región EU si está disponible).
3. Copiar **Website ID** → `PUBLIC_UMAMI_WEBSITE_ID` en Netlify y en `web/.env` local.
4. Redeploy.
5. Verificar en Umami → **Realtime** que aparecen eventos al navegar y enviar formulario de prueba.

---

## `interview_booked` (manual)

Umami no recibe esto desde la web. Deni lo registra en el CRM (`interview_date`) y, si hace falta cruzar con analítica, puede anotarse como evento manual o tag en el CRM. No duplicar en web hasta exista enlace de agenda instrumentado.

---

## Privacidad

- Umami no usa cookies de seguimiento.
- No se envía email ni nombre en eventos de analítica.
- `city` solo se adjunta en `lead_submit_success` (agregado geográfico, sin PII directa).
- Mencionado en `/privacidad`.
