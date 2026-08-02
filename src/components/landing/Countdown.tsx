import { useEffect, useState } from "react";

const DAY = 24 * 60 * 60 * 1000;

function remaining() {
  return DAY - (Date.now() % DAY);
}

const labels = ["ঘণ্টা", "মিনিট", "সেকেন্ড"];

export function Countdown() {
  const [ms, setMs] = useState(DAY);

  useEffect(() => {
    setMs(remaining());
    const id = setInterval(() => setMs(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const total = Math.floor(ms / 1000);
  const parts = [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60];

  return (
    <div className="glass rounded-3xl p-5 sm:p-6">
      <p className="text-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        অফার শেষ হতে বাকি
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {parts.map((value, i) => (
          <div
            key={labels[i]}
            className="rounded-2xl border border-border bg-secondary/50 px-2 py-4 text-center"
          >
            <div className="font-display text-3xl font-bold tabular-nums text-gradient-gold sm:text-4xl">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">{labels[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
