import { AlertTriangle, Wifi, FileWarning, Clock3 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Ransomware & Data Breaches",
    description:
      "Dental practices are prime targets. One breach can cost thousands in fines, lost patients, and recovery — plus damage your reputation permanently.",
    color: "#ef4444",
    bg: "#fef2f2",
  },
  {
    icon: FileWarning,
    title: "HIPAA Compliance Gaps",
    description:
      "Non-compliance isn't just risky — it's expensive. Without proper IT safeguards, your practice is one audit away from serious penalties.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: Clock3,
    title: "Downtime Killing Productivity",
    description:
      "When your systems go down, appointments get missed and revenue stops. Most practices can't afford even an hour of unexpected downtime.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: Wifi,
    title: "Slow, Reactive IT Support",
    description:
      "Waiting hours for an IT person to show up is unacceptable. Your staff gets frustrated, patients wait, and problems keep coming back.",
    color: "#1E73BE",
    bg: "#eff6ff",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#fef2f2", color: "#ef4444" }}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            The Reality for Most Dental Practices
          </div>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
          >
            Is Your Practice One Click Away from a Disaster?
          </h2>
          <p style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            Most dental offices run on outdated, unprotected systems — and don't realize the risk
            until it's too late. Here's what keeps practice owners up at night:
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              style={{ border: "1px solid #F0F4F8", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
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
            </div>
          ))}
        </div>

        {/* Bottom hook */}
        <div
          className="mt-12 p-6 md:p-8 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, #0f2d4a, #1E73BE)",
            color: "#fff",
          }}
        >
          <p style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            The average cost of a healthcare data breach: <span style={{ color: "#7dd3f8" }}>$10.9 million</span>
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}>
            Don't wait until something breaks. Proactive protection costs a fraction of recovery.
          </p>
        </div>
      </div>
    </section>
  );
}
