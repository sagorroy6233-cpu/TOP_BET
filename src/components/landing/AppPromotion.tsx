import {
  ArrowDown,
  ArrowRight,
  Check,
  Download,
  Gamepad2,
  Handshake,
  Headphones,
  ShieldCheck,
  Smartphone,
  Trophy,
  UserRoundPlus,
  Wifi,
} from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.jpg";

const appUrl = "https://11xbaaji.live/";
const registerUrl = "https://11xbaaji.live/register";
const affiliateUrl = "https://11xbaaji.live/Affiliate";

const primaryActions = [
  { label: "অ্যাপ ইনস্টল করুন", href: appUrl, icon: Download },
  { label: "রেজিস্ট্রেশন করুন", href: registerUrl, icon: UserRoundPlus },
  { label: "এফিলিয়েটে জয়েন করুন", href: affiliateUrl, icon: Handshake },
] as const;
const actionButtonClassName =
  "inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-(--app-lime) px-5 text-sm font-bold text-(--app-forest) shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--app-lime)";

const highlights = [
  {
    icon: Wifi,
    number: "01",
    title: "এক নজরে লাইভ খেলা",
    text: "চলতি ম্যাচ ও খেলার আপডেট দেখুন একটি পরিষ্কার, সহজে ব্যবহারযোগ্য স্ক্রিনে।",
  },
  {
    icon: Gamepad2,
    number: "02",
    title: "আপনার পছন্দের স্পোর্টস",
    text: "জনপ্রিয় খেলাগুলো ঘুরে দেখুন এবং নিজের পছন্দের ম্যাচে দ্রুত পৌঁছে যান।",
  },
  {
    icon: Headphones,
    number: "03",
    title: "সহজ সহায়তা",
    text: "অ্যাকাউন্ট বা অ্যাপ ব্যবহারে সহায়তা দরকার হলে সাপোর্টের সঙ্গে যোগাযোগ করুন।",
  },
];

const steps = [
  { number: "01", title: "অফিশিয়াল সাইটে যান", text: "ইনস্টল বাটনে ট্যাপ করে 11xbaaji-তে প্রবেশ করুন।" },
  { number: "02", title: "অ্যাপ ইনস্টল করুন", text: "সাইটের নির্দেশনা অনুসরণ করে আপনার ডিভাইসে অ্যাপ সেট আপ করুন।" },
  { number: "03", title: "অ্যাকাউন্টে প্রবেশ করুন", text: "নতুন হলে রেজিস্ট্রেশন করে শুরু করুন, অথবা আপনার অ্যাকাউন্টে লগ ইন করুন।" },
];

function InstallLink({
  className = "",
  children = "অ্যাপ ইনস্টল করুন",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={appUrl} target="_blank" rel="noopener noreferrer" className={className}>
      <Download aria-hidden="true" size={18} />
      {children}
    </a>
  );
}

function ActionButton({
  action,
  className = actionButtonClassName,
}: {
  action: (typeof primaryActions)[number];
  className?: string;
}) {
  const Icon = action.icon;

  return (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
      <Icon aria-hidden="true" size={18} />
      {action.label}
    </a>
  );
}

function ActionButtons({ className }: { className: string }) {
  return (
    <div className={className}>
      {primaryActions.map((action) => (
        <ActionButton key={action.label} action={action} />
      ))}
    </div>
  );
}

