
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
              className="group flex h-full flex-col border border-[#e7e0d3] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a66b] hover:shadow-[0_15px_40px_rgba(80,60,30,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[5/4] overflow-hidden bg-[#faf8f5]">

                <Image
                  src={s.image}
                  alt={`CARसा ${s.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Minimal Discount Tag */}
                <span className="absolute left-3 top-3 border border-[#d8c49b] bg-[#faf8f5]/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8f6e28]">
                  30% OFF
                </span>

                <span
                  className={`absolute right-3 top-3 h-2.5 w-2.5 rounded-full ring-4 ring-white ${s.bgClass}`}
                  aria-hidden="true"
                />
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col p-5">

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`font-display text-2xl italic leading-tight ${s.textClass}`}
                    >
                      {s.name}
                    </h3>

                    <p className="mt-1 text-xs text-neutral-500">
                      {s.mood}
                    </p>
                  </div>

                  {/* Minimal Pricing */}
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

                <p className="mt-3 text-xs text-neutral-700">
                  <span className="text-neutral-400">Inspired by </span>
                  <span className="font-medium">{s.inspiredBy}</span>
                </p>

                {/* Notes */}
                <div className="mt-4 border-t border-[#e7e0d3] pt-4">
                  <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                    Key Notes
                  </p>

                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {s.notes.map((n) => (
                      <li
                        key={n}
                        className="border border-[#e7e0d3] bg-[#faf8f5] px-2.5 py-1 text-[10px] text-neutral-700"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-auto pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      addToCart({
                        ...s,
                        price: offerPrice,
                      })
                    }
                    className="eyebrow w-full border border-neutral-900 bg-neutral-900 py-3.5 text-center text-white transition-all duration-300 hover:border-[#8f6e28] hover:bg-[#8f6e28]"
                  >
                    Add to Cart · ₹{offerPrice}
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
