
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import "./hero.css";

export function Hero() {
  return (
    <section id="top" className="hero">

      {/* Background Decoration */}
      <div className="hero-bg-decoration" />

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Cars · Moods · Memories
          </p>

          <h1 className="hero-title">
            Make every
            <br />
            drive{" "}
            <em className="hero-gold-text">smell</em>
            <br />
            <em>like luxury.</em>
          </h1>

          <p className="hero-description">
            Extrait de parfum in crystal-clear glass, crowned with natural wood.
            Four signature moods, crafted for the one place you spend the most
            time alone with yourself.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#collection" className="hero-btn hero-btn-primary">
              Shop the Collection
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>

            <a href="#story" className="hero-btn hero-btn-secondary">
              Our Story
            </a>

          </div>

          {/* Product Details */}
          <dl className="hero-details">

            {[
              ["10 ml", "Extrait de parfum"],
              ["0%", "Alcohol"],
              ["0%", "Toxins"],
            ].map(([value, label]) => (
              <div className="hero-detail-item" key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}

          </dl>

        </div>

        {/* Right Product Image */}
        <div className="hero-product">

          <div className="hero-product-frame">

            {/* Champagne Background */}
            <div className="hero-champagne-arch" />

            {/* Outer Border */}
            <div className="hero-outer-border" />

            {/* Inner Decorative Circle */}
            <div className="hero-inner-circle" />

            {/* Product Image */}
            <div className="hero-image-clip">

              <div className="hero-image-animation">

                <Image
                  src="/images/oud-bottle-cutout.png"
                  alt="CARसा Oud car perfume bottle"
                  width={724}
                  height={1216}
                  priority
                  sizes="(max-width: 768px) 90vw, 450px"
                  className="hero-bottle"
                />

              </div>

            </div>

            {/* Signature Label */}
            <div className="hero-signature-label">

              <p className="hero-label-heading">
                Signature
              </p>

              <p className="hero-label-title">
                Oud
              </p>

            </div>

            {/* Key Notes Label */}
            <div className="hero-notes-label">

              <p className="hero-label-heading">
                Key notes
              </p>

              <p className="hero-notes-text">
                Oud · Amber · Sandalwood
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#collection" className="hero-scroll">

        Scroll

        <ArrowDown
          size={14}
          strokeWidth={1.25}
          className="hero-scroll-icon"
        />

      </a>

    </section>
  );
}
