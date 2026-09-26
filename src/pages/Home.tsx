import {motion} from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Languages from "../components/Languages";
import Team from "../components/Team";
import Vision from "../components/Vision";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <div className="bg-[#FFFBF5]">
      <Hero />
      <About />
      <Services />
      <Languages />

      {/* Stats strip */}
      <section className="relative py-8 bg-[#E9B44C] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 min-w-10 min-h-10 rounded-full bg-[#0A1931] text-white flex items-center justify-center font-bold">
                ✦
              </div>
              <span className="font-display font-bold text-[16px] text-[#0A1931]">
                Why families choose Afro European
              </span>
            </div>
            <div className="flex flex-wrap gap-8">
              {[
                "Live & interactive, not pre-recorded",
                "Cultural context in every lesson",
                "Diaspora-aware teachers",
                "Progress you can see in 4 weeks",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#0A1931]/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1931]" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Vision />
      <Clients />

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-[#FFFBF5]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#0A1931]" />
              <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-[#0A1931]/60">
                Stories
              </span>
            </div>
            <h2 className="font-display text-[36px] md:text-[44px] leading-[0.95] tracking-[-0.02em] font-bold text-[#0A1931]">
              Parents tell us their kids now{" "}
              <em className="font-normal text-[#C8963E]">
                correct their pronunciation.
              </em>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "My daughter used to be shy about her Yoruba name. Now she introduces herself with pride and teaches her classmates how to say it properly.",
                name: "Amara O.",
                role: "Parent • Manchester",
                initial: "AO",
              },
              {
                quote:
                  "The German integration course didn't just help me pass — it helped me understand how to belong. Afro European gets both worlds.",
                name: "Chidi E.",
                role: "Learner • Berlin",
                initial: "CE",
              },
              {
                quote:
                  "As a school, we wanted authentic African language resources, not translated textbooks. Their platform is exactly what we needed.",
                name: "Sarah Mitchell",
                role: "Headteacher • Glasgow",
                initial: "SM",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.1}}
                className="rounded-[24px] bg-white border border-[#0A1931]/5 p-8 shadow-[0_8px_32px_rgba(10,25,49,0.04)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#E9B44C]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[15px] leading-[1.6] text-[#0A1931]/80">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A1931] text-white flex items-center justify-center font-bold text-[11px]">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#0A1931]">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#0A1931]/50">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
