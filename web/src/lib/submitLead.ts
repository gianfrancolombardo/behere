const UTM_STORAGE_KEY = 'behere_utm';

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export function captureUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') ?? undefined,
    utm_medium: params.get('utm_medium') ?? undefined,
    utm_campaign: params.get('utm_campaign') ?? undefined,
  };
}

/** Reads UTM from URL on first visit, then sessionStorage for the rest of the session. */
export function getSessionUtm(): UtmParams {
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as UtmParams;
  } catch {
    // Ignore malformed session data.
  }

  const utm = captureUtmParams();
  const hasUtm = Boolean(utm.utm_source || utm.utm_medium || utm.utm_campaign);

  if (hasUtm) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {
      // Ignore quota errors in private browsing.
    }
  }

  return utm;
}

export interface LeadPayload {
  access_key: string;
  subject: string;
  email: string;
  botcheck: boolean;
  form_type: 'b2b_pilot' | 'b2c_waitlist';
  landing: string;
  page_url: string;
  submitted_at: string;
  name?: string;
  city?: string;
  act_type?: string;
  next_show?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface SubmitResult {
  ok: boolean;
  message: string;
}

export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { message?: string };

    if (response.status === 200) {
      return { ok: true, message: data.message ?? 'Enviado correctamente.' };
    }

    return {
      ok: false,
      message: data.message ?? 'No se pudo enviar. Inténtalo de nuevo.',
    };
  } catch {
    return {
      ok: false,
      message: 'Error de conexión. Comprueba tu red e inténtalo de nuevo.',
    };
  }
}
