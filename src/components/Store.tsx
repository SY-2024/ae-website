import {motion} from "framer-motion";
import {ShieldCheck, Truck, Mail} from "lucide-react";

// Temporary product photos — replace the files in src/assets/store/ with real ones
import GermanTextbookImg from "../assets/store/german-a1-textbook.jpg";
import MandarinTextbookImg from "../assets/store/mandarin-hsk1-textbook.jpg";
import MandarinFlashcardsImg from "../assets/store/mandarin-hsk1-flashcards.jpg";
import GermanFlashcardsImg from "../assets/store/german-a1-flashcards.jpg";

type Product = {
  name: string;
  type: "Textbook" | "Flashcard Booklet";
  desc: string;
  price: string;
  breakdown: string;
  image: string;
  imageAlt: string;
  stripeUrl: string;
};

const products: Product[] = [
  {
    name: "A1 German Beginner's Textbook",
    type: "Textbook",
    desc: "Your complete first step into German — grammar, vocabulary and everyday conversation, structured lesson by lesson for absolute beginners.",
    price: "£13.99",
    breakdown: "£10 textbook + £3.99 postage",
    image: GermanTextbookImg,
    imageAlt: "A1 German Beginner's Textbook",
    stripeUrl: "https://buy.stripe.com/28E5kD1KbgED2JI3mv18c02",
  },
  {
    name: "HSK 1 Mandarin Textbook",
    type: "Textbook",
    desc: "Build a solid foundation in Mandarin with characters, pinyin and practical dialogues aligned to the HSK 1 syllabus.",
    price: "£13.99",
    breakdown: "£10 textbook + £3.99 postage",
    image: MandarinTextbookImg,
    imageAlt: "HSK 1 Mandarin Textbook",
    stripeUrl: "https://buy.stripe.com/28E7sLfB17433NMg9h18c03",
  },
  {
    name: "HSK 1 Mandarin Flashcard Booklet",
    type: "Flashcard Booklet",
    desc: "Master essential HSK 1 vocabulary on the go — characters, pinyin and English meanings in a handy booklet for quick daily review.",
    price: "£9.99",
    breakdown: "£6 flashcards + £3.99 postage",
    image: MandarinFlashcardsImg,
    imageAlt: "HSK 1 Mandarin Flashcard Booklet",
    stripeUrl: "https://buy.stripe.com/3cIdR93Sj3RRcki1en18c05",
  },
  {
    name: "A1 German Vocabulary Flashcard Booklet",
    type: "Flashcard Booklet",
    desc: "Learn and recall core German A1 words anywhere — portable flashcards with articles, plurals and English translations.",
    price: "£9.99",
    breakdown: "£6 flashcards + £3.99 postage",
    image: GermanFlashcardsImg,
    imageAlt: "A1 German Vocabulary Flashcard Booklet",
    stripeUrl: "https://buy.stripe.com/28E3cv4Wn887fwug9h18c04",
  },
];

export default function Store() {
  return (
    <section
      id="store"
      className="relative py-24 lg:py-32 bg-[#F5EBDD] overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#E9B44C]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1931]/5 border border-[#0A1931]/10 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E9B44C]" />
              <span className="text-[11px] tracking-[0.18em] font-bold uppercase text-[#0A1931]/60">
                The Store
              </span>
            </motion.div>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.7, ease: [0.16, 1, 0.3, 1]}}
              className="font-display text-[40px] md:text-[56px] leading-[0.95] tracking-[-0.03em] font-bold text-[#0A1931] max-w-[560px] text-balance"
            >
              Take the lesson{" "}
              <em className="font-normal text-[#C8963E]">home with you.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.2}}
            className="max-w-[380px] text-[15px] leading-[1.7] text-[#0A1931]/60"
          >
            Our textbooks and flashcard booklets are made to sit right
            alongside your classes — so practice continues long after the
            lesson ends. Every price includes UK postage.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{y: -6}}
              className="group flex flex-col rounded-[24px] bg-white border border-[#0A1931]/5 overflow-hidden shadow-[0_8px_32px_rgba(10,25,49,0.05)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                    p.type === "Textbook"
                      ? "bg-[#E9B44C] text-[#0A1931]"
                      : "bg-[#0A1931] text-white"
                  }`}
                >
                  {p.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display font-bold text-[18px] leading-[1.25] text-[#0A1931] mb-2">
                  {p.name}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[#0A1931]/60 flex-1">
                  {p.desc}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display font-bold text-[24px] text-[#0A1931]">
                    {p.price}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#0A1931]/40">
                    GBP
                  </span>
                </div>
                <p className="text-[11px] text-[#0A1931]/45 mt-0.5">
                  {p.breakdown}
                </p>

                <a
                  href={p.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 bg-[#0A1931] text-white px-5 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-colors duration-300 hover:bg-[#162447]"
                >
                  Buy Now
                  <span className="w-5 h-5 rounded-full bg-[#E9B44C] flex items-center justify-center text-[#0A1931] text-[11px] transition-transform duration-300 group-hover:rotate-45">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{delay: 0.2}}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#0A1931]/60">
            <ShieldCheck size={16} className="text-[#C8963E]" />
            Secure checkout via Stripe
          </span>
          <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#0A1931]/60">
            <Truck size={16} className="text-[#C8963E]" />
            UK postage included in price
          </span>
          <a
            href="mailto:info@afroeuropean.uk"
            className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#0A1931]/60 hover:text-[#0A1931] transition-colors"
          >
            <Mail size={16} className="text-[#C8963E]" />
            Questions? info@afroeuropean.uk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
