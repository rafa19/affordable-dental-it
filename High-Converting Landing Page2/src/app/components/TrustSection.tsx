import { ShieldCheck, Lock, Award, Clock } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "HIPAA Ready", color: "#1E73BE" },
  { icon: Lock, label: "SOC 2 Aligned", color: "#7c3aed" },
  { icon: Award, label: "Certified Experts", color: "#059669" },
  { icon: Clock, label: "24/7 Support", color: "#d97706" },
];

const practiceLogos = [
  "Bright Smiles Dental",
  "Summit Family Dentistry",
  "ClearView Dental Group",
  "Apex Orthodontics",
  "Heritage Dental Care",
  "Riverside Dental",
];

export function TrustSection() {
  return (
    <section className="py-12 md:py-16" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#718096" }}
        >
          Trusted by dental practices across the country
        </p>

        {/* Practice name pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {practiceLogos.map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md"
              style={{
                background: "#fff",
                color: "#4A5568",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10 max-w-md mx-auto">
          <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
          <span className="text-xs font-medium" style={{ color: "#A0AEC0" }}>
            COMPLIANCE & SECURITY
          </span>
          <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-center" style={{ color: "#2D3748" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
