// components/Ritual.jsx
import { Gem, Leaf, Droplet, Car } from "lucide-react";

const promises = [
  {
    icon: Gem,
    title: "Premium Fragrances",
    body: "Extrait de parfum concentration for a rich, true-to-character scent that never feels synthetic.",
  },
  {
    icon: Leaf,
    title: "Toxin Free",
    body: "A cleaner formula for the closed space you breathe in every day.",
  },
  {
    icon: Droplet,
    title: "Alcohol Free",
    body: "No sharp alcohol bite, just a smooth, steady diffusion through the natural wood cap.",
  },
  {
    icon: Car,
    title: "Made for Your Journeys",
    body: "Sized and shaped to hang beautifully from your mirror, from city commutes to long highways.",
  },
];

const steps = [
  ["Hang", "Loop the braided cord around your rear-view mirror and let the bottle rest freely."],
  ["Tilt", "Gently tip the bottle so the perfume kisses the wooden cap, then let it settle."],
  ["Drive", "The wood diffuses a soft, steady trail. Tilt again whenever you crave more."],
];

export function Ritual() {
  return (
    <section id="ritual" className="bg-[#fcfbf9] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[#8f6e28]">The CARसा Promise</p>
          <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-neutral-900">
            Crafted with care, <em className="italic">worn on the road.</em>
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-[#e7e0d3] bg-[#e7e0d3] sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div
              key={p.title}
              className="group bg-white p-10 transition-colors duration-500 hover:bg-[#f4ede2]"
            >
              <p.icon className="h-7 w-7 text-[#8f6e28]" strokeWidth={1} />
              <h3 className="font-display mt-10 text-2xl text-neutral-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-[#8f6e28]">The Ritual</p>
            <h3 className="font-display mt-6 text-4xl font-normal leading-tight sm:text-5xl text-neutral-900">
              Three gestures to a <em className="italic">better drive.</em>
            </h3>
          </div>
          <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {steps.map(([t, b], i) => (
              <li key={t} className="border-t border-neutral-900 pt-6">
                <span className="font-display text-6xl font-normal text-[#b38b36]">0{i + 1}</span>
                <h4 className="eyebrow mt-6 text-neutral-900">{t}</h4>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
