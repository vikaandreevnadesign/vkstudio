import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    track("form_submit", "contact_form");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !contact) {
      setStatus("error");
      setLoading(false);
      track("form_error", "validation");
      return;
    }

    // Открываем Telegram с заполненной заявкой
    const text = encodeURIComponent(
      `Здравствуйте, Виктория!\n\nИмя: ${name}\nКонтакт: ${contact}\n\n${message}`,
    );
    window.open(`https://t.me/kowiktori?text=${text}`, "_blank", "noopener");

    track("form_success", "contact_form", { has_message: message.length > 0 });
    setStatus("success");
    setLoading(false);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Ваше имя
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Как к вам обращаться"
          className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label htmlFor="contact" className="mb-2 block text-sm font-medium">
          Telegram, телефон или email
        </label>
        <input
          id="contact"
          name="contact"
          required
          placeholder="@username или +7..."
          className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Что нужно сделать
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Кратко опишите задачу: тип сайта, сроки, бюджет"
          className="w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-primary shadow-glow w-full rounded-xl px-6 py-3.5 font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.99] disabled:opacity-60"
      >
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>
      {status === "success" && (
        <p className="text-sm text-primary-foreground/90">
          ✓ Открыт Telegram с вашей заявкой. Жду сообщения!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">Заполните имя и контакт.</p>
      )}
    </form>
  );
}
