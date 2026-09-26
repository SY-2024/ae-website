import {motion, useScroll, useTransform} from "framer-motion";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import HomeBg from "../assets/homebg.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToSection = (hash: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({behavior: "smooth", block: "start"});
      window.history.pushState(null, "", hash);
      setActiveHash(hash);
    }
    setIsOpen(false);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0A1931]"
    >
      {/* Background */}
      <motion.div style={{scale}} className="absolute inset-0">
        <div className="absolute inset-0 z-10">
          <img src={HomeBg} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#E9B44C]/20 blur-[120px] z-10" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#E85D04]/15 blur-[120px] z-10" />
      </motion.div>

      <motion.div
        style={{y, opacity}}
        className="relative z-20 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pt-[120px] pb-[80px]"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#E9B44C] animate-pulse" />
              <span className="text-[11px] tracking-[0.15em] font-semibold text-white uppercase">
                Trusted by 2,500+ learners across UK & Europe
              </span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1]}}
              className="font-display font-[700] text-[44px] md:text-[64px] lg:text-[76px] leading-[0.9] tracking-[-0.04em] text-white text-balance"
            >
              Building cultural
              <span className="relative inline-block ml-3">
                <span className="relative z-10 text-[#E9B44C]">bridges</span>
              </span>
              <br />
              through education
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.5}}
              className="mt-6 text-[17px] md:text-[19px] leading-[1.6] text-white max-w-[560px] text-balance"
            >
              Afro European is more than a brand — it's a living cultural bridge
              connecting African heritage with global opportunities through
              immersive, modern learning experiences.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.6}}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("#services")}
                className="group relative inline-flex items-center gap-3 bg-[#E9B44C] text-[#0A1931] px-8 py-[18px] rounded-full font-bold text-[14px] tracking-wide overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Explore Our Services</span>
                <span className="relative z-10 w-8 h-8 rounded-full bg-[#0A1931] text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  →
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{y: "100%"}}
                  whileHover={{y: 0}}
                  transition={{duration: 0.4}}
                />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({behavior: "smooth"})
                }
                className="inline-flex items-center gap-2 px-8 py-[18px] rounded-full border border-white/20 text-white font-semibold text-[14px] tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <span className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                  ▶
                </span>
                Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 0.8}}
              className="mt-16 grid grid-cols-3 gap-6 max-w-[480px] border-t border-white/10 pt-8"
            >
              {[
                {k: "5+", v: "African Languages"},
                {k: "2.5k+", v: "Active Learners"},
                {k: "98%", v: "Satisfaction Rate"},
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display font-bold text-[28px] text-white leading-none">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[11px] tracking-widest uppercase text-white/50 font-semibold">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating Cards */}
          <div className="relative lg:h-[640px] hidden lg:block">
            {/* Main card */}
            <motion.div
              initial={{opacity: 0, y: 40, rotate: -2}}
              animate={{opacity: 1, y: 0, rotate: -1}}
              transition={{duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1]}}
              className="absolute top-[8%] right-[5%] w-[340px] rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0A1931] flex items-center justify-center text-white text-[12px] font-bold">
                    Y
                  </div>
                  <div>
                    <div className="text-[12px] font-bold leading-none">
                      Yorùbá Basics
                    </div>
                    <div className="text-[10px] text-black/50">
                      Level 1 • 12 lessons
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#E9B44C]/20 text-[10px] font-bold text-[#0A1931]">
                  LIVE
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 rounded-full bg-black/5 overflow-hidden">
                  <motion.div
                    initial={{width: 0}}
                    animate={{width: "68%"}}
                    transition={{duration: 1.2, delay: 1.2}}
                    className="h-full bg-[#0A1931]"
                  />
                </div>
                <div className="flex gap-2">
                  {["Bawo ni?", "Ẹ ku owurọ", "O dabo"].map((phrase) => (
                    <span
                      key={phrase}
                      className="px-2.5 py-1 rounded-full bg-[#FFFBF5] border border-black/10 text-[10px] font-medium"
                    >
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-[11px] text-black/60">
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                <span>Next session with Dr. Ade in 2h</span>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 40, rotate: 2}}
              animate={{opacity: 1, y: 0, rotate: 1.5}}
              transition={{duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1]}}
              className="absolute top-[42%] left-[8%] w-[300px] rounded-[20px] bg-[#E9B44C] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] tracking-widest uppercase font-bold opacity-60">
                    Cultural Insight
                  </div>
                  <div className="font-display font-bold text-[18px] leading-tight mt-1 text-[#0A1931]">
                    Why proverbs matter in Igbo storytelling
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0A1931] text-white flex items-center justify-center text-[14px]">
                  ✦
                </div>
              </div>
              <p className="mt-3 text-[12px] leading-[1.5] text-[#0A1931]/70">
                “Proverbs are the horses of conversation. When conversation is
                lost, a proverb is used to find it.”
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${10 + i}`}
                      className="w-6 h-6 rounded-full border-2 border-[#E9B44C]"
                      alt=""
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold">
                  +127 learners discussing
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 1.1}}
              className="absolute bottom-[8%] right-[18%] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                🌍
              </div>
              <div>
                <div className="text-white text-[13px] font-bold leading-none">
                  Life in the UK Prep
                </div>
                <div className="text-white/60 text-[11px]">
                  12 new resources
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#FFFBF5] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
