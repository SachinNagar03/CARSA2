// app/page.jsx
import { Navbar } from "../components/Navbar";
import  Hero  from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Collection } from "../components/Collection";
import { Ritual } from "../components/Ritual";
import { Story } from "../components/Story";
import { Reviews } from "../components/Reviews";
import { ShopCta } from "../components/ShopCta";
import { Footer } from "../components/Footer";
import { FloatingCartButton, CartDrawer } from "../components/CartDrawer";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "CARसा Fragrances — Luxury Car Perfumes | Make Your Car Smell Like Luxury",
  description:
    "CARसा luxury car perfumes: Fresh, Opium, Oud and Aqua. Extrait de parfum, toxin free and alcohol free, made for your journeys. Shop online now.",
};

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Collection />
          <Ritual />
          <Story />
          <Reviews />
          <ShopCta />
        </main>
        <Footer />
        <FloatingCartButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
