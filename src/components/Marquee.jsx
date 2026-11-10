// components/Marquee.jsx
export function Marquee() {
  const items = [
    "100% Toxin Free",
    "Alcohol Free",
    "Natural Wooden Cap Diffusion",
    "Extrait de Parfum",
    "Handcrafted Scent Profiles",
    "Fits All Rear-View Mirrors",
  ];

  return (
    <div className="overflow-hidden border-y border-[#e7e0d3] bg-[#f4ede2] py-4">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((text, i) => (
          <span key={i} className="eyebrow flex items-center gap-12 text-neutral-800 font-medium">
            <span>{text}</span>
            <span className="text-[#b38b36]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
