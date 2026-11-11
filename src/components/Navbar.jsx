
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
];

const cx = (...classes) => classes.filter(Boolean).join(" ");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Keep your existing cart functionality
  const { totalCount, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid navbar when scrolled or mobile menu is open
  const solid = scrolled || open;

  return (
    <header
      className={cx(
        styles.header,
        solid ? styles.solid : styles.clear
      )}
    >
      <nav className={styles.nav}>
        {/* Brand */}
        <Link
          href="#top"
          className={styles.brand}
          aria-label="CARसा home"
        >
          <Image
            src={
              solid
                ? "/images/carsa-logo-ink.png"
                : "/images/carsa-logo-ivory.png"
            }
            alt="CARसा Fragrances"
            width={120}
            height={48}
            priority
            className={styles.logo}
          />

          <span className={styles.brandTag}>Fragrances</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
                <span className={styles.underline} />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="#collection" className={styles.shop}>
            Shop Now
          </a>

          {/* Existing Cart Integration */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={styles.iconBtn}
            aria-label={`Open cart, ${totalCount} item${
              totalCount === 1 ? "" : "s"
            }`}
          >
            <ShoppingBag
              className={styles.icon}
              strokeWidth={1.25}
            />

            {totalCount > 0 && (
              <span className={styles.badge}>
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={cx(styles.iconBtn, styles.menuBtn)}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className={styles.icon} strokeWidth={1.25} />
            ) : (
              <Menu className={styles.icon} strokeWidth={1.25} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cx(
          styles.mobile,
          open && styles.mobileOpen
        )}
      >
        <ul className={styles.mobileList}>
          {[...links, { href: "#collection", label: "Shop Now" }].map(
            (l, index) => (
              <li key={`${l.href}-${index}`}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={styles.mobileLink}
                >
                  {l.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
}
