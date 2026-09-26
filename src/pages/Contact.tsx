import {motion} from "framer-motion";
import {useState} from "react";
import {Mail, MapPin, Clock, ArrowRight} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    interest: "Language Learning",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] pt-[80px]">
      {/* Header */}
      <section className="relative py-16 lg:py-24 bg-[#0A1931] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#E9B44C]/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className="max-w-[720px]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E9B44C] animate-pulse" />
              <span className="text-[11px] tracking-[0.18em] font-bold uppercase text-white/70">
                Contact Us
              </span>
            </div>
            <h1 className="font-display text-[44px] md:text-[64px] leading-[0.9] tracking-[-0.03em] font-bold text-white">
              Let's start a{" "}
              <span className="text-[#E9B44C]">conversation.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-[1.6] text-white/60 max-w-[520px]">
              Whether you want to enroll your child, partner as a school, or
              build a cultural learning platform — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="rounded-[32px] bg-white border border-[#0A1931]/5 p-8 lg:p-10 shadow-[0_16px_48px_rgba(10,25,49,0.06)]"
            >
              <h2 className="font-display font-bold text-[24px] text-[#0A1931]">
                Leave us a message
              </h2>
              <p className="mt-2 text-[14px] text-[#0A1931]/60">
                We typically respond within 4 hours during UK business hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] tracking-widest uppercase font-bold text-[#0A1931]/60">
                      Your Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      placeholder="Amara Johnson"
                      className="mt-2 w-full px-4 py-3.5 rounded-[14px] bg-[#FFFBF5] border border-[#0A1931]/10 focus:border-[#0A1931] focus:outline-none text-[14px] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-widest uppercase font-bold text-[#0A1931]/60">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({...form, email: e.target.value})
                      }
                      placeholder="amara@email.com"
                      className="mt-2 w-full px-4 py-3.5 rounded-[14px] bg-[#FFFBF5] border border-[#0A1931]/10 focus:border-[#0A1931] focus:outline-none text-[14px] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase font-bold text-[#0A1931]/60">
                    I'm interested in
                  </label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Language Learning",
                      "School Partnership",
                      "Custom Platform",
                      "Seminars",
                      "Children Courses",
                      "Life in UK",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({...form, interest: opt})}
                        className={`px-3 py-2.5 rounded-full text-[12px] font-semibold border transition-all ${
                          form.interest === opt
                            ? "bg-[#0A1931] text-white border-[#0A1931]"
                            : "bg-[#FFFBF5] text-[#0A1931]/70 border-[#0A1931]/10 hover:border-[#0A1931]/20"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase font-bold text-[#0A1931]/60">
                    Your Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({...form, message: e.target.value})
                    }
                    placeholder="Tell us about your goals, your children, your school, or your idea..."
                    rows={5}
                    className="mt-2 w-full px-4 py-3.5 rounded-[14px] bg-[#FFFBF5] border border-[#0A1931]/10 focus:border-[#0A1931] focus:outline-none text-[14px] resize-none transition-colors"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{scale: 1.01}}
                  whileTap={{scale: 0.99}}
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0A1931] text-white font-bold text-[14px] tracking-wide flex items-center justify-center gap-2 hover:bg-[#162447] transition-colors"
                >
                  {sent ? (
                    <>
                      <span className="w-5 h-5 rounded-full bg-[#E9B44C] flex items-center justify-center text-[#0A1931] text-[12px]">
                        ✓
                      </span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info */}
            <div className="space-y-6">
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="rounded-[24px] bg-[#0A1931] text-white p-8"
              >
                <h3 className="font-display font-bold text-[20px]">
                  Contact Information
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-[12px] tracking-widest uppercase font-bold text-white/40">
                        Headquarters
                      </div>
                      <div className="mt-1 text-[14px] leading-[1.6] text-white/80">
                        11 William Street,
                        <br />
                        Greenock, PA15 1BT, United Kingdom
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[12px] tracking-widest uppercase font-bold text-white/40">
                        Email
                      </div>
                      <a
                        href="mailto:hello@afroeuropean.uk"
                        className="mt-1 block text-[14px] text-[#E9B44C] hover:text-white transition-colors"
                      >
                        hello@afroeuropean.uk
                      </a>
                      <a
                        href="mailto:info@afroeuropean.uk"
                        className="text-[13px] text-white/60"
                      >
                        info@afroeuropean.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-[12px] tracking-widest uppercase font-bold text-white/40">
                        Hours
                      </div>
                      <div className="mt-1 text-[14px] text-white/80">
                        Mon–Fri: 9am – 6pm GMT
                        <br />
                        Sat: 10am – 2pm GMT
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-[16px] bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-[12px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Average response time: 2.3 hours
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
                className="rounded-[24px] overflow-hidden border border-[#0A1931]/10 h-[280px] bg-[#F5EBDD] relative"
              >
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=11%20William%20Street,%20Greenock,%20Scotland%20PA15%201BT%20GB+(Afro%20European)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Map"
                  className="grayscale-[0.3] contrast-[1.1]"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-[12px] bg-white/90 backdrop-blur-md border border-black/5 px-4 py-2.5 flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#0A1931]">
                    Find us in Greenock, Scotland
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#0A1931] text-white">
                    Open Map →
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
