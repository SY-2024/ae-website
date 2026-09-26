import {motion} from "framer-motion";
import Cals from "../assets/cals.png";
import Imagine from "../assets/imagine.jpeg";
import SabiYou from "../assets/sabiyou.png";

const clients = [
  {name: "Imagine Foundation", abbr: "IM", img: Imagine},
  {name: "CALS Institute", abbr: "CA", img: Cals},
  {name: "SabiYou", abbr: "SY", img: SabiYou},
  {name: "Imagine Foundation", abbr: "IM", img: Imagine},
  {name: "CALS Institute", abbr: "CA", img: Cals},
  {name: "SabiYou", abbr: "SY", img: SabiYou},
  {name: "Imagine Foundation", abbr: "IM", img: Imagine},
  {name: "CALS Institute", abbr: "CA", img: Cals},
  {name: "SabiYou", abbr: "SY", img: SabiYou},
];

export default function Clients() {
  return (
    <section className="relative py-20 bg-[#FFFBF5] border-y border-[#0A1931]/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-[380px] flex-shrink-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#0A1931]" />
              <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-[#0A1931]/60">
                Our Clients
              </span>
            </div>
            <h3 className="font-display text-[28px] leading-[1.1] font-bold tracking-[-0.02em] text-[#0A1931] text-balance">
              Trusted by families, schools, and forward-thinking organisations.
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#0A1931]/60">
              From families reconnecting with roots, to institutions enriching
              curriculum with indigenous languages, and companies seeking
              meaningful cultural partnerships.
            </p>
          </div>

          <div className="flex-1 w-full">
            {/* Marquee */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#FFFBF5] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[#FFFBF5] to-transparent z-10 pointer-events-none" />

              <div className="overflow-hidden">
                <motion.div
                  animate={{x: ["0%", "-50%"]}}
                  transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                  className="flex gap-4 w-max"
                >
                  {[...clients, ...clients].map((c, i) => (
                    <div
                      key={`${c.name}-${i}`}
                      className="flex-shrink-0 w-[200px] h-[96px] rounded-[20px] bg-white border border-[#0A1931]/5 flex items-center justify-center gap-3 shadow-[0_4px_16px_rgba(10,25,49,0.04)] px-0"
                    >
                      <img
                        src={c.img}
                        alt={c.name}
                        className="w-14 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                      <span className="font-semibold text-[13px] text-[#0A1931]/80 truncate">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {k: "Families", v: "Reconnecting children with mother tongue"},
                {
                  k: "Schools",
                  v: "Enriching curriculum with African languages",
                },
                {
                  k: "Companies",
                  v: "Building inclusive, culturally intelligent teams",
                },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-[16px] bg-white border border-[#0A1931]/5 p-5"
                >
                  <div className="font-bold text-[13px] text-[#0A1931]">
                    {item.k}
                  </div>
                  <div className="mt-1 text-[12px] leading-[1.5] text-[#0A1931]/60">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
