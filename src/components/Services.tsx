import {motion} from "framer-motion";
import {
  Languages,
  MonitorSmartphone,
  Layers,
  Users,
  Sparkles,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Language Learning Platforms",
    desc: "Master Yoruba, Igbo, Swahili, Hausa & German through immersive lessons, cultural insights, and real-world conversation practice.",
    features: ["Live tutors", "Cultural context", "Certification"],
    color: "bg-[#E9B44C]",
    accent: "text-[#0A1931]",
  },
  {
    icon: MonitorSmartphone,
    title: "Cultural Education Software",
    desc: "Tools designed for schools and institutions to teach African languages and heritage in a modern, interactive way.",
    features: ["LMS Integration", "White-label", "Analytics"],
    color: "bg-[#0A1931]",
    accent: "text-white",
  },
  {
    icon: Layers,
    title: "Custom Educational Platforms",
    desc: "We architect and deploy user-friendly digital platforms that make cultural learning accessible to communities globally.",
    features: ["Bespoke design", "Scalable", "Multi-language"],
    color: "bg-[#F5EBDD]",
    accent: "text-[#0A1931]",
  },
  {
    icon: Users,
    title: "Seminars & Excursions",
    desc: "Engaging seminars and interactive workshops helping organisations celebrate diversity and strengthen cross-cultural understanding.",
    features: ["Corporate", "Schools", "Community"],
    color: "bg-white",
    accent: "text-[#0A1931]",
  },
  {
    icon: Sparkles,
    title: "Children’s Animation & Stories",
    desc: "African animation, folklore and graphics courses for children — where culture meets creativity and imagination.",
    features: ["Ages 4-16", "Animation", "Storytelling"],
    color: "bg-[#E85D04]",
    accent: "text-white",
  },
  {
    icon: BookOpen,
    title: "Life in the UK Preparation",
    desc: "Comprehensive preparation support for new arrivals — cultural orientation, language, and integration guidance.",
    features: ["Mock tests", "Mentorship", "Resources"],
    color: "bg-[#162447]",
    accent: "text-white",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#0A1931] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E9B44C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E9B44C]" />
              <span className="text-[11px] tracking-[0.18em] font-bold uppercase text-white/70">
                What We Do
              </span>
            </motion.div>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.7, ease: [0.16, 1, 0.3, 1]}}
              className="font-display text-[40px] md:text-[56px] leading-[0.9] tracking-[-0.03em] font-bold text-white max-w-[560px] text-balance"
            >
              Education that honors roots and opens{" "}
              <span className="text-[#E9B44C]">worlds.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2}}
            className="max-w-[380px] text-[15px] leading-[1.7] text-white/60"
          >
            From first words in Yoruba to building your own learning platform —
            we design every experience to be culturally rich, technically
            excellent, and deeply human.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{y: -6}}
              className={`group relative rounded-[28px] p-8 flex flex-col min-h-[340px] ${s.color} border border-black/5 overflow-hidden`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 bg-gradient-to-br from-black to-transparent" />

              <div
                className={`relative w-12 h-12 rounded-[14px] flex items-center justify-center ${s.accent === "text-white" ? "bg-white/10 text-white" : "bg-[#0A1931] text-white"} mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <s.icon size={20} />
              </div>

              <h3
                className={`font-display font-bold text-[20px] leading-[1.2] ${s.accent} mb-3`}
              >
                {s.title}
              </h3>
              <p
                className={`text-[14px] leading-[1.6] ${s.accent === "text-white" ? "text-white/70" : "text-[#0A1931]/60"} flex-1`}
              >
                {s.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border ${s.accent === "text-white" ? "border-white/20 text-white/70" : "border-[#0A1931]/10 text-[#0A1931]/60"}`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div
                className={`mt-6 flex items-center gap-2 text-[13px] font-bold ${s.accent} group-hover:gap-3 transition-all duration-300`}
              >
                Explore <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
