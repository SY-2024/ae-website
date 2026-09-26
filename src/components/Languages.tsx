import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  {
    code: 'YO',
    name: 'Yorùbá',
    native: 'Yorùbá',
    region: 'Nigeria • Benin • Togo',
    speakers: '45M speakers',
    phrase: 'Bawo ni?',
    meaning: 'How are you?',
    fact: 'Yoruba is tonal and rich in proverbs — a language where how you say it changes what you mean.',
    color: '#E9B44C',
    gradient: 'from-[#E9B44C] to-[#C8963E]',
  },
  {
    code: 'IG',
    name: 'Igbo',
    native: 'Asụsụ Igbo',
    region: 'Southeast Nigeria',
    speakers: '30M speakers',
    phrase: 'Kedu?',
    meaning: 'How are you?',
    fact: 'Igbo uses extensive proverbs and has a deep connection to storytelling and community wisdom.',
    color: '#0A1931',
    gradient: 'from-[#0A1931] to-[#162447]',
  },
  {
    code: 'HA',
    name: 'Hausa',
    native: 'Harshen Hausa',
    region: 'Nigeria • Niger • West Africa',
    speakers: '70M speakers',
    phrase: 'Sannu!',
    meaning: 'Hello!',
    fact: 'Hausa is a Chadic language and lingua franca across West Africa, with beautiful Ajami script.',
    color: '#E85D04',
    gradient: 'from-[#E85D04] to-[#D00000]',
  },
  {
    code: 'SW',
    name: 'Kiswahili',
    native: 'Kiswahili',
    region: 'East & Central Africa',
    speakers: '200M speakers',
    phrase: 'Habari?',
    meaning: 'What’s the news?',
    fact: 'Swahili is one of Africa’s most widely spoken languages and an official language of the AU.',
    color: '#2A9D8F',
    gradient: 'from-[#2A9D8F] to-[#264653]',
  },
  {
    code: 'DE',
    name: 'German',
    native: 'Deutsch',
    region: 'Germany • Austria • Switzerland',
    speakers: '95M speakers',
    phrase: 'Wie geht’s?',
    meaning: 'How are you?',
    fact: 'Our German program bridges African diaspora with opportunities in Europe — language as mobility.',
    color: '#F5EBDD',
    gradient: 'from-[#F5EBDD] to-[#E9B44C]/50',
  },
];

export default function Languages() {
  const [active, setActive] = useState(0);
  const lang = languages[active];

  return (
    <section id="languages" className="relative py-24 lg:py-32 bg-[#FFFBF5] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#0A1931]" />
              <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-[#0A1931]/60">Languages</span>
            </div>
            <h2 className="font-display text-[40px] md:text-[52px] leading-[0.9] tracking-[-0.03em] font-bold text-[#0A1931]">
              Five languages, <br />infinite connections.
            </h2>
          </div>
          <p className="max-w-[360px] text-[14px] leading-[1.7] text-[#0A1931]/60">
            Each language is a worldview. We teach not just words, but the culture, humor, and wisdom behind them.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* List */}
          <div className="space-y-2">
            {languages.map((l, i) => (
              <button
                key={l.code}
                onClick={() => setActive(i)}
                className={`group w-full text-left relative rounded-[20px] p-5 border transition-all duration-500 ${
                  active === i
                    ? 'bg-[#0A1931] border-[#0A1931] text-white shadow-[0_12px_32px_rgba(10,25,49,0.2)]'
                    : 'bg-white border-[#0A1931]/5 hover:border-[#0A1931]/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[12px] ${active === i ? 'bg-white/10 text-white' : 'bg-[#0A1931]/5 text-[#0A1931]'}`}>
                      {l.code}
                    </div>
                    <div>
                      <div className={`font-display font-bold text-[16px] leading-none ${active === i ? 'text-white' : 'text-[#0A1931]'}`}>{l.name}</div>
                      <div className={`text-[11px] mt-1 ${active === i ? 'text-white/50' : 'text-[#0A1931]/50'}`}>{l.region}</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0, opacity: active === i ? 1 : 0.3 }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] ${active === i ? 'bg-[#E9B44C] text-[#0A1931]' : 'bg-[#0A1931]/5 text-[#0A1931]'}`}
                  >
                    →
                  </motion.div>
                </div>
                {active === i && (
                  <motion.div
                    layoutId="active-lang-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[24px] bg-[#E9B44C] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="relative min-h-[520px] rounded-[32px] overflow-hidden bg-[#0A1931] p-8 lg:p-12 flex flex-col">
            <div className={`absolute inset-0 bg-gradient-to-br ${lang.gradient} opacity-[0.15]`} />
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-white/5 rounded-full blur-[80px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col h-full"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold tracking-widest uppercase text-white/70">
                      {lang.speakers} • {lang.region}
                    </div>
                    <h3 className="mt-6 font-display text-[48px] lg:text-[64px] leading-[0.9] tracking-[-0.03em] font-bold text-white">
                      {lang.name}
                      <span className="block text-[20px] font-body font-medium tracking-normal text-white/50 mt-2">{lang.native}</span>
                    </h3>
                  </div>
                  <div className="hidden md:flex w-20 h-20 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/10 items-center justify-center text-[28px] font-display font-bold text-white">
                    {lang.code}
                  </div>
                </div>

                <div className="mt-auto grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
                  <div>
                    <div className="rounded-[20px] bg-white p-6">
                      <div className="text-[11px] tracking-widest uppercase font-bold text-[#0A1931]/40">Today's Phrase</div>
                      <div className="mt-2 font-display font-bold text-[28px] text-[#0A1931]">{lang.phrase}</div>
                      <div className="text-[14px] text-[#0A1931]/60">“{lang.meaning}”</div>
                      <div className="mt-4 flex gap-2">
                        <button className="px-4 py-2 rounded-full bg-[#0A1931] text-white text-[12px] font-bold">▶ Listen</button>
                        <button className="px-4 py-2 rounded-full bg-[#0A1931]/5 text-[#0A1931] text-[12px] font-bold">Practice →</button>
                      </div>
                    </div>
                    <p className="mt-6 text-[14px] leading-[1.6] text-white/60 max-w-[420px]">{lang.fact}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-[16px] bg-white/10 backdrop-blur-md border border-white/10 p-4">
                      <div className="flex items-center gap-2 text-white/80 text-[12px] font-bold"><span className="w-5 h-5 rounded-full bg-[#E9B44C] flex items-center justify-center text-[#0A1931] text-[10px]">✓</span> Beginner friendly</div>
                    </div>
                    <div className="rounded-[16px] bg-white/10 backdrop-blur-md border border-white/10 p-4">
                      <div className="flex items-center gap-2 text-white/80 text-[12px] font-bold"><span className="w-5 h-5 rounded-full bg-[#E9B44C] flex items-center justify-center text-[#0A1931] text-[10px]">✓</span> Cultural immersion</div>
                    </div>
                    <div className="rounded-[16px] bg-[#E9B44C] p-4 flex items-center justify-between">
                      <span className="text-[13px] font-bold text-[#0A1931]">Start learning {lang.name}</span>
                      <span className="w-7 h-7 rounded-full bg-[#0A1931] text-white flex items-center justify-center text-[12px]">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
