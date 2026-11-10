// components/CartDrawer.jsx
"use client";

import Image from "next/image";
import { ShoppingBag, X, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function FloatingCartButton() {
  const { totalCount, setIsOpen } = useCart();
  if (totalCount === 0) return null;

  return (
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      aria-label="Open cart"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white shadow-soft transition-all duration-300 hover:bg-[#8f6e28] sm:bottom-8 sm:right-8"
    >
      <ShoppingBag className="h-6 w-6" strokeWidth={1.25} />
      <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-[#b38b36] px-1.5 text-xs font-semibold text-white">
        {totalCount}
      </span>
    </button>
  );
}

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, subtotal, totalCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#e7e0d3] px-8 py-6">
          <div>
            <p className="eyebrow text-[#8f6e28]">Your Selection</p>
            <h3 className="font-display mt-1 text-3xl font-normal text-neutral-900">
              Cart <span className="text-neutral-400">({totalCount})</span>
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 text-neutral-500 hover:text-neutral-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-[#b38b36]" strokeWidth={1} />
            <p className="font-display text-2xl italic text-neutral-800">Your cart is empty</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="eyebrow border-b border-neutral-900 pb-1 text-neutral-900"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-8 divide-y divide-[#e7e0d3]">
            {items.map((item) => (
              <div key={item.id} className="flex gap-5 py-6">
                <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#faf8f5]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display text-xl italic text-neutral-900">{item.name}</h4>
                      <p className="eyebrow text-xs text-neutral-400 mt-1">10 ml · Extrait de parfum</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 text-neutral-400 hover:text-neutral-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center border border-[#e7e0d3]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-[#faf8f5]"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-[#faf8f5]"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="font-medium text-neutral-900">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t border-[#e7e0d3] bg-[#faf8f5] p-8">
            <div className="flex items-center justify-between text-base">
              <span className="eyebrow text-neutral-500">Subtotal</span>
              <span className="font-display text-2xl text-neutral-900">₹{subtotal}</span>
            </div>
            <p className="mt-2 text-xs text-neutral-500">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              onClick={() => alert("Checkout flow can be connected to Stripe, Razorpay, or Shopify.")}
              className="eyebrow mt-6 flex w-full items-center justify-center gap-3 bg-neutral-900 py-5 text-white transition-all hover:bg-[#8f6e28]"
            >
              Checkout Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
