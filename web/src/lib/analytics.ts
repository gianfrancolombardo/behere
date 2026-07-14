import { getSessionUtm } from './submitLead';

const UMAMI_READY_TIMEOUT_MS = 10_000;

export type LandingType = 'b2b' | 'b2c';

interface PendingEvent {
  event: string;
  landing: LandingType;
  extra?: Record<string, string | undefined>;
}

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string>) => void;
    };
  }
}

const pendingEvents: PendingEvent[] = [];
let umamiReady = false;

function buildProps(
  landing: LandingType,
  extra?: Record<string, string | undefined>,
): Record<string, string> {
  const utm = getSessionUtm();
  const props: Record<string, string> = {
    landing,
    ...(utm.utm_source ? { utm_source: utm.utm_source } : {}),
    ...(utm.utm_medium ? { utm_medium: utm.utm_medium } : {}),
    ...(utm.utm_campaign ? { utm_campaign: utm.utm_campaign } : {}),
  };

  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value) props[key] = value;
    }
  }

  return props;
}

function sendEvent(event: string, landing: LandingType, extra?: Record<string, string | undefined>): void {
  window.umami?.track(event, buildProps(landing, extra));
}

function flushPendingEvents(): void {
  if (!window.umami?.track) return;

  umamiReady = true;
  while (pendingEvents.length > 0) {
    const item = pendingEvents.shift();
    if (!item) continue;
    sendEvent(item.event, item.landing, item.extra);
  }
}

function waitForUmami(): void {
  if (window.umami?.track) {
    flushPendingEvents();
    return;
  }

  const startedAt = Date.now();
  const intervalId = window.setInterval(() => {
    if (window.umami?.track) {
      window.clearInterval(intervalId);
      flushPendingEvents();
      return;
    }

    if (Date.now() - startedAt >= UMAMI_READY_TIMEOUT_MS) {
      window.clearInterval(intervalId);
    }
  }, 100);
}

export function trackEvent(
  event: string,
  landing: LandingType,
  extra?: Record<string, string | undefined>,
): void {
  if (umamiReady && window.umami?.track) {
    sendEvent(event, landing, extra);
    return;
  }

  if (window.umami?.track) {
    flushPendingEvents();
    sendEvent(event, landing, extra);
    return;
  }

  pendingEvents.push({ event, landing, extra });
}

export function trackLeadSubmitSuccess(
  landing: LandingType,
  extra?: Record<string, string | undefined>,
): void {
  trackEvent('lead_submit_success', landing, extra);
}

export function trackLeadSubmitError(
  landing: LandingType,
  errorReason: string,
  extra?: Record<string, string | undefined>,
): void {
  trackEvent('lead_submit_error', landing, { error_reason: errorReason, ...extra });
}

export function initCtaTracking(landing: LandingType): void {
  document.addEventListener(
    'click',
    (event) => {
      const target = (event.target as Element).closest('[data-cta]');
      if (!target) return;

      const ctaId = target.getAttribute('data-cta');
      if (!ctaId) return;

      trackEvent('primary_cta_click', landing, { cta_id: ctaId });
    },
    { capture: true },
  );
}

export function initAnalytics(landing: LandingType): void {
  getSessionUtm();
  initCtaTracking(landing);
  waitForUmami();
}
