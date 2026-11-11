import React from "react";
import "./hero.css";

/**
 * CARसा Luxury Hero Component (Next.js / React)
 * 100% matched to design - pure CSS (no Tailwind, no CSS modules).
 * 
 * Images: expects marble and bottle in your Next.js /public folder:
 * - /marble.jpg (or /navy-gold-marble.jpg)
 * - /bottle.png (or /oud-bottle-cutout.png)
 * You can also pass custom image paths via props.
 */
export default function Hero() {
  return (
    <section id="top" className="carsa-hero">
      {/* Liquid marble background texture */}
      <img
        src="/images/navy-gold-marble.jpg"
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="carsa-hero-bg-marble"
      />

      {/* Vertical navy scrim overlay */}
      <div aria-hidden="true" className="carsa-hero-scrim-vertical" />

      {/* Horizontal veil overlay (denser on copy, luminous on bottle) */}
      <div aria-hidden="true" className="carsa-hero-scrim-horizontal" />

      {/* Main Grid Container */}
      <div className="carsa-hero-container">
        {/* Left Column: Copy */}
        <div className="carsa-hero-copy">
          <p className="carsa-eyebrow carsa-hero-eyebrow">
            <span className="carsa-hero-eyebrow-line" />
            Cars <span className="carsa-text-gold">·</span> Moods{" "}
            <span className="carsa-text-gold">·</span> Memories
          </p>

          <h1 className="carsa-hero-title">
            Make every
            <br />
            drive <em className="carsa-text-gold-gradient">smell</em>
            <br />
            <em>like luxury.</em>
          </h1>

          <p className="carsa-hero-desc">
            Extrait de parfum in crystal-clear glass, crowned with natural wood.
            Four signature moods, crafted for the one place you spend the most
            time alone with yourself.
          </p>

          <div className="carsa-hero-actions">
            <a href="#collection" className="carsa-btn carsa-btn-primary">
              <span>Shop the Collection</span>
              <svg
                className="carsa-btn-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a href="#story" className="carsa-btn carsa-btn-secondary">
              Our Story
            </a>
          </div>

          <dl className="carsa-hero-specs">
            <div className="carsa-spec-item">
              <dt className="carsa-spec-value">10 ml</dt>
              <dd className="carsa-eyebrow carsa-spec-label">
                Extrait de parfum
              </dd>
            </div>
            <div className="carsa-spec-item">
              <dt className="carsa-spec-value">0%</dt>
              <dd className="carsa-eyebrow carsa-spec-label">Alcohol</dd>
            </div>
            <div className="carsa-spec-item">
              <dt className="carsa-spec-value">0%</dt>
              <dd className="carsa-eyebrow carsa-spec-label">Toxins</dd>
            </div>
          </dl>
        </div>

        {/* Right Column: Bottle Display */}
        <div className="carsa-hero-visual">
          <div className="carsa-bottle-stage">
            {/* Architectural Arch Backdrops */}
            <div className="carsa-arch-backdrop" />
            <div className="carsa-arch-border" />
            <div className="carsa-arch-ring" />

            {/* Perfume Bottle */}
            <img
              src="/images/oud-bottle-cutout.png"
              alt="CARसा Oud car perfume in clear glass with wooden cap"
              width={774}
              height={1216}
              className="carsa-bottle-img"
            />

            {/* Left Note Chip */}
            <div className="carsa-chip carsa-chip-left">
              <p className="carsa-eyebrow carsa-chip-kicker">Signature</p>
              <p className="carsa-chip-title">Oud</p>
            </div>

            {/* Right Note Chip */}
            <div className="carsa-chip carsa-chip-right">
              <p className="carsa-eyebrow carsa-chip-kicker">Key notes</p>
              <p className="carsa-chip-notes">Oud · Amber · Sandalwood</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a href="#collection" className="carsa-hero-scroll" aria-label="Scroll down">
        <span className="carsa-eyebrow">Scroll</span>
        <svg
          className="carsa-scroll-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
