import { Star, Quote } from "lucide-react";

const dentistPatientImg =
  "https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwaGFwcHklMjBzbWlsaW5nJTIwcGF0aWVudCUyMGNsaW5pY3xlbnwxfHx8fDE3NzYxMzA1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Owner, Bright Smiles Family Dentistry",
    location: "Austin, TX",
    text: "Before Affordable Dental IT, we had constant issues with our practice management software going down, and we were terrified of a HIPAA audit. Within the first month, they cleaned everything up, set up proper backups, and gave us a full compliance report. I sleep so much better now.",
    rating: 5,
    initials: "SM",
    color: "#1E73BE",
  },
  {
    name: "Dr. James Ortega",
    role: "Practice Manager, Summit Dental Group",
    location: "Denver, CO",
    text: "We had a ransomware attempt last spring that would have shut us down for days. Their security platform caught and blocked it automatically at 2am. I got an alert email in the morning explaining what happened and what they did. That's the peace of mind we needed.",
    rating: 5,
    initials: "JO",
    color: "#7c3aed",
  },
  {
    name: "Dr. Lisa Chen",
    role: "Owner, ClearView Pediatric Dentistry",
    location: "Seattle, WA",
    text: "The pricing is completely transparent and fair — we pay the same every month. But the biggest difference is their response time. I submitted a ticket at 7am and they had it resolved before my first patient at 8. That's never happened with any IT company I've used.",
    rating: 5,
    initials: "LC",
    color: "#059669",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "#fffbeb", color: "#d97706" }}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            What Our Clients Say
          </div>
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 700, color: "#1A202C", lineHeight: 1.25 }}
          >
            Dental Practices Love the Peace of Mind
          </h2>
          <p style={{ color: "#718096", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            Don't take our word for it — here's what real dental practices say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-7 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 w-8 h-8 rounded-lg flex items-center justify-center opacity-20"
                style={{ background: t.color }}
              >
                <Quote className="w-4 h-4 text-white" />
              </div>

              <StarRating count={t.rating} />

              <p style={{ color: "#4A5568", fontSize: "0.9375rem", lineHeight: 1.8, fontStyle: "italic" }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid #F0F4F8" }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#1A202C" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#718096" }}>
                    {t.role}
                  </p>
                  <p className="text-xs" style={{ color: "#A0AEC0" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={dentistPatientImg}
            alt="Happy dental practice"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-center p-6"
            style={{ background: "linear-gradient(135deg, rgba(30,115,190,0.85), rgba(15,45,74,0.9))" }}
          >
            <div>
              <div className="flex justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p
                className="text-white mb-2"
                style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 700 }}
              >
                "Finally, an IT company that speaks dentist."
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}>
                Rated 4.9/5 across 120+ dental practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
