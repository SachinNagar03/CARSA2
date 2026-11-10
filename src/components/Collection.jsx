// components/Collection.jsx
"use client";

import Image from "next/image";
import { scents } from "@/data/scents";
import { useCart } from "@/context/CartContext";

export function Collection() {
  const { addToCart } = useCart();

  return (
    <section id="collection" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-4 text-[#8f6e28]">
              <span className="h-px w-10 bg-[#b38b36]" />
              Shop the Collection
            </p>
            <h2 className="font-display mt-5 text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl text-neutral-900">
              Four moods. <em className="italic">One signature.</em>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-neutral-600 lg:text-right">
            Every bottle is a 10 ml extrait de parfum, toxin free and alcohol free. Pick the mood that matches your drive.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {scents.map((s) => (
            <article
              key={s.id}
              className="group flex h-full flex-col border border-[#e7e0d3] bg-white transition-all duration-500 hover:shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#faf8f5]">
                <Image
                  src={s.image}
                  alt={`CARसा ${s.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 h-2.5 w-2.5 rounded-full ring-4 ring-white ${s.bgClass}`}
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`font-display text-3xl italic leading-none ${s.textClass}`}>
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">{s.mood}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold text-neutral-900">₹{s.price}</p>
                    <p className="text-xs text-neutral-400">{s.size}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-neutral-800">
                  <span className="text-neutral-400">Inspired by </span>
                  <span className="font-medium">{s.inspiredBy}</span>
                </p>

                <div className="mt-5 border-t border-[#e7e0d3] pt-5">
                  <p className="eyebrow text-neutral-400">Key notes</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.notes.map((n) => (
                      <li
                        key={n}
                        className="rounded-full bg-[#faf8f5] px-3 py-1 text-xs font-medium text-neutral-700 border border-[#e7e0d3]"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => addToCart(s)}
                    className="eyebrow w-full border border-neutral-900 bg-neutral-900 py-4 text-center text-white transition-all duration-300 hover:bg-[#8f6e28] hover:border-[#8f6e28]"
                  >
                    Add to Cart · ₹{s.price}
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
