import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A1931] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[-30%] left-[-10%] w-[70%] h-[70%] bg-[#E9B44C]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#E85D04]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-8"
            >
              <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-white/70">Our Vision</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] font-bold text-white text-balance"
            >
              A vibrant space where heritage is not preserved in museums, but <span className="text-[#E9B44C]">lived daily.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-5 text-[15px] leading-[1.8] text-white/60"
            >
              <p>
                Afro-European Business Services is a dynamic platform uniting Africans and Europeans, fostering connections across the globe. We create a vibrant space where people can celebrate and share African culture, heritage, and identity, while embracing global diversity.
              </p>
              <p>
                We empower Africans abroad to stay connected to their roots and carry their heritage with pride. Through cultural exchange, we aim to break stereotypes, showcase Africa's richness, and inspire communities to give back, creating better lives for those in Africa.
              </p>
              <p className="text-white/80 font-medium">
                In a globalized world, technology enables us to stay connected. We harness this to preserve traditions, promote harmony through cultural understanding, and celebrate the unique differences that unite us.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { n: '2019', l: 'Founded in Greenock, Scotland' },
                { n: '12+', l: 'Countries with learners' },
                { n: '50k+', l: 'Hours of cultural content' },
              ].map((item) => (
                <div key={item.n}>
                  <div className="font-display font-bold text-[24px] text-white">{item.n}</div>
                  <div className="mt-1 text-[11px] leading-[1.4] text-white/50 uppercase tracking-wide font-semibold">{item.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[32px] bg-[#FFFBF5] p-8 lg:p-10 shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A1931] flex items-center justify-center text-[#E9B44C] text-[20px] mb-6">“</div>
              <blockquote className="font-display text-[22px] leading-[1.4] font-medium text-[#0A1931] text-balance">
                Japa is a term most of us are familiar with. But what if leaving doesn't have to mean losing? What if technology could make heritage portable?
              </blockquote>
              <div className="mt-8 space-y-6">
                {[
                  { t: 'Preserve', d: 'Digitally archive languages at risk of fading in diaspora.' },
                  { t: 'Connect', d: 'Link families across continents through shared learning.' },
                  { t: 'Empower', d: 'Give children pride in their names, stories, and mother tongue.' },
                ].map((pillar, i) => (
                  <motion.div
                    key={pillar.t}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0A1931]/5 flex items-center justify-center text-[12px] font-bold text-[#0A1931] flex-shrink-0">0{i + 1}</div>
                    <div>
                      <div className="font-bold text-[14px] text-[#0A1931]">{pillar.t}</div>
                      <div className="text-[13px] leading-[1.5] text-[#0A1931]/60">{pillar.d}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 rounded-[16px] bg-[#E9B44C] px-5 py-3 shadow-[0_12px_32px_rgba(233,180,76,0.3)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0A1931] flex items-center justify-center text-white text-[12px]">✦</div>
                <div>
                  <div className="text-[12px] font-bold leading-none text-[#0A1931]">UNESCO Aligned</div>
                  <div className="text-[10px] text-[#0A1931]/70">Heritage preservation goals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
