"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { menuItems, productItems } from "@/constants/Menu.constans";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
        setIsProductsDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setIsProductsDropdownOpen(false);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const isActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  const getTextColor = (isActive: boolean) => {
    if (isActive)
      return isScrolled
        ? "text-[var(--color-primary)]"
        : "text-[var(--color-accent)]";
    return isScrolled ? "text-[var(--color-neutral-black)]" : "text-white";
  };

  const getHoverColor = () => {
    return isScrolled
      ? "hover:text-[var(--color-primary)]"
      : "hover:text-[var(--color-accent)]";
  };

  const getActiveClasses = (isActive: boolean) => {
    if (!isActive) return "";
    const color = isScrolled ? "var(--color-primary)" : "var(--color-accent)";
    return `font-semibold relative after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[${color}] after:rounded-full`;
  };

  const linkClasses = (href: string) => {
    const active = isActive(href);
    return `font-medium transition-all duration-200 ${getTextColor(
      active
    )} ${getHoverColor()} ${getActiveClasses(active)}`;
  };

  const hamburgerClasses = `w-5 h-0.5 transition-all duration-300 ease-in-out ${
    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
  }`;

  const mobileMenuItemClasses = (href: string) => {
    const active = isActive(href);
    return `block py-4 text-lg font-medium transition-all duration-200 rounded-lg px-3 ${
      active
        ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold"
        : "text-[var(--color-neutral-black)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 py-4">
          {menuItems.slice(0, 2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.label}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div className="relative group">
            <Link
              href="/products"
              className={`flex items-center gap-1 ${linkClasses("/products")}`}
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            <div
              className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-[var(--color-neutral-light-gray)] py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              {productItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-2.5 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold"
                      : "text-[var(--color-neutral-black)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="transition-transform duration-200 hover:scale-105"
          >
            <Image
              src="/images/sajp.png"
              alt="SAJP Logo"
              width={80}
              height={80}
              className="transition-all duration-200 mix-blend-multiply"
              style={{ background: "transparent" }}
            />
          </Link>

          {menuItems.slice(2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <Link
            href="/"
            className="transition-transform duration-200 hover:scale-105"
          >
            <Image
              src="/images/sajp.png"
              alt="SAJP Logo"
              width={80}
              height={80}
              className="transition-all duration-200 mix-blend-multiply"
              style={{ background: "transparent" }}
            />
          </Link>

          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isScrolled
                ? "hover:bg-[var(--color-neutral-light-gray)]"
                : "hover:bg-white/20"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
              <span
                className={hamburgerClasses}
                style={{
                  backgroundColor: isScrolled
                    ? "var(--color-neutral-black)"
                    : "white",
                }}
              />
              <span
                className={`w-5 h-0.5 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
                style={{
                  backgroundColor: isScrolled
                    ? "var(--color-neutral-black)"
                    : "white",
                }}
              />
              <span
                className={`w-5 h-0.5 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{
                  backgroundColor: isScrolled
                    ? "var(--color-neutral-black)"
                    : "white",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-white shadow-lg border-t animate-in slide-in-from-top-2 duration-300"
          >
            <div className="px-4 py-6">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className={mobileMenuItemClasses(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Products Dropdown */}
                <div className="py-2">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      href="/products"
                      className={`flex-1 text-lg font-medium transition-all duration-200 py-4 rounded-lg px-3 ${
                        pathname.startsWith("/products")
                          ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold"
                          : "text-[var(--color-neutral-black)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                      }`}
                      onClick={closeMenus}
                    >
                      Products
                    </Link>
                    <button
                      className="p-2 hover:bg-[var(--color-primary)]/5 rounded-lg transition-colors duration-200"
                      onClick={() =>
                        setIsProductsDropdownOpen(!isProductsDropdownOpen)
                      }
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                          isProductsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {isProductsDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                      {productItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`block py-3 transition-all duration-200 rounded-lg px-3 ${
                            isActive(item.href)
                              ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-semibold"
                              : "text-[var(--color-neutral-gray)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                          }`}
                          onClick={closeMenus}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
