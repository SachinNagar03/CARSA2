
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./ShopCta.css";

export function ShopCta() {
  return (
    <section id="shop" className="shop-cta">
      <div className="shop-cta-container">
        <div className="shop-cta-card">
          <div className="shop-cta-content">
            <p className="shop-cta-eyebrow">Now Available</p>

            <h2 className="shop-cta-title">
              Your next drive deserves{" "}
              <em className="shop-cta-gold-text">a signature.</em>
            </h2>

            <p className="shop-cta-description">
              Choose your mood from Fresh, Opium, Oud and Aqua, and turn
              every journey into a memory worth keeping.
            </p>

            <a href="#collection" className="shop-cta-button">
              Shop the Collection
              <ArrowRight
                className="shop-cta-button-icon"
                strokeWidth={1.5}
              />
            </a>
          </div>

          <div className="shop-cta-visual">
            <div className="shop-cta-circle">
              <div className="shop-cta-image-wrapper">
                <Image
                  src="/images/carsa_oud.png"
                  alt="CARसा bottle"
                  width={500}
                  height={800}
                  priority
                  className="shop-cta-bottle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