export function AppPromotion() {
  return (
    <main className="min-h-screen overflow-hidden bg-(--app-paper) text-(--app-ink)">
      <section className="app-hero relative isolate overflow-hidden text-white">
        <div className="app-hero-lines pointer-events-none absolute inset-0 -z-10" />
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="11xbaaji হোম" className="shrink-0">
            <img src={logo} alt="11xbaaji" className="h-16 w-16 object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex" aria-label="প্রধান নেভিগেশন">
            <a className="transition hover:text-white" href="#features">অ্যাপের সুবিধা</a>
            <a className="transition hover:text-white" href="#get-started">যেভাবে শুরু করবেন</a>
            <a className="transition hover:text-white" href="#faq">প্রশ্নোত্তর</a>
          </nav>
          <InstallLink className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-(--app-lime) px-4 text-sm font-bold text-(--app-forest) transition hover:bg-white sm:px-5">
            <span className="hidden sm:inline">অ্যাপ ইনস্টল করুন</span>
            <span className="sm:hidden">ইনস্টল</span>
          </InstallLink>
        </header>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:px-12 lg:pb-28 lg:pt-16">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-(--app-lime)">
              <span className="h-2 w-2 rounded-full bg-(--app-lime)" /> 11xbaaji mobile app
            </p>
            <h1 className="max-w-[12ch] text-5xl font-bold leading-[1.16] sm:text-6xl lg:text-7xl">
              খেলার দুনিয়া<br /><span className="text-(--app-lime)">এখন হাতের</span><br />মুঠোয়।
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
              আপনার পছন্দের স্পোর্টস, লাইভ ম্যাচের আপডেট আর সহজ অ্যাকাউন্ট অ্যাক্সেস একসঙ্গে পান 11xbaaji অ্যাপে।
            </p>
            <ActionButtons className="mt-9 grid max-w-sm gap-3" />
            <p className="mt-5 flex items-center gap-2 text-xs text-white/50">
              <ShieldCheck aria-hidden="true" size={15} /> কেবল ১৮ বছর বা তার বেশি বয়সীদের জন্য
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-102.5">
            <div className="absolute -left-8 top-24 hidden h-24 w-24 rotate-12 border border-(--app-lime)/30 sm:block" />
            <div className="absolute -right-5 bottom-20 hidden h-16 w-16 -rotate-12 border border-white/20 sm:block" />
            <div className="phone-frame relative mx-auto w-[min(100%,310px)] rounded-[2.8rem] p-1.75">
              <div className="phone-screen relative overflow-hidden rounded-[2.3rem]">
                <div className="flex items-center justify-between px-5 pb-3 pt-4 text-[10px] font-semibold text-(--app-ink)">
                  <span>9:41</span>
                  <span className="flex items-center gap-1"><Wifi size={12} /><span className="h-2 w-4 rounded-sm border border-current" /></span>
                </div>
                <div className="flex items-center justify-between px-5 pb-4">
                  <div className="flex items-center gap-2"><img src={logo} alt="" className="h-8 w-8 rounded-lg object-contain" /><span className="text-sm font-extrabold text-(--app-forest)">11xbaaji</span></div>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-(--app-lime)/25 text-(--app-forest)"><Smartphone size={15} /></span>
                </div>
                <div className="mx-4 rounded-2xl bg-(--app-forest) p-4 text-white">
                  <p className="text-[10px] font-semibold text-white/60">আজকের খেলা</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-bold">ARS</span><span className="mt-1 block text-[9px]">আর্সেনাল</span></div>
                    <div className="text-center"><span className="rounded-full bg-[#ee7257] px-2 py-1 text-[8px] font-bold uppercase tracking-wider">লাইভ</span><p className="mt-2 text-lg font-bold">2 : 1</p><p className="text-[9px] text-white/55">৬৩ মিনিট</p></div>
                    <div className="text-center"><span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs font-bold">CHE</span><span className="mt-1 block text-[9px]">চেলসি</span></div>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-5">
                  <div className="flex items-center justify-between"><h2 className="text-sm font-bold text-(--app-ink)">জনপ্রিয় ম্যাচ</h2><span className="text-[9px] font-bold text-(--app-forest)">সব দেখুন <ArrowRight className="ml-1 inline" size={10} /></span></div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between rounded-xl border border-(--app-line) bg-white px-3 py-3"><div><p className="text-[9px] text-(--app-muted)">ফুটবল · আজ ৮:৩০</p><p className="mt-1 text-[11px] font-bold">রিয়াল মাদ্রিদ · বার্সেলোনা</p></div><ArrowRight size={14} className="text-(--app-forest)" /></div>
                    <div className="flex items-center justify-between rounded-xl border border-(--app-line) bg-white px-3 py-3"><div><p className="text-[9px] text-(--app-muted)">ক্রিকেট · আজ ৯:০০</p><p className="mt-1 text-[11px] font-bold">বাংলাদেশ · ভারত</p></div><ArrowRight size={14} className="text-(--app-forest)" /></div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 border-t border-(--app-line) pt-3 text-center text-[8px] font-semibold text-(--app-muted)"><span className="text-(--app-forest)">হোম</span><span>খেলা</span><span>অ্যাকাউন্ট</span></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold text-(--app-forest) shadow-xl sm:-left-10">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-(--app-lime)"><Check size={15} /></span> মোবাইলে সহজ অভিজ্ঞতা
            </div>
          </div>
        </div>
        <a href="#features" className="mx-auto flex w-fit items-center gap-2 pb-8 text-xs font-semibold text-white/50 transition hover:text-white">আরও জানুন <ArrowDown aria-hidden="true" size={14} /></a>
      </section>

      <section className="border-b border-(--app-line) bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-(--app-line) px-5 py-1 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-12">
          {[["স্পোর্টস", "একাধিক খেলার বিভাগ"], ["লাইভ", "ম্যাচের আপডেট"], ["মোবাইল", "সহজে ব্যবহারযোগ্য"], ["সাপোর্ট", "প্রয়োজনে সহায়তা"]].map(([label, detail]) => (
            <div key={label} className="px-4 py-5 text-center sm:px-6"><p className="text-sm font-extrabold text-(--app-forest) sm:text-base">{label}</p><p className="mt-1 text-xs text-(--app-muted)">{detail}</p></div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--app-forest)">আপনার অ্যাপ, আপনার খেলা</p>
            <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight sm:text-5xl">যা দরকার, সবই <span className="text-(--app-forest)">এক জায়গায়।</span></h2>
            <p className="mt-5 max-w-md text-base leading-7 text-(--app-muted)">11xbaaji অ্যাপ এমনভাবে সাজানো, যাতে খেলা খুঁজে পাওয়া ও আপনার অ্যাকাউন্টে যাওয়া থাকে সহজ এবং স্বচ্ছন্দ।</p>
            <p className="mt-7 max-w-md text-sm font-semibold leading-6 text-(--app-forest)">
              আপনার প্রয়োজনীয় ম্যাচ ও অ্যাকাউন্টের তথ্য এক জায়গায় গুছিয়ে দেখুন।
            </p>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return <article key={item.number} className="border-t border-(--app-line) py-6 sm:px-5 first:sm:pl-0 last:sm:col-span-2"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-full bg-(--app-lime)/35 text-(--app-forest)"><Icon size={20} /></span><span className="text-xs font-bold tabular-nums text-(--app-muted)">{item.number}</span></div><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-(--app-muted)">{item.text}</p></article>;
            })}
          </div>
          <ActionButtons className="mt-10 grid gap-3 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3" />
        </div>
      </section>

      <section id="get-started" className="bg-(--app-sand)">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div className="max-w-md"><p className="text-xs font-bold uppercase tracking-[0.18em] text-(--app-forest)">শুরু করা সহজ</p><h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">কয়েকটি ধাপেই <span className="text-(--app-forest)">শুরু করুন।</span></h2><p className="mt-5 text-base leading-7 text-(--app-muted)">অফিশিয়াল সাইট থেকে অ্যাপ ইনস্টল করে আপনার ডিভাইসেই ব্যবহার শুরু করুন।</p></div>
          <div className="border-t border-(--app-line)">{steps.map((step) => <div key={step.number} className="grid grid-cols-[52px_1fr] gap-4 border-b border-(--app-line) py-6 sm:grid-cols-[72px_1fr] sm:gap-6 sm:py-7"><span className="pt-1 text-sm font-bold tabular-nums text-(--app-forest)">{step.number}</span><div><h3 className="text-lg font-bold">{step.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-(--app-muted)">{step.text}</p></div></div>)}</div>
          <ActionButtons className="mt-10 grid gap-3 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3" />
        </div>
      </section>

      <section id="affiliate" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative grid items-center gap-8 overflow-hidden bg-(--app-forest) px-6 py-12 text-white sm:px-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_auto] lg:px-16">
          <div className="pointer-events-none absolute inset-y-0 right-[32%] hidden border-l border-white/10 md:block" aria-hidden="true" />
          <div className="relative max-w-2xl"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-(--app-lime)"><Trophy size={15} /> পার্টনার প্রোগ্রাম</p><h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">11xbaaji-এর সঙ্গে এফিলিয়েট পার্টনার হোন।</h2><p className="mt-4 max-w-lg text-sm leading-7 text-white/70">প্রোগ্রামের শর্ত, প্রয়োজনীয় তথ্য এবং যোগদানের ধাপ জানতে অফিসিয়াল এফিলিয়েট পেজটি দেখুন।</p></div>
          <ActionButton action={primaryActions[2]} className={`${actionButtonClassName} relative md:min-w-64`} />
        </div>
      </section>

      <section className="bg-(--app-sand) px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--app-forest)">দায়িত্বশীল ব্যবহার</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">বিনোদন থাকুক <span className="text-(--app-forest)">নিয়ন্ত্রণে।</span></h2>
            <p className="mt-5 text-base leading-7 text-(--app-muted)">খেলাকে বিনোদন হিসেবে নিন, আয়ের নিশ্চয়তা হিসেবে নয়। নিজের সীমা ঠিক রাখুন এবং প্রয়োজন হলে বিরতি নিন।</p>
            <a href="#faq" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-(--app-forest)/20 px-5 text-sm font-bold text-(--app-forest) transition hover:bg-white">
              নিরাপদ ব্যবহারের তথ্য <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="border-t border-(--app-line)">
            {[
              "শুধুমাত্র ১৮ বছর বা তার বেশি বয়স হলে ব্যবহার করুন।",
              "আগে থেকেই সময় ও খরচের সীমা ঠিক করে নিন।",
              "ক্ষতি পুষিয়ে নিতে আবার খেলা চালিয়ে যাবেন না।",
            ].map((tip, index) => (
              <div key={tip} className="grid grid-cols-[40px_1fr] gap-4 border-b border-(--app-line) py-5 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-bold text-(--app-forest)">{index + 1}</span>
                <p className="pt-1 text-sm font-semibold leading-6 text-(--app-ink)">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--app-forest)">সাহায্য ও তথ্য</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">সাধারণ কিছু <span className="text-(--app-forest)">প্রশ্ন।</span></h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-(--app-muted)">অ্যাপ ব্যবহার শুরুর আগে প্রয়োজনীয় তথ্য এখানে দেখে নিন।</p>
          </div>
          <div className="border-t border-(--app-line)">
            {[
              ["অ্যাপ কোথা থেকে ইনস্টল করব?", "উপরের অ্যাপ ইনস্টল করুন বাটনে ট্যাপ করুন। এটি 11xbaaji-এর অফিসিয়াল সাইটে নিয়ে যাবে; সেখানকার নির্দেশনা অনুসরণ করুন।"],
              ["নতুন অ্যাকাউন্ট কীভাবে খুলব?", "রেজিস্ট্রেশন করুন বাটনে ট্যাপ করে অফিসিয়াল রেজিস্ট্রেশন পেজে যান এবং সেখানে দেওয়া ধাপগুলো অনুসরণ করুন।"],
              ["এফিলিয়েট প্রোগ্রামে কীভাবে যোগ দেব?", "এফিলিয়েটে জয়েন করুন বাটন থেকে অফিসিয়াল এফিলিয়েট পেজে যান। যোগদানের শর্ত ও বিস্তারিত সেখানে দেখুন।"],
            ].map(([question, answer]) => (
              <details key={question} className="group border-b border-(--app-line)">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-bold marker:hidden sm:py-6">
                  {question}
                  <ArrowDown aria-hidden="true" size={17} className="shrink-0 text-(--app-forest) transition group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-(--app-muted) sm:pb-6">{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <ActionButtons className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" />
      </section>

      <footer className="border-t border-(--app-line) bg-white px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><img src={logo} alt="11xbaaji" className="h-14 w-14 object-contain" /><p className="max-w-2xl text-xs leading-6 text-(--app-muted)">১৮+। দায়িত্বশীলভাবে খেলুন। স্থানীয় আইন ও নিয়ম মেনে চলুন। জুয়া আর্থিক ঝুঁকির কারণ হতে পারে।</p><a href={appUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-(--app-forest) hover:underline">অফিশিয়াল সাইট <ArrowRight className="ml-1 inline" size={13} /></a></div>
        <p className="mx-auto mt-6 max-w-7xl text-center text-[11px] text-(--app-muted)">© 2026 11xbaaji</p>
      </footer>
    </main>
  );
}