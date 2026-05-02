import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { track } from "@/lib/analytics";
import { ContactForm } from "@/components/ContactForm";
import heroBg from "@/assets/hero-bg.jpg";
import portfolioYaEst from "@/assets/portfolio/ya-est.png";
import portfolioMsfin from "@/assets/portfolio/msfin.png";
import portfolioRealtor from "@/assets/portfolio/realtor.png";
import portfolioQuiz from "@/assets/portfolio/kokurina-quiz.png";

const portfolio = [
  {
    title: "Путь к себе",
    desc: "Сайт-визитка энергокоуча и астролога. Атмосферный hero, мягкая подача.",
    tag: "Визитка",
    url: "http://ya-est.ru/",
    img: portfolioYaEst,
  },
  {
    title: "Marina Sadrieva — финансовый эксперт",
    desc: "Премиальный лендинг для эксперта по недвижимости. Тёмная тема + золото.",
    tag: "Лендинг",
    url: "http://msfin.ru",
    img: portfolioMsfin,
  },
  {
    title: "Новостройки 2026",
    desc: "Гайд-лендинг по новостройкам с разделами сравнения и расчётов.",
    tag: "Гайд / Лендинг",
    url: "https://v0-realtor-landing-page-eight.vercel.app/",
    img: portfolioRealtor,
  },
  {
    title: "Тест по недвижимости",
    desc: "Интерактивный квиз для прогрева аудитории и сбора лидов.",
    tag: "Квиз",
    url: "https://v0-kokurina.vercel.app/",
    img: portfolioQuiz,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Виктория Кокурина — Сайты на GitHub Pages с привязкой домена" },
      {
        name: "description",
        content:
          "Создаю лендинги, сайты-визитки, квизы и сайты-презентации. Размещение на GitHub Pages, привязка домена, поддержка. Заказать сайт под ключ.",
      },
      {
        property: "og:title",
        content: "Виктория Кокурина — Создание сайтов под ключ",
      },
      {
        property: "og:description",
        content:
          "Лендинги, визитки, квизы. GitHub Pages + ваш домен. От идеи до запуска.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Лендинги",
    desc: "Продающие одностраничники, которые конвертируют посетителей в заявки.",
    icon: "✦",
  },
  {
    title: "Сайты-визитки",
    desc: "Аккуратный сайт о вас или вашем бизнесе с понятной структурой.",
    icon: "◆",
  },
  {
    title: "Квизы и тесты",
    desc: "Интерактивные квизы для прогрева аудитории и сбора лидов.",
    icon: "◇",
  },
  {
    title: "Сайты-презентации",
    desc: "Эффектные презентации проектов и продуктов в формате сайта.",
    icon: "▲",
  },
  {
    title: "GitHub Pages",
    desc: "Размещение сайта на GitHub Pages и привязка вашего домена.",
    icon: "◉",
  },
  {
    title: "Поддержка",
    desc: "Доработки, обновления контента и техническая поддержка после запуска.",
    icon: "✺",
  },
];

const pricing = [
  {
    name: "Визитка",
    price: "3 900 ₽",
    tagline: "Одна страница о вас или услуге",
    features: [
      "1 страница, до 5 блоков",
      "Адаптив под мобильные",
      "Форма заявки на почту",
      "Размещение на GitHub Pages",
      "Срок: 2–3 дня",
    ],
    cta: "Заказать визитку",
    highlight: false,
  },
  {
    name: "Лендинг",
    price: "7 900 ₽",
    tagline: "Продающий одностраничник",
    features: [
      "До 8 секций под продажу",
      "Адаптив + базовая анимация",
      "Форма + интеграция с Telegram",
      "GitHub Pages + ваш домен",
      "Базовое SEO и Метрика",
      "Срок: 4–6 дней",
    ],
    cta: "Заказать лендинг",
    highlight: true,
    badge: "Хит",
  },
  {
    name: "Квиз / Презентация",
    price: "9 900 ₽",
    tagline: "Интерактивный квиз или сайт-презентация",
    features: [
      "До 7 шагов с логикой",
      "Сбор лидов с ответами",
      "Дизайн под ваш бренд",
      "Подключение домена",
      "Срок: 5–7 дней",
    ],
    cta: "Обсудить квиз",
    highlight: false,
  },
  {
    name: "Поддержка",
    price: "от 1 500 ₽/мес",
    tagline: "Доработки и обновления",
    features: [
      "Правки контента и блоков",
      "Мониторинг работоспособности",
      "Резервные копии",
      "Консультации по почте/TG",
      "Без долгих договоров",
    ],
    cta: "Подключить поддержку",
    highlight: false,
  },
];

const steps = [
  { n: "01", title: "Бриф", desc: "Обсуждаем задачу, цели и референсы." },
  { n: "02", title: "Дизайн", desc: "Готовлю макет — вы согласовываете." },
  { n: "03", title: "Сборка", desc: "Верстаю сайт и подключаю всё нужное." },
  { n: "04", title: "Запуск", desc: "Деплой на GitHub Pages + ваш домен." },
];

function Index() {
  useEffect(() => {
    track("page_view", "home");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            VK<span className="text-gradient">.studio</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition hover:text-foreground">Услуги</a>
            <a href="#pricing" className="transition hover:text-foreground">Цены</a>
            <a href="#portfolio" className="transition hover:text-foreground">Работы</a>
            <a href="#process" className="transition hover:text-foreground">Процесс</a>
            <a href="#contact" className="transition hover:text-foreground">Контакты</a>
          </div>
          <a
            href="#contact"
            onClick={() => track("cta_click", "header_cta")}
            className="bg-gradient-primary shadow-glow rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
          >
            Заказать
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-40" />

        <div className="mx-auto max-w-6xl px-5 pt-20 pb-28 md:pt-32 md:pb-40">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            <span className="animate-glow h-1.5 w-1.5 rounded-full bg-primary" />
            Открыта для новых проектов
          </span>
          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            Создаю сайты,
            <br />
            которые <span className="text-gradient">приводят клиентов</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Виктория Кокурина — веб-разработчик. Лендинги, визитки и квизы под ключ.
            Размещаю на GitHub Pages с привязкой вашего домена.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              onClick={() => track("cta_click", "hero_primary")}
              className="bg-gradient-primary shadow-glow rounded-full px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.99]"
            >
              Обсудить проект
            </a>
            <a
              href="#services"
              onClick={() => track("cta_click", "hero_secondary")}
              className="rounded-full border border-border bg-card/40 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition hover:bg-card/70"
            >
              Смотреть услуги
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border/50 pt-8 max-w-lg">
            <div>
              <div className="font-display text-2xl font-bold md:text-3xl">50+</div>
              <div className="mt-1 text-xs text-muted-foreground">проектов</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold md:text-3xl">7 дн</div>
              <div className="mt-1 text-xs text-muted-foreground">средний срок</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold md:text-3xl">100%</div>
              <div className="mt-1 text-xs text-muted-foreground">довольных</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-widest text-primary uppercase">
            Услуги
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Что я делаю
          </h2>
          <p className="mt-4 text-muted-foreground">
            От простого лендинга до интерактивного квиза — собираю сайт под вашу задачу.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              onMouseEnter={() => track("service_view", s.title)}
              className="bg-gradient-card group relative overflow-hidden rounded-2xl border border-border p-6 backdrop-blur transition hover:border-primary/50 hover:shadow-glow"
            >
              <div className="bg-gradient-primary mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-lg text-primary-foreground">
                {s.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-border/50 bg-card/20">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-medium tracking-widest text-primary uppercase">
              Цены
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Прозрачные тарифы
            </h2>
            <p className="mt-4 text-muted-foreground">
              Цены — по нижней границе рынка РФ. Без скрытых платежей: дизайн,
              вёрстка, размещение и базовое SEO уже включены.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur transition ${
                  p.highlight
                    ? "border-primary/60 bg-gradient-card shadow-glow"
                    : "border-border bg-card/40 hover:border-primary/40"
                }`}
              >
                {p.highlight && p.badge && (
                  <span className="bg-gradient-primary absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="font-display mt-5 text-3xl font-bold">
                  <span className="text-gradient">{p.price}</span>
                </div>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => track("cta_click", `pricing_${p.name}`)}
                  className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-95"
                      : "border border-border bg-card/60 text-foreground hover:bg-card"
                  }`}
                >
                  {p.cta}
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Финальная стоимость зависит от объёма. Сложные проекты — по договорённости.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-medium tracking-widest text-primary uppercase">
              Процесс
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Как мы работаем
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="text-gradient font-display mb-3 text-4xl font-bold">
                  {step.n}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-primary uppercase">
              Контакты
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Расскажите о проекте
            </h2>
            <p className="mt-4 text-muted-foreground">
              Отвечаю в течение часа в рабочее время. Бесплатно проконсультирую и оценю задачу.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://t.me/kowiktori"
                target="_blank"
                rel="noopener"
                onClick={() => track("contact_click", "telegram")}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 transition hover:border-primary/50 hover:bg-card/70"
              >
                <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground">✈</span>
                <div>
                  <div className="text-xs text-muted-foreground">Telegram</div>
                  <div className="font-semibold">@kowiktori</div>
                </div>
              </a>
              <a
                href="https://wa.me/79080288580"
                target="_blank"
                rel="noopener"
                onClick={() => track("contact_click", "whatsapp")}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 transition hover:border-primary/50 hover:bg-card/70"
              >
                <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground">☏</span>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp / Телефон</div>
                  <div className="font-semibold">+7 908 028-85-80</div>
                </div>
              </a>
              <a
                href="https://instagram.com/kowiktori"
                target="_blank"
                rel="noopener"
                onClick={() => track("contact_click", "instagram")}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4 transition hover:border-primary/50 hover:bg-card/70"
              >
                <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground">◎</span>
                <div>
                  <div className="text-xs text-muted-foreground">Instagram</div>
                  <div className="font-semibold">@kowiktori</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-card shadow-soft rounded-3xl border border-border p-6 backdrop-blur md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Виктория Кокурина. Создание сайтов.</div>
          <div className="flex gap-5">
            <a href="https://t.me/kowiktori" className="hover:text-foreground">Telegram</a>
            <a href="https://wa.me/79080288580" className="hover:text-foreground">WhatsApp</a>
            <a href="https://instagram.com/kowiktori" className="hover:text-foreground">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
