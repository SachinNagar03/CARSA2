// components/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#story", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalCount, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-[#faf8f5]/90 backdrop-blur-md ${
        scrolled ? "border-b border-[#e7e0d3] py-3" : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/images/carsa_logo.png"
            alt="CARसा Fragrances"
            width={120}
            height={48}
            className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-12"}`}
            priority
          />
          <span className="eyebrow hidden text-neutral-500 sm:block">Fragrances</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow group relative text-neutral-800 transition-colors hover:text-[#b38b36]"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#b38b36] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#collection"
            className="eyebrow hidden border border-neutral-900 px-5 py-3 text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white sm:inline-block"
          >
            Shop Now
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-neutral-900 hover:text-[#b38b36] transition-colors"
            aria-label="Open Cart"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
            {totalCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b38b36] px-1 text-[10px] font-medium text-white">
                {totalCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="p-2 md:hidden text-neutral-900"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-[#e7e0d3] bg-[#faf8f5] px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-5">
            {[...links, { href: "#collection", label: "Shop Now" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-neutral-900 hover:text-[#b38b36]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
