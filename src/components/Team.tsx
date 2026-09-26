import {motion} from "framer-motion";
import ODurowoju from "../assets/durowoju.jpg";
import Sodiya from "../assets/sodiya.jpg";
import Ebuka from "../assets/ebuka.jpeg";

const team = [
  {
    name: "O. Durowoju",
    role: "Owner & Director",
    bio: "Visionary leader bridging African heritage with global education. 15+ years in cultural entrepreneurship and community building across UK & Nigeria.",
    color: "#0A1931",
    initials: "OD",
    location: "Greenock, UK",
    img: ODurowoju,
  },
  {
    name: "O. Sodiya",
    role: "Digital Project Manager",
    bio: "Tech strategist passionate about edtech and African languages. Builds platforms that make learning accessible and joyful.",
    color: "#E9B44C",
    initials: "OS",
    location: "Lagos, NG",
    img: Sodiya,
  },
  {
    name: "Dr Ebuka Oraegbunam",
    role: "Igbo Language Instructor",
    bio: "PhD in Igbo linguistics, storyteller and cultural custodian. Dedicated to preserving Igbo through modern pedagogy.",
    color: "#E85D04",
    initials: "EO",
    location: "Enugu, NG",
    img: Ebuka,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 lg:py-32 bg-[#F5EBDD] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <motion.div
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1931]/5 border border-[#0A1931]/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A1931]" />
            <span className="text-[11px] tracking-[0.18em] font-bold uppercase text-[#0A1931]/60">
              Our Team
            </span>
          </motion.div>
          <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
            className="font-display text-[40px] md:text-[52px] leading-[0.9] tracking-[-0.03em] font-bold text-[#0A1931] text-balance"
          >
            Culture-shapers, educators, storytellers.
          </motion.h2>
          <motion.p
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.1}}
            className="mt-4 text-[15px] leading-[1.7] text-[#0A1931]/60"
          >
            A diverse, cross-continental team grounded in African values and
            energized by global impact. Each voice united by one mission: make
            African culture visible, accessible, and empowering — everywhere.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.08, duration: 0.6}}
              whileHover={{y: -8}}
              className="group relative rounded-[28px] bg-white p-2 shadow-[0_8px_32px_rgba(10,25,49,0.06)] border border-[#0A1931]/5 overflow-hidden"
            >
              {/* Image is now on top – using the imported asset */}
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                {/* Location badge + arrow */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-wide uppercase text-[#0A1931]">
                    {member.location}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A1931] group-hover:rotate-45 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-[18px] leading-tight text-[#0A1931]">
                  {member.name}
                </h3>
                <div className="mt-1 text-[12px] font-semibold tracking-wide uppercase text-[#E9B44C]">
                  {member.role}
                </div>
                <p className="mt-3 text-[13px] leading-[1.6] text-[#0A1931]/60 line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.3}}
          className="mt-12 rounded-[24px] bg-[#0A1931] text-white p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="flex -space-x-3">
            {team.map((t, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[#0A1931] flex items-center justify-center font-bold text-[12px] text-white overflow-hidden"
                style={{background: t.color}}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0A1931] flex items-center justify-center text-[#0A1931] font-bold text-[12px]">
              +12
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="font-display font-bold text-[18px]">
              Join our growing community of educators
            </div>
            <div className="text-[13px] text-white/60 mt-1">
              We’re always looking for passionate language custodians and
              cultural innovators.
            </div>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#E9B44C] text-[#0A1931] text-[13px] font-bold whitespace-nowrap">
            View Open Roles →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
