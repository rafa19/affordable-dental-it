import {
  Monitor,
  Shield,
  Mail,
  Database,
  Wifi,
  GraduationCap,
  Bot,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Managed IT Support",
    description:
      "Full-service help desk and remote support for all your practice computers, servers, and devices. Real humans, fast response.",
    color: "#1E73BE",
    bg: "#ebf4ff",
  },
  {
    icon: Shield,
    title: "Endpoint Security & Antivirus",
    description:
      "Next-gen protection on every device in your office — stops ransomware, malware, and threats before they cause damage.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: Mail,
    title: "Email & Data Protection",
    description:
      "Block phishing attacks, spam, and malicious links. Your staff and patient data stay safe from email-based threats.",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    icon: Database,
    title: "Backup & Disaster Recovery",
    description:
      "Automatic daily backups with rapid recovery. If something goes wrong, we restore your systems in hours — not days.",
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: Wifi,
    title: "Network & Firewall Management",
    description:
      "Secure, segmented networks with enterprise-grade firewalls. Keep patient data separated and protected at all times.",
    color: "#dc2626",
    bg: "#fef2f2",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Educate your team with ongoing, easy-to-follow training so they recognize and avoid the most common cyber threats.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    icon: Bot,
    title: "AI-Driven Threat Detection",
    description:
      "Machine learning that adapts to your practice's patterns, catching unusual activity before it becomes a breach.",
    color: "#6d28d9",
    bg: "#ede9fe",
  },
  {
    icon: Eye,
    title: "Proactive Monitoring & Alerts",
    description:
      "We watch your systems 24/7 and fix most issues before you even notice them — keeping you focused on patients.",
    color: "#0f766e",
    bg: "#f0fdfa",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#ebf4ff", color: "#1E73BE" }}
          >
            <Shield className="w-3.5 h-3.5" />
            Our Services
          </div>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
          >
            Everything Your Practice Needs, All in One Place
          </h2>
          <p style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            A complete suite of IT and cybersecurity services — designed for dental offices,
            delivered at a flat monthly rate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="p-6 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: "1px solid #F0F4F8",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3
                className="mb-2"
                style={{ fontSize: "1rem", fontWeight: 700, color: "#1A202C" }}
              >
                {title}
              </h3>
              <p style={{ color: "#718096", fontSize: "0.875rem", lineHeight: 1.7 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
