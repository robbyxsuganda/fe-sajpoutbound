"use client";

import Link from "next/link";
import Image from "next/image";
import { menuItems, productItems } from "@/constants/Menu.constans";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/sajp-logo.png"
                alt="SAJP Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">SAJP Outbound</h3>
                <p className="text-white/80 text-sm">
                  Premium Indonesia Spices
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted partner for efficient logistics and transportation
              solutions across Indonesia. We are committed to providing the best
              service for your business needs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/sajp.id"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/sajp.id"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.83c-.49 0-.928.39-.928.928v7.83c0 .49.39.928.928.928h8.449c.49 0 .928-.39.928-.928v-7.83c0-.49-.39-.928-.928-.928z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/sajp.id"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/6281234567890"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198-.148-.372-.297-.52-.149-.149-.67-.81-.92-1.11-.248-.297-.5-.25-.67-.25-.173-.025-.297-.05-.446-.05-.149 0-.372.05-.57.248-.198.198-.76.76-.76 1.854s.78 2.15.89 2.3c.11.15 1.53 2.33 3.71 3.27.52.23.93.37 1.25.47.52.16 1 .14 1.35.08.52-.09 1.6-.66 1.82-1.3.22-.64.22-1.19.15-1.3-.07-.11-.22-.17-.47-.27z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Navigation</h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-[var(--color-accent)] transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products & Services</h4>
            <ul className="space-y-2">
              {productItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-[var(--color-accent)] transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-white/80 text-sm">
                    Jakarta, Indonesia
                    <br />
                    Jl. Example Address No. 123
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-white/80 text-sm">+62 21 1234 5678</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-white/80 text-sm">info@sajpoutbound.com</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-white/80 text-sm">
                  Monday - Friday: 08:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2024 SAJP Outbound. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                href="/privacyPolicy"
                className="text-white/80 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/termsOfService"
                className="text-white/80 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
