import { useEffect } from "react";
import { GA_MEASUREMENT_ID, YM_COUNTER_ID } from "@/lib/analytics-config";

/**
 * Подключает Google Analytics 4 и Яндекс.Метрику, если в analytics-config.ts
 * указаны соответствующие ID. Безопасно для SSR — работает только на клиенте.
 */
export function AnalyticsScripts() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ---------- Google Analytics 4 ----------
    if (GA_MEASUREMENT_ID && !document.getElementById("ga4-script")) {
      const s = document.createElement("script");
      s.id = "ga4-script";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(s);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer = (window as any).dataLayer || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.gtag = function gtag(...args: any[]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
    }

    // ---------- Яндекс.Метрика ----------
    if (YM_COUNTER_ID && !document.getElementById("ym-script")) {
      window.YM_COUNTER_ID = YM_COUNTER_ID;
      const ymScript = document.createElement("script");
      ymScript.id = "ym-script";
      ymScript.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${YM_COUNTER_ID}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
      `;
      document.head.appendChild(ymScript);
    }
  }, []);

  return null;
}
