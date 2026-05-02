import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";

const SITE_URL = "https://kowiktori.lovable.app";
const SITE_NAME = "Виктория Кокурина — Создание сайтов";
const DEFAULT_TITLE = "Виктория Кокурина — Сайты на GitHub Pages с привязкой домена";
const DEFAULT_DESCRIPTION =
  "Создаю лендинги, сайты-визитки и квизы. Размещение на GitHub Pages, привязка домена, поддержка и доработки. Заказать сайт под ключ.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: OG_IMAGE,
  founder: { "@type": "Person", name: "Виктория Кокурина" },
  areaServed: "RU",
  telephone: "+79080288580",
  sameAs: [
    "https://t.me/kowiktori",
    "https://instagram.com/kowiktori",
  ],
  serviceType: [
    "Создание лендингов",
    "Сайты-визитки",
    "Размещение на GitHub Pages",
    "Привязка домена",
    "Квизы и сайты-презентации",
    "Поддержка и доработка сайтов",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Страница не найдена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Возможно, страница была перемещена или удалена.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "Виктория Кокурина" },
      { name: "keywords", content: "создание сайтов, сайт-визитка, лендинг, GitHub Pages, привязка домена, квизы, заказать сайт, веб-разработчик" },
      { name: "theme-color", content: "#141432" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <AnalyticsScripts />
      <Outlet />
    </>
  );
}
