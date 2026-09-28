import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Countdown } from "@/components/landing/Countdown";
import { Reveal } from "@/components/landing/Reveal";
import { AppPromotion } from "@/components/landing/AppPromotion";
import heroGlow from "@/assets/hero-glow.jpg";
import logo from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "11Xbaaji App | খেলুন আরও সহজে" },
      {
        name: "description",
        content:
          "11Xbaaji অ্যাপের মাধ্যমে আপনার স্পোর্টস অভিজ্ঞতা রাখুন আরও সহজ, দ্রুত এবং সবসময় হাতের কাছে।",
      },
      { property: "og:title", content: "11Xbaaji App | খেলুন আরও সহজে" },
      {
        property: "og:description",
        content:
          "আপনার স্পোর্টস অভিজ্ঞতা, এখন হাতের মুঠোয়।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppPromotion,
});

const stats = [
  { value: "১২,৫০০+", label: "সক্রিয় মেম্বার" },
  { value: "৯৯%", label: "উইনিং রেট" },
  { value: "প্রতিদিন", label: "ফ্রি মাল্টি" },
  { value: "২৪/৭", label: "সাপোর্ট" },
];

const benefits = [
  {
    icon: "◆",
    title: "১০০% ফ্রি মাল্টি",
    text: "প্রতিদিন আমাদের চ্যানেলে সম্পূর্ণ ফ্রিতে শিওর মাল্টি দেওয়া হয়।",
  },
  {
    icon: "▲",
    title: "উচ্চ উইনিং রেট",
    text: "আমাদের স্পেশালিস্টদের অ্যানালাইসিসে ৯৯% উইনিং রেট থাকে।",
  },
  {
    icon: "❖",
    title: "মানি ম্যানেজমেন্ট",
    text: "কিভাবে ব্যালেন্স সেভ করে বেট করবেন তার সঠিক গাইডলাইন।",
  },
  {
    icon: "✦",
    title: "ভিআইপি সাপোর্ট",
    text: "আমাদের মেম্বারদের জন্য ২৪/৭ টেলিগ্রাম সাপোর্ট।",
  },
  {
    icon: "◇",
    title: "ডেইলি আপডেট",
    text: "প্রতিটি ম্যাচের লাইভ আপডেট এবং প্রেডিকশন।",
  },
  {
    icon: "✧",
    title: "বিশ্বস্ত প্ল্যাটফর্ম",
    text: "হাজারো মানুষের আস্থার একটি নাম 11Xbaaji।",
  },
];

const testimonials = [
  {
    name: "রাকিব হাসান",
    role: "মেম্বার, ঢাকা",
    text: "11Xbaaji এর ফ্রি মাল্টি খেলে আমি অনেক লাভবান হয়েছি। ওদের প্রেডিকশন ৯৯% শিওর থাকে।",
  },
  {
    name: "সাগর আহমেদ",
    role: "মেম্বার, সিলেট",
    text: "আমি অনেক লসে ছিলাম, এদের চ্যানেলে জয়েন করার পর লস কভার করে এখন প্রফিটে আছি।",
  },
  {
    name: "মাহমুদুল করিম",
    role: "মেম্বার, চট্টগ্রাম",
    text: "খুবই ভালো রেসপন্স এবং ফ্রি মাল্টিগুলো সত্যিই দারুণ কাজ করে। ধন্যবাদ 11Xbaaji!",
  },
];

const faqs = [
  {
    q: "মাল্টিগুলো কি সত্যিই ফ্রি?",
    a: "হ্যাঁ, আমাদের চ্যানেলে প্রতিদিন সম্পূর্ণ ফ্রিতে মাল্টি দেওয়া হয়।",
  },
  {
    q: "কিভাবে জয়েন করবো?",
    a: "অ্যাকাউন্ট খুলতে রেজিস্ট্রেশন করুন বাটনে ক্লিক করুন, অথবা এফিলিয়েট হতে এফিলিয়েটে জয়েন করুন বাটনে ক্লিক করুন।",
  },
  {
    q: "নতুনরা কি বুঝতে পারবে?",
    a: "অবশ্যই! আমরা মানি ম্যানেজমেন্ট সহ সব কিছুর সঠিক গাইডলাইন দিয়ে থাকি।",
  },
  {
    q: "সাপোর্ট কতদিন পাওয়া যাবে?",
    a: "লাইফটাইম। টেলিগ্রাম কমিউনিটিতে আপনি সবসময় যুক্ত থাকবেন।",
  },
  {
    q: "উইনিং রেট কেমন?",
    a: "আমাদের অভিজ্ঞ টিমের এনালাইসিসের কারণে উইনিং রেট ৯৯% থাকে।",
  },
];

