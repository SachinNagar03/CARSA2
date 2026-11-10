// components/Footer.jsx
import Image from "next/image";
import { scents } from "@/data/scents";

export function Footer() {
  return (
    <footer className="border-t border-[#e7e0d3] bg-[#faf8f5] pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Image src="/images/carsa_logo.png" alt="CARसा Fragrances" width={140} height={55} className="h-14 w-auto" />
          <p className="eyebrow mt-6 text-neutral-500">Cars · Moods · Memories</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600">
            Luxury car perfumes in extrait de parfum concentration. Toxin free, alcohol free and made for your journeys.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="eyebrow text-neutral-900">Collection</p>
            <ul className="mt-6 space-y-3">
              {scents.map((s) => (
                <li key={s.id}>
                  <a href="#collection" className="font-display text-xl italic text-neutral-500 transition-colors hover:text-neutral-900">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-neutral-900">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["#ritual", "The Ritual"],
                ["#story", "Our Story"],
                ["#reviews", "Reviews"],
                ["#collection", "Shop"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-neutral-500 transition-colors hover:text-neutral-900">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-neutral-900">The Promise</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-500">
              <li>Premium Fragrances</li>
              <li>Toxin Free</li>
              <li>Alcohol Free</li>
              <li>10 ml Extrait de Parfum</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl overflow-hidden px-6 lg:px-10">
        <p className="font-display select-none text-center text-[18vw] font-normal leading-[0.8] tracking-tight text-neutral-900/[0.05] lg:text-[13rem]">
          CARसा
        </p>
      </div>

      <div className="border-t border-[#e7e0d3]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-neutral-500 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} CARसा Fragrances. All rights reserved.</p>
          <p className="eyebrow">Make your car smell like luxury</p>
        </div>
      </div>
    </footer>
  );
}
