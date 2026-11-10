// components/Reviews.jsx
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Opium completely changed how my car feels at night. Warm, sweet and so classy. Friends ask about it every time they sit in.",
    name: "Riya M.",
    place: "Mumbai",
    scent: "Opium",
  },
  {
    quote:
      "Finally a car perfume that doesn't give me a headache. Oud is deep and elegant, and the bottle looks stunning on my mirror.",
    name: "Arjun S.",
    place: "Delhi",
    scent: "Oud",
  },
  {
    quote:
      "Aqua is like rolling the windows down by the sea. Fresh without being sharp. My daily drive is genuinely better.",
    name: "Neha K.",
    place: "Bengaluru",
    scent: "Aqua",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[#f4ede2] py-24 lg:py-36">
      <span
        className="font-display pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 select-none text-[22rem] leading-none text-[#b38b36]/10"
        aria-hidden
      >
        “
      </span>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow text-[#8f6e28]">Kind Words</p>
          <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900">
            Loved on <em className="italic">every road.</em>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-1 text-[#b38b36]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col justify-between bg-white p-10 shadow-soft border border-[#e7e0d3]"
            >
              <div>
                <div className="flex gap-1 text-[#b38b36]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display mt-8 text-2xl leading-snug text-neutral-900">“{r.quote}”</p>
              </div>
              <div className="mt-10 flex items-end justify-between border-t border-[#e7e0d3] pt-6">
                <div>
                  <p className="text-sm font-medium text-neutral-900">{r.name}</p>
                  <p className="eyebrow mt-1 text-neutral-400">{r.place}</p>
                </div>
                <p className="font-display text-xl italic text-[#8f6e28]">{r.scent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
