// components/Story.jsx
import Image from "next/image";

export function Story() {
  return (
    <section id="story" className="py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="relative lg:col-span-7">
          <div className="overflow-hidden border border-[#e7e0d3]">
            <Image
              src="/images/oud_interior.jpg"
              alt="CARसा perfume in car interior"
              width={1600}
              height={1066}
              className="aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 right-6 hidden max-w-[15rem] bg-white p-7 shadow-soft sm:block lg:-right-8">
            <p className="font-display text-2xl italic leading-snug text-neutral-900">
              “Your car should feel like an extension of you.”
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-4 text-[#8f6e28]">
            <span className="h-px w-10 bg-[#b38b36]" />
            Our Story
          </p>
          <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-neutral-900">
            Cars. Moods. <em className="italic">Memories.</em>
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-neutral-600">
            <p>
              CARसा was born from a simple feeling: the best memories often happen on the road.
              The late-night drive home, the morning commute with your favourite track, the road trip with people you cherish.
            </p>
            <p>
              Scent is the sense most deeply tied to memory, yet car fragrances were always an afterthought.
              We created CARसा to bring the timeless elegance of fine perfumery into your car cabin, in a bottle crafted to be admired.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <span className="font-display text-gold-gradient text-6xl italic">सा</span>
            <p className="max-w-[16rem] text-sm text-neutral-600">
              An Indian soul, a global palette. Luxury that travels with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
