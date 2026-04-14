import { Stethoscope, DollarSign, Zap, Eye, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Dental-Specific Expertise",
    description:
      "We only serve dental practices. That means we understand your software (Dentrix, Eaglesoft, Curve), your workflows, and your compliance requirements — deeply.",
    color: "#1E73BE",
    bg: "#ebf4ff",
    stat: "100%",
    statLabel: "Dental-focused",
  },
  {
    icon: DollarSign,
    title: "Genuinely Affordable",
    description:
      "Enterprise-level security and IT management at prices designed for small-to-mid practices. No surprise invoices, no \"break/fix\" hourly billing.",
    color: "#059669",
    bg: "#ecfdf5",
    stat: "40%",
    statLabel: "Less than national average",
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    description:
      "Our average response time is under 60 minutes. Critical issues are escalated immediately. Your practice never waits long for help.",
    color: "#d97706",
    bg: "#fffbeb",
    stat: "<1hr",
    statLabel: "Average response",
  },
  {
    icon: Eye,
    title: "Proactive, Not Reactive",
    description:
      "We fix problems before your staff notices them. 85% of the issues we resolve are caught and fixed automatically, with no disruption to your day.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    stat: "85%",
    statLabel: "Issues fixed proactively",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Approach",
    description:
      "Cybersecurity isn't an add-on for us — it's the foundation. Every service we offer is built with a security-first mindset from day one.",
    color: "#dc2626",
    bg: "#fef2f2",
    stat: "0",
    statLabel: "Patient breaches to date",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description:
      "You'll work with the same engineers who know your systems. No call centers, no ticket queues that go cold. Just real people who care.",
    color: "#0891b2",
    bg: "#ecfeff",
    stat: "US-based",
    statLabel: "Support team",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#ebf4ff", color: "#1E73BE" }}
          >
            Why Choose Us
          </div>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
          >
            Built for Dentists, By IT Professionals Who Care
          </h2>
          <p style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            We're not a generic IT company that happens to serve dental offices.
            We specialize exclusively in dental IT — and it shows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, color, bg, stat, statLabel }) => (
            <div
              key={title}
              className="p-7 rounded-2xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div className="text-right">
                  <div
                    className="text-xl font-extrabold"
                    style={{ color, lineHeight: 1.1 }}
                  >
                    {stat}
                  </div>
                  <div className="text-xs" style={{ color: "#A0AEC0" }}>
                    {statLabel}
                  </div>
                </div>
              </div>

              <h3
                className="mb-2"
                style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1A202C" }}
              >
                {title}
              </h3>
              <p style={{ color: "#718096", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
