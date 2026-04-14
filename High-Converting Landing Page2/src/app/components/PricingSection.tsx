import { CheckCircle, Star, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small practices just getting started",
    price: 49,
    period: "user/month",
    highlight: false,
    badge: null,
    color: "#1E73BE",
    features: [
      "Managed help desk support",
      "Endpoint antivirus & protection",
      "Patch management & updates",
      "Basic email security",
      "Cloud backup (daily)",
      "Business hours support (8am–6pm)",
      "Monthly security report",
      "Up to 10 users",
    ],
    missing: [
      "Advanced threat detection",
      "Security awareness training",
      "Dark web monitoring",
      "Compliance reporting",
    ],
  },
  {
    name: "Growth",
    tagline: "Most popular for growing dental practices",
    price: 79,
    period: "user/month",
    highlight: true,
    badge: "Most Popular",
    color: "#fff",
    features: [
      "Everything in Starter",
      "24/7 helpdesk & monitoring",
      "Advanced endpoint detection (EDR)",
      "Email + phishing protection",
      "Backup & disaster recovery",
      "Firewall management",
      "Security awareness training",
      "Dark web monitoring",
      "HIPAA compliance support",
      "Up to 30 users",
    ],
    missing: ["Dedicated account manager", "On-site support visits"],
  },
  {
    name: "Secure+",
    tagline: "Enterprise-grade protection for larger practices",
    price: 119,
    period: "user/month",
    highlight: false,
    badge: null,
    color: "#1E73BE",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "On-site support visits",
      "AI-powered threat intelligence",
      "Advanced compliance reporting",
      "Penetration testing (annual)",
      "Unlimited users",
      "Priority 15-min response SLA",
      "vCISO advisory services",
      "Custom security policies",
    ],
    missing: [],
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#ebf4ff", color: "#1E73BE" }}
          >
            <Star className="w-3.5 h-3.5" />
            Simple, Transparent Pricing
          </div>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
          >
            Flat Monthly Pricing. No Surprises.
          </h2>
          <p style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            Know exactly what you'll pay each month. No hidden fees, no surprise bills —
            just reliable IT protection at a predictable cost.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-sm font-medium" style={{ color: annual ? "#A0AEC0" : "#2D3748" }}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-200"
              style={{ background: annual ? "#1E73BE" : "#CBD5E0" }}
            >
              <div
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
                style={{ transform: annual ? "translateX(26px)" : "translateX(4px)" }}
              />
            </button>
            <span className="text-sm font-medium" style={{ color: annual ? "#2D3748" : "#A0AEC0" }}>
              Annual
              <span
                className="ml-1.5 px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: "#dcfce7", color: "#166534" }}
              >
                Save 15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const displayPrice = annual
              ? Math.round(plan.price * 0.85)
              : plan.price;

            return (
              <div
                key={plan.name}
                className="relative rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl"
                style={{
                  background: plan.highlight
                    ? "linear-gradient(135deg, #0f2d4a, #1E73BE)"
                    : "#fff",
                  border: plan.highlight ? "none" : "1px solid #E2E8F0",
                  boxShadow: plan.highlight
                    ? "0 20px 60px rgba(30,115,190,0.35)"
                    : "0 2px 12px rgba(0,0,0,0.05)",
                  transform: plan.highlight ? "scale(1.03)" : "scale(1)",
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                    style={{ background: "#fbbf24", color: "#1A202C" }}
                  >
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-6">
                  <h3
                    className="mb-1"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: plan.highlight ? "#fff" : "#1A202C",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#718096" }}
                  >
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span
                      className="text-sm font-medium"
                      style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#718096" }}
                    >
                      Starting at
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span
                      style={{
                        fontSize: "2.75rem",
                        fontWeight: 800,
                        color: plan.highlight ? "#fff" : "#1A202C",
                        lineHeight: 1,
                      }}
                    >
                      ${displayPrice}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: plan.highlight ? "rgba(255,255,255,0.65)" : "#718096" }}
                    >
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 mb-7 hover:shadow-lg hover:scale-105"
                  style={{
                    background: plan.highlight ? "#fff" : "#1E73BE",
                    color: plan.highlight ? "#1E73BE" : "#fff",
                  }}
                >
                  Get Started
                  <ArrowRight className="inline-block w-3.5 h-3.5 ml-1.5" />
                </a>

                {/* Divider */}
                <div
                  className="h-px mb-5"
                  style={{ background: plan.highlight ? "rgba(255,255,255,0.15)" : "#F0F4F8" }}
                />

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlight ? "#4ade80" : "#059669" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "#4A5568" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-sm" style={{ color: "#A0AEC0" }}>
          All plans include onboarding assistance and a 30-day satisfaction guarantee.
          Need a custom quote?{" "}
          <a href="#contact" style={{ color: "#1E73BE" }} className="font-medium hover:underline">
            Contact us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
