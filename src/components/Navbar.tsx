import {useState, useEffect} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";
import Logo from "../assets/logo.png";

const navLinks = [
  {name: "Home", href: "/", hash: "#home"},
  {name: "About", href: "/", hash: "#about"},
  {name: "Services", href: "/", hash: "#services"},
  {name: "Languages", href: "/", hash: "#languages"},
  {name: "Team", href: "/", hash: "#team"},
  {name: "Contact", href: "/contact"},
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [location]);

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
    <>
      <motion.header
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-[#FFFBF5]/80 glass shadow-[0_8px_32px_rgba(10,25,49,0.08)] border-b border-[#0A1931]/5"
            : "bg-[#FFFBF5]/80 glass border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={Logo} width={100} alt="" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A1931]/5 rounded-full p-1">
            {navLinks.map((link) => {
              const isContact = link.href === "/contact";
              const isActive = isContact
                ? location.pathname === "/contact"
                : location.pathname === "/" && activeHash === link.hash;

              if (isContact) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-[#0A1931]/70 hover:text-[#0A1931]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-[#0A1931] rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.hash!)}
                  className={`relative px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-[#0A1931]/70 hover:text-[#0A1931]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#0A1931] rounded-full"
                      transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-[#0A1931] text-white px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide flex items-center gap-2"
            >
              <span className="relative z-10">Start Learning</span>
              <motion.span
                className="relative z-10 w-5 h-5 rounded-full bg-[#E9B44C] flex items-center justify-center text-[#0A1931]"
                whileHover={{rotate: 45}}
              >
                →
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-[#162447]"
                initial={{y: "100%"}}
                whileHover={{y: 0}}
                transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
              />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#0A1931] text-white flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{rotate: -90, opacity: 0}}
                  animate={{rotate: 0, opacity: 1}}
                  exit={{rotate: 90, opacity: 0}}
                  transition={{duration: 0.2}}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{rotate: 90, opacity: 0}}
                  animate={{rotate: 0, opacity: 1}}
                  exit={{rotate: -90, opacity: 0}}
                  transition={{duration: 0.2}}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className="fixed inset-0 bg-[#0A1931]/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{type: "spring", damping: 30, stiffness: 300}}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-[#FFFBF5] z-50 lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.15)] flex flex-col"
            >
              <div className="h-[80px] px-6 flex items-center justify-between border-b border-[#0A1931]/10">
                <span className="font-display font-bold">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#0A1931]/10 flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{opacity: 0, x: 20}}
                      animate={{opacity: 1, x: 0}}
                      transition={{delay: i * 0.05 + 0.1}}
                    >
                      {link.href === "/contact" ? (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between py-4 text-[22px] font-display font-medium border-b border-[#0A1931]/10"
                        >
                          {link.name}
                          <span className="text-[#E9B44C]">→</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.hash!)}
                          className="w-full flex items-center justify-between py-4 text-[22px] font-display font-medium border-b border-[#0A1931]/10 text-left"
                        >
                          {link.name}
                          <span className="text-[#0A1931]/30">→</span>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-6">
                  <div className="p-5 rounded-[20px] bg-[#0A1931] text-white">
                    <p className="font-display text-[18px] leading-tight mb-2">
                      Ready to reconnect with your roots?
                    </p>
                    <p className="text-[13px] text-white/60 mb-4">
                      Join 2,500+ learners preserving culture through language.
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 bg-[#E9B44C] text-[#0A1931] px-5 py-2.5 rounded-full text-[13px] font-bold"
                    >
                      Get Started <span>→</span>
                    </Link>
                  </div>
                  <p className="text-[11px] tracking-widest text-[#0A1931]/40 uppercase">
                    11 William Street, Greenock PA15 1BT
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
