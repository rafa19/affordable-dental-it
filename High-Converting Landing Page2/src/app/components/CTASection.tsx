import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "No long-term contracts" },
  { icon: Clock, text: "30-day satisfaction guarantee" },
  { icon: CheckCircle, text: "Free onboarding assistance" },
];

export function CTASection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f2d4a 0%, #1E73BE 60%, #1a85d4 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "#fff" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: "#60b3f7" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Limited spots available this month
        </div>

        <h2
          className="text-white mb-4"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}
        >
          Protect Your Practice Today
        </h2>

        <p
          className="mb-8 mx-auto"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.125rem",
            lineHeight: 1.75,
            maxWidth: "640px",
          }}
        >
          Schedule your free, no-obligation IT and security consultation.
          We'll assess your practice, identify vulnerabilities, and give you a clear
          roadmap — completely free, with zero pressure.
        </p>

        {/* Guarantees */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {guarantees.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <Icon className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:scale-105"
            style={{ background: "#fff", color: "#1E73BE", fontSize: "1rem" }}
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:bg-white/20"
            style={{
              border: "2px solid rgba(255,255,255,0.5)",
              color: "#fff",
              fontSize: "1rem",
            }}
          >
            View Pricing Plans
          </a>
        </div>

        {/* Contact form teaser */}
        <div
          className="mt-14 p-6 md:p-8 rounded-2xl max-w-xl mx-auto"
          id="contact"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            className="text-white mb-2"
            style={{ fontSize: "1.125rem", fontWeight: 700 }}
          >
            Request Your Free Assessment
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
            Fill out the form and we'll reach out within one business day.
          </p>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontSize: "0.875rem",
                }}
              />
              <input
                type="text"
                placeholder="Practice Name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontSize: "0.875rem",
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: "0.875rem",
              }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: "0.875rem",
              }}
            />
            <button
              className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-xl hover:scale-105"
              style={{ background: "#fff", color: "#1E73BE" }}
            >
              Get My Free Assessment →
            </button>
          </div>
          <p className="text-xs text-center mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