function Landing() {
  return (
    <div className="aurora-bg relative min-h-screen overflow-hidden font-display">
      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center px-5 py-6">
        <div className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="11Xbaaji logo" className="h-10 w-10 shrink-0 rounded-xl object-contain" />
          <span className="truncate text-xl font-bold tracking-tight">11Xbaaji</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pt-8 pb-20">
        <Reveal className="flex flex-col items-center w-full max-w-md mx-auto">
          {/* Telegram Icon */}
          <div className="w-32 h-32 bg-[#2AABEE] rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(42,171,238,0.4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-16 h-16 -ml-1"
            >
              <path d="M20.9 4.3 17.9 19c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.3-7.5c.4-.3-.1-.5-.6-.2L7.4 13l-4.4-1.4c-1-.3-1-1 .2-1.4l17.2-6.6c.8-.3 1.5.2 1.2 1.7z" />
            </svg>
          </div>

          {/* Text Section */}
          <div className="text-center space-y-3 mb-10">
            <p className="text-xl sm:text-2xl font-semibold">
              প্রতিদিন ফ্রি মাল্টি দেয়া হয় <span className="inline-block text-[#b4eb4a]">✅</span>
            </p>
            <p className="text-xl sm:text-2xl font-semibold leading-snug">
              ফ্রিতে নিতে চাইলে এখনই জয়েন করুন<br />আমাদের ফ্রি চ্যানেলে <span className="inline-block text-[#b4eb4a]">✅</span>
            </p>
            <p className="text-2xl sm:text-3xl font-bold mt-2">
              11Xbaaji <span className="text-red-500">❤️</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full space-y-4">
            <a
              href="https://11xbaaji.live/register"
              className="block w-full bg-[#b4eb4a] text-black font-bold text-center py-4 rounded-xl text-lg hover:brightness-110 transition-all shadow-lg"
            >
              রেজিস্ট্রেশন করুন
            </a>
            <a
              href="https://11xbaaji.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#b4eb4a] text-black font-bold text-center py-4 rounded-xl text-lg hover:brightness-110 transition-all shadow-lg"
            >
              অ্যাপ ইন্সটল করুন
            </a>
            <a
              href="https://11xbaaji.live/Affiliate"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#b4eb4a] text-black font-bold text-center py-4 rounded-xl text-lg hover:brightness-110 transition-all shadow-lg"
            >
              এফিলিয়েটে জয়েন করুন
            </a>
          </div>

          {/* Countdown Section for Hero */}
          <div className="mt-12 w-full text-center">
             <Countdown />
             <p className="text-gray-300 text-sm font-medium text-center mt-6">
                টাইম শেষ হওয়ার আগেই জয়েন করুন
             </p>
          </div>

        </Reveal>

        <Reveal delay={200} className="w-full">
          <div className="glass mt-16 grid grid-cols-2 gap-6 rounded-3xl px-6 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-gradient-gold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            কেন <span className="text-[#b4eb4a]">11Xbaaji</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            শুধু প্রেডিকশন নয় — একটি সম্পূর্ণ গাইডলাইন, যেখানে প্রতিটি ধাপে আমরা আপনার সাথে আছি।
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="glass h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#b4eb4a]/40">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/70 text-xl text-[#b4eb4a]">
                  {b.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">মেম্বারদের অভিজ্ঞতা</h2>
          <p className="mt-4 text-muted-foreground">
            বাস্তব ফলাফলই আমাদের সবচেয়ে বড় পরিচয়।
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass h-full rounded-3xl p-7">
                <div className="text-[#b4eb4a]" aria-label="৫ তারকা রেটিং">
                  ★★★★★
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#b4eb4a]/20 font-bold text-[#b4eb4a]">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{t.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-3xl px-5 py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">সাধারণ জিজ্ঞাসা</h2>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="glass mt-10 rounded-3xl px-5 py-2">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section id="join" className="relative z-10 mx-auto max-w-4xl px-5 pb-24">
        <Reveal>
          <div className="glass rounded-4xl px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              আজই শুরু করুন — <span className="text-[#b4eb4a]">ফ্রি সিট সীমিত</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              আমাদের ফ্রি মাল্টি চ্যানেল যেকোনো মুহূর্তে প্রাইভেট হয়ে যেতে পারে। আপনার জায়গাটি এখনই নিশ্চিত করুন।
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <Countdown />
            </div>
            <a
              href="https://t.me/+V7VKBvC7fllkOWQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#b4eb4a] px-9 py-4 text-sm font-bold text-black transition hover:brightness-110"
            >
              টেলিগ্রাম চ্যানেলে জয়েন করুন
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        © 2026 11Xbaaji. সর্বস্বত্ব সংরক্ষিত।
      </footer>

      {/* Floating Telegram */}
      <a
        href="https://t.me/+V7VKBvC7fllkOWQ1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="টেলিগ্রামে যুক্ত হোন"
        className="animate-glow-pulse fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#b4eb4a] text-black transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M21.9 4.3 18.9 19c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.3-7.5c.4-.3-.1-.5-.6-.2L7.4 13l-4.4-1.4c-1-.3-1-1 .2-1.4l17.2-6.6c.8-.3 1.5.2 1.2 1.7z" />
        </svg>
      </a>
    </div>
  );
}