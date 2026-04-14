import { ArrowRight, CheckCircle, Play } from "lucide-react";

const dentalOfficeImg =
  "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBjbGluaWN8ZW58MXx8fHwxNzc2MTMwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const trustItems = [
  "HIPAA-Ready Infrastructure",
  "24/7 Proactive Monitoring",
  "No Long-Term Contracts",
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2d4a 0%, #1E73BE 50%, #1a85d4 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${dentalOfficeImg})`,
          opacity: 0.12,
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#60b3f7" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#0a4a7a" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by Dental Practices Nationwide
            </div>

            <h1
              className="mb-6 text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Secure, Reliable IT for Dental Practices —{" "}
              <span style={{ color: "#7dd3f8" }}>Without the High Cost</span>
            </h1>

            <p
              className="mb-8 max-w-xl"
              style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}
            >
              Stop worrying about ransomware, HIPAA violations, and system downtime.
              We deliver enterprise-grade cybersecurity and IT management tailored
              specifically for dental practices — at a price that makes sense.
            </p>

            {/* Trust items */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.9)" }}>
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-2xl hover:scale-105"
                style={{ background: "#fff", color: "#1E73BE" }}
              >
                Get a Free IT & Security Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white/20"
                style={{ border: "2px solid rgba(255,255,255,0.5)", color: "#fff" }}
              >
                <Play className="w-4 h-4" />
                See Plans
              </a>
            </div>
          </div>

          {/* Right: Dashboard Card */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl p-6 shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                    SECURITY DASHBOARD
                  </p>
                  <p className="text-white font-semibold">Practice Security Overview</p>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(74,222,128,0.2)", color: "#4ade80" }}
                >
                  ● All Systems Secure
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Threats Blocked", value: "1,284", trend: "+12 today", color: "#4ade80" },
                  { label: "Uptime", value: "99.9%", trend: "Last 30 days", color: "#60b3f7" },
                  { label: "Devices Protected", value: "18", trend: "All healthy", color: "#a78bfa" },
                  { label: "Last Backup", value: "2m ago", trend: "Verified ✓", color: "#fbbf24" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {stat.label}
                    </p>
                    <p className="text-xl font-bold text-white mb-0.5">{stat.value}</p>
                    <p className="text-xs" style={{ color: stat.color }}>
                      {stat.trend}
                    </p>
                  </div>
                ))}
              </div>

              {/* Activity list */}
              <div className="space-y-2">
                {[
                  { msg: "Ransomware attempt blocked", time: "5m ago", dot: "#ef4444" },
                  { msg: "Security patch applied — 3 devices", time: "1h ago", dot: "#4ade80" },
                  { msg: "HIPAA compliance check passed", time: "3h ago", dot: "#60b3f7" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: item.dot }}
                      />
                      <span className="text-xs text-white">{item.msg}</span>
                    </div>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
