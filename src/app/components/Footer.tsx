import { Shield, Phone, Mail, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const links = {
  Services: [
    "Managed IT Support",
    "Endpoint Security",
    "Email Protection",
    "Backup & Recovery",
    "Network Management",
    "Security Training",
  ],
  Company: [
    "About Us",
    "How It Works",
    "Pricing",
    "Blog",
    "Careers",
    "Contact",
  ],
  Compliance: [
    "HIPAA Compliance",
    "Security Policy",
    "Privacy Policy",
    "Terms of Service",
    "Data Processing",
    "SOC 2 Report",
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#0f1f30" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1E73BE, #155a9a)" }}
              >
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Affordable Dental IT</div>
                <div className="text-xs" style={{ color: "#718096" }}>Managed IT & Cybersecurity</div>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#A0AEC0", maxWidth: "280px" }}>
              Affordable, secure, and fully managed IT services designed specifically
              for dental practices. Protect your patients. Protect your practice.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: "(800) 555-DENT" },
                { icon: Mail, text: "hello@affordabledentalit.com" },
                { icon: MapPin, text: "Serving practices nationwide" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#1E73BE" }} />
                  <span className="text-sm" style={{ color: "#A0AEC0" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#A0AEC0" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4
                className="text-white mb-4"
                style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "#718096" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#4A5568" }}>
            © 2025 Affordable Dental IT. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "#4A5568" }}
              >
                {item}
              </a>
            ))}
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
