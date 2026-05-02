// Простая клиентская аналитика на base событиях.
// События пишутся в localStorage (последние 200) и логируются в консоль.
// Если на странице доступен gtag (Google Analytics) или Яндекс.Метрика (ym),
// событие автоматически отправляется туда же.

export type LeadEvent =
  | "page_view"
  | "cta_click"
  | "contact_click"
  | "service_view"
  | "form_submit"
  | "form_success"
  | "form_error";

interface EventPayload {
  event: LeadEvent;
  label?: string;
  meta?: Record<string, string | number | boolean | undefined>;
  ts: number;
  path: string;
}

const STORAGE_KEY = "vk_events";
const MAX_EVENTS = 200;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (...args: unknown[]) => void;
    YM_COUNTER_ID?: number;
  }
}

export function track(
  event: LeadEvent,
  label?: string,
  meta?: EventPayload["meta"],
) {
  if (typeof window === "undefined") return;
  const payload: EventPayload = {
    event,
    label,
    meta,
    ts: Date.now(),
    path: window.location.pathname + window.location.search,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: EventPayload[] = raw ? JSON.parse(raw) : [];
    list.push(payload);
    if (list.length > MAX_EVENTS) list.splice(0, list.length - MAX_EVENTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* storage недоступен — не критично */
  }

  // Google Analytics (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", event, { event_label: label, ...meta });
  }
  // Яндекс.Метрика
  if (typeof window.ym === "function" && window.YM_COUNTER_ID) {
    window.ym(window.YM_COUNTER_ID, "reachGoal", event, { label, ...meta });
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[analytics]", event, label ?? "", meta ?? {});
  }
}

export function getStoredEvents(): EventPayload[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
