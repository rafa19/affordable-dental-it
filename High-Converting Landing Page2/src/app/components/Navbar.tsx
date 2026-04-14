import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1E73BE, #155a9a)" }}
            >
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-sm font-bold tracking-tight"
                style={{ color: "#1E73BE" }}
              >
                Affordable Dental
              </span>
              <span className="text-xs font-medium" style={{ color: "#4A5568" }}>
                IT & Cybersecurity
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: isScrolled ? "#2D3748" : "#fff" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1E73BE, #155a9a)",
                color: "#fff",
              }}
            >
              Free Assessment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: isScrolled ? "#2D3748" : "#fff" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "#fff", borderColor: "#E2E8F0" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-medium"
                style={{ color: "#2D3748" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold text-center"
              style={{
                background: "linear-gradient(135deg, #1E73BE, #155a9a)",
                color: "#fff",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Get Free Assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
