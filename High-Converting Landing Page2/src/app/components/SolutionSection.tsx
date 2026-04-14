import { CheckCircle, Activity, ShieldCheck, RefreshCw, HardDrive, Zap } from "lucide-react";

const cybersecImg =
  "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb24lMjBuZXR3b3JrJTIwc2hpZWxkfGVufDF8fHx8MTc3NjEzMDU4MXww&ixlib=rb-4.1.0&q=80&w=1080";

const solutions = [
  { icon: Activity, label: "24/7 Proactive Monitoring" },
  { icon: ShieldCheck, label: "Built-in Cybersecurity Protection" },
  { icon: RefreshCw, label: "Automated Patching & Updates" },
  { icon: HardDrive, label: "Backup & Disaster Recovery" },
  { icon: Zap, label: "Fast Response Times (<1 hour)" },
  { icon: CheckCircle, label: "HIPAA Compliance Management" },
];

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cybersecImg}
                alt="Cybersecurity protection"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(30,115,190,0.4), rgba(15,45,74,0.6))" }}
              />
              {/* Floating card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "#ebf4ff" }}
                  >
                    <ShieldCheck className="w-5 h-5" style={{ color: "#1E73BE" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1A202C" }}>
                      Your Practice Is Protected
                    </p>
                    <p className="text-xs" style={{ color: "#718096" }}>
                      AI-powered monitoring running 24/7
                    </p>
                  </div>
                  <div
                    className="ml-auto px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#dcfce7", color: "#166534" }}
                  >
                    ACTIVE
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl opacity-20"
              style={{ background: "#1E73BE" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-xl opacity-15"
              style={{ background: "#155a9a" }}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "#ebf4ff", color: "#1E73BE" }}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              The Affordable Dental IT Difference
            </div>

            <h2
              className="mb-4"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
            >
              Everything Your Practice Needs. Nothing You Don't.
            </h2>

            <p className="mb-8" style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
              We built our platform specifically for dental practices. From the moment you sign on,
              your IT and cybersecurity is fully managed — so you can focus entirely on patient care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solutions.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 hover:shadow-md group"
                  style={{ background: "#fff", border: "1px solid #E2E8F0" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "#ebf4ff" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#1E73BE" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#2D3748" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1E73BE, #155a9a)" }}
            >
              Get Protected Today
              <CheckCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
