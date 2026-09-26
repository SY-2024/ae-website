import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1931] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E9B44C]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Top CTA */}
        <div className="py-16 lg:py-20 border-b border-white/10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="font-display text-[36px] md:text-[48px] leading-[0.9] tracking-[-0.03em] font-bold text-balance"
            >
              Let's keep culture{" "}
              <span className="text-[#E9B44C]">alive, together.</span>
            </motion.h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-white/60 max-w-[480px]">
              Whether you're a parent, educator, or organisation — if you value
              inclusion, culture, and global relevance, you'll feel at home with
              us.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#E9B44C] text-[#0A1931] font-bold text-[14px] hover:bg-white transition-colors"
            >
              Start Learning Today →
            </Link>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-[14px] hover:bg-white/10 transition-colors">
              Book a Call
            </button>
          </div>
        </div>

        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-[12px] bg-white flex items-center justify-center">
                <img src={Logo} width={100} alt="" />
              </div>
              <div>
                <div className="font-display font-bold text-[16px] leading-none">
                  AFRO EUROPEAN
                </div>
                <div className="text-[10px] tracking-[0.18em] font-semibold text-white/50 uppercase">
                  Business Services Ltd
                </div>
              </div>
            </div>
            <p className="mt-6 text-[13px] leading-[1.7] text-white/50 max-w-[280px]">
              Building cultural bridges through education. Language, heritage,
              and community for the diaspora and beyond.
            </p>
            <div className="mt-6 text-[13px] leading-[1.6] text-white/70">
              11 William Street,
              <br />
              Greenock, PA15 1BT, UK
              <br />
              <a
                href="mailto:hello@afroeuropean.uk"
                className="text-[#E9B44C] hover:text-white transition-colors"
              >
                hello@afroeuropean.uk
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-bold uppercase text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({behavior: "smooth"})
                  }
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({behavior: "smooth"})
                  }
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#languages")
                      ?.scrollIntoView({behavior: "smooth"})
                  }
                  className="hover:text-white transition-colors"
                >
                  Languages
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#team")
                      ?.scrollIntoView({behavior: "smooth"})
                  }
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-bold uppercase text-white/40 mb-4">
              Programs
            </h4>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Yoruba for Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Igbo Mastery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  German & Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Animation Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Life in the UK
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-bold uppercase text-white/40 mb-4">
              Connect
            </h4>
            <div className="flex gap-2 mb-6">
              <a
                href="https://www.linkedin.com/company/afro-european-business-services-ltd"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A1931] transition-colors"
              >
                <span className="text-[12px] font-bold">in</span>
              </a>
              <a
                href="https://www.instagram.com/heartofafrica2025/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A1931] transition-colors"
              >
                <span className="text-[12px]">◍</span>
              </a>
              <a
                href="mailto:hello@afroeuropean.uk"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A1931] transition-colors"
              >
                <span className="text-[12px]">@</span>
              </a>
            </div>
            <div className="text-[11px] leading-[1.6] text-white/40">
              Crafted with heritage and care.
              <br />
              Greenock • Lagos • London
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-6">
            <span>
              ©{new Date().getFullYear()} Afro European Business Services Ltd.
              All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
