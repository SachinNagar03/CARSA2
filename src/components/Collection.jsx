
"use client";

import Image from "next/image";
import { scents } from "@/data/scents";
import { useCart } from "@/context/CartContext";

export function Collection() {
  const { addToCart } = useCart();

  const originalPrice = 500;
  const offerPrice = 419;

  return (
    <section id="collection" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-4 text-[#8f6e28]">
              <span className="h-px w-10 bg-[#b38b36]" />
              Shop the Collection
            </p>

            <h2 className="font-display mt-5 text-4xl font-normal leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Four moods. <em className="italic">One signature.</em>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-relaxed text-neutral-600 lg:text-right">
            Every bottle is a 10 ml extrait de parfum, toxin free and
            alcohol free. Pick the mood that matches your drive.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {scents.map((s) => (
            <article
              key={s.id}
              className="group relative flex h-full flex-col overflow-hidden border border-[#e7e0d3] bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#c5a66b] hover:shadow-[0_20px_50px_rgba(80,60,30,0.12)]"
            >
              {/* Top Gold Accent */}
              <span className="absolute left-0 top-0 z-20 h-[2px] w-0 bg-gradient-to-r from-[#8f6e28] via-[#d8bd7c] to-[#8f6e28] transition-all duration-700 group-hover:w-full" />

              {/* Product Image */}
              <div className="relative aspect-[5/4] overflow-hidden bg-[#faf8f5]">

                <Image
                  src={s.image}
                  alt={`CARसा ${s.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17130d]/10 via-transparent to-white/10 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Discount Tag */}
                <span className="absolute left-3 top-3 border border-[#d8c49b] bg-[#faf8f5]/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8f6e28] shadow-sm transition-all duration-300 group-hover:bg-[#8f6e28] group-hover:text-white">
                  30% OFF
                </span>

                {/* Fragrance Color */}
                <span
                  className={`absolute right-3 top-3 h-2.5 w-2.5 rounded-full ring-4 ring-white shadow-sm ${s.bgClass}`}
                  aria-hidden="true"
                />

                {/* Bottom Image Label */}
                <div className="absolute bottom-3 left-3">
                  <span className="border border-white/40 bg-black/30 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    CARसा · Extrait
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col p-5">

                {/* Name and Price */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`font-display text-2xl italic leading-tight transition-colors duration-300 group-hover:text-[#8f6e28] ${s.textClass}`}
                    >
                      {s.name}
                    </h3>

                    {/* Animated Gold Underline */}
                    <span className="mt-2 block h-px w-7 bg-[#c5a66b] transition-all duration-500 group-hover:w-14" />

                    <p className="mt-2 text-xs text-neutral-500">
                      {s.mood}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="shrink-0 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{originalPrice}
                      </span>

                      <span className="text-lg font-medium text-neutral-900">
                        ₹{offerPrice}
                      </span>
                    </div>

                    <p className="mt-0.5 text-[10px] text-neutral-400">
                      Inclusive of all taxes
                    </p>
                  </div>
                </div>

                {/* Inspired By */}
                <p className="mt-4 text-xs text-neutral-700">
                  <span className="text-neutral-400">Inspired by </span>
                  <span className="font-medium">{s.inspiredBy}</span>
                </p>

                {/* Fragrance Notes */}
                <div className="mt-4 border-t border-[#e7e0d3] pt-4">
                  <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                    Key Notes
                  </p>

                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {s.notes.map((n) => (
                      <li
                        key={n}
                        className="border border-[#e7e0d3] bg-[#faf8f5] px-2.5 py-1 text-[10px] text-neutral-700 transition-all duration-300 hover:border-[#c5a66b] hover:bg-[#f5efdf] hover:text-[#8f6e28]"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart */}
                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() =>
                      addToCart({
                        ...s,
                        price: offerPrice,
                      })
                    }
                    className="eyebrow group/btn relative w-full overflow-hidden border border-neutral-900 bg-neutral-900 py-3.5 text-center text-white transition-all duration-500 hover:border-[#8f6e28] hover:text-white"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-[#8f6e28] transition-transform duration-500 ease-out group-hover/btn:translate-x-0" />

                    <span className="relative z-10">
                      Add to Cart <span className="mx-1">·</span> ₹{offerPrice}
                    </span>
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
