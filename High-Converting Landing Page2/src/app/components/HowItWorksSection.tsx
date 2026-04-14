import { Search, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    subtitle: "Free IT & Security Evaluation",
    description:
      "We start with a complimentary, no-obligation assessment of your current IT environment and security posture. We identify risks, gaps, and quick wins — and give you a clear picture of where you stand.",
    color: "#1E73BE",
    bg: "#ebf4ff",
    items: [
      "Network & device audit",
      "HIPAA compliance check",
      "Security vulnerability scan",
      "Current IT cost review",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Secure",
    subtitle: "Implement Protection & Monitoring",
    description:
      "Our team deploys your complete security and IT management stack — silently, with minimal disruption to your practice. Everything is configured, tested, and verified before we hand you the keys.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    items: [
      "Endpoint security deployment",
      "Firewall & network hardening",
      "Backup system setup",
      "Staff security training",
    ],
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Support",
    subtitle: "Ongoing Management & Optimization",
    description:
      "From day one, your practice is monitored around the clock. We fix issues proactively, apply updates automatically, and provide unlimited support — so you never have to worry about IT again.",
    color: "#059669",
    bg: "#ecfdf5",
    items: [
      "24/7 proactive monitoring",
      "Monthly security reports",
      "Unlimited help desk access",
      "Quarterly strategy reviews",
    ],
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#ebf4ff", color: "#1E73BE" }}
          >
            How It Works
          </div>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
          >
            Up and Running in Days, Not Months
          </h2>
          <p style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            Our simple 3-step onboarding gets your practice fully protected fast —
            with zero technical knowledge required from you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector lines (desktop) */}
          <div
            className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5"
            style={{ background: "linear-gradient(90deg, #1E73BE, #7c3aed)" }}
          />
          <div
            className="hidden md:block absolute top-20 left-2/3 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #7c3aed, #059669)" }}
          />

          {steps.map(({ number, icon: Icon, title, subtitle, description, color, bg, items }, idx) => (
            <div
              key={title}
              className="relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              {/* Step number */}
              <div
                className="absolute -top-4 left-7 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: color, color: "#fff" }}
              >
                STEP {number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: bg }}
              >
                <Icon className="w-7 h-7" style={{ color }} />
              </div>

              <h3
                className="mb-1"
                style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A202C" }}
              >
                {title}
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color }}>
                {subtitle}
              </p>
              <p className="mb-5" style={{ color: "#718096", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {description}
              </p>

              {/* Checklist */}
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: bg }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                    </div>
                    <span className="text-sm" style={{ color: "#4A5568" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Arrow for non-last */}
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-6 flex justify-center">
                  <ArrowRight className="w-5 h-5 rotate-90" style={{ color: "#CBD5E0" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-xl hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1E73BE, #155a9a)" }}
          >
            Start Your Free Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
