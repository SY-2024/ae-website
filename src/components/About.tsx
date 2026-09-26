import {motion} from "framer-motion";
import AboutImg from "../assets/about.jpeg";
import ODurowoju from "../assets/durowoju.jpg";
const values = [
  {
    title: "Rooted",
    desc: "Grounded in authentic African knowledge systems and oral traditions.",
  },
  {
    title: "Modern",
    desc: "Delivered through cutting-edge digital platforms and pedagogy.",
  },
  {
    title: "Global",
    desc: "Designed for diaspora families, schools, and global citizens.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#FFFBF5] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-[120px]">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#0A1931]" />
              <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-[#0A1931]/60">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
              className="font-display text-[40px] md:text-[52px] leading-[0.95] tracking-[-0.03em] font-bold text-[#0A1931] text-balance"
            >
              We meet you where you are, and help you go{" "}
              <em className="font-[400] text-[#C8963E]">further.</em>
            </motion.h2>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="mt-8 relative rounded-[24px] overflow-hidden aspect-[4/3] bg-[#F5EBDD] group"
            >
              <img
                src={AboutImg}
                alt="African community learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/20 to-transparent" />
              {/* Decorative border */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 rounded-[16px] pointer-events-none" />
            </motion.div>
          </div>

          {/* Right */}
          <div>
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="space-y-6 text-[17px] leading-[1.8] text-[#0A1931]/70"
            >
              <p className="text-[20px] leading-[1.6] text-[#0A1931] font-medium text-balance">
                Afro-European Business Services is a dynamic platform uniting
                Africans and Europeans, fostering connections that transcend
                geography.
              </p>
              <p>
                We support learners of all ages in exploring African languages
                like{" "}
                <strong className="text-[#0A1931]">
                  Yoruba, Igbo, Kiswahili and Hausa
                </strong>
                , paired with global languages such as German. Our approach is
                not just about vocabulary — it's about identity, belonging, and
                confidence.
              </p>
              <p>
                In a globalized world, technology enables us to stay connected.
                We harness this to preserve traditions, promote harmony through
                cultural understanding, and celebrate the unique differences
                that unite us. We empower Africans abroad to stay connected to
                their roots and carry their heritage with pride.
              </p>
              <p>
                Through cultural exchange, we aim to break stereotypes, showcase
                Africa's richness, and inspire communities to give back,
                creating better lives for those on the continent and in
                diaspora.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.8}}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: i * 0.1 + 0.2}}
                  className="group flex flex-col gap-2 p-3 rounded-[20px] bg-white border border-[#0A1931]/5 hover:border-[#0A1931]/10 hover:shadow-[0_12px_32px_rgba(10,25,49,0.06)] transition-all duration-500"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0A1931] text-white flex items-center justify-center font-display font-bold text-[14px] group-hover:bg-[#E9B44C] group-hover:text-[#0A1931] transition-colors duration-300">
                      0{i + 1}
                    </div>
                    <h4 className="font-display font-bold text-[18px] text-[#0A1931]">
                      {v.title}
                    </h4>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[1.6] text-[#0A1931]/80">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.5}}
              className="mt-12 p-8 rounded-[24px] bg-[#0A1931] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#E9B44C]/20 rounded-full blur-[40px]" />
              <div className="relative">
                <div className="text-[14px] tracking-widest uppercase font-bold text-[#E9B44C]/80 mb-3">
                  Our Promise
                </div>
                <blockquote className="font-display text-[22px] leading-[1.4] font-medium text-balance">
                  "We don't just teach languages. We restore connections, build
                  confidence, and prepare the next generation to thrive anywhere
                  without forgetting where they come from."
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={ODurowoju}
                    alt=""
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[13px] font-bold">O. Durowoju</div>
                    <div className="text-[11px] text-white/60">
                      Founder & Director
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
