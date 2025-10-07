import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#modules", label: "Modul" },
    { href: "#generator", label: "AI Generator" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#faq", label: "FAQ" },
  ];

  const menuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween" as const, duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { type: "tween" as const, duration: 0.2 },
  },
};


  return (
    <>
      <header
        className={clsx(
          "fixed z-50 transition-all duration-300 mx-auto",
          isScrolled
            ? "top-0 mt-4 left-8 right-8 py-4 bg-white/90 backdrop-blur-md shadow-xl rounded-xl w-[calc(100%-4rem)]"
            : "top-0 mt-4 left-0 right-0 py-5 bg-gradient-to-b from-black/70 to-transparent w-full rounded-none shadow-none"
        )}
      >
        <div className="flex items-center justify-between px-4 md:px-10 max-w-[1600px] mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2 select-none">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain rounded-md"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Jago N8N
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={clsx(
              "hidden md:flex items-center space-x-8 font-medium transition-colors duration-500",
              isScrolled ? "!text-black" : "!text-white"
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative group transition-colors duration-300",
                  isScrolled ? "hover:text-blue-600" : "hover:text-blue-300"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tombol Desktop */}
          <div className="hidden md:flex">
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 font-semibold text-lg hover:opacity-90 transition text-white"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Tombol Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={clsx(
                "text-3xl p-1 transition-colors duration-300",
                isScrolled ? "!text-black" : "!text-white"
              )}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* 📱 Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Konten */}
            <motion.div
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white backdrop-blur-2xl shadow-2xl p-6 flex flex-col text-black"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header Mobile */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-2">
                  <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                  <span className="text-lg font-bold">Jago N8N</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl p-1"
                >
                  <X />
                </button>
              </div>

              {/* Menu Items Mobile */}
              <div className="flex flex-col text-lg font-medium space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative py-3 transition-colors text-xl font-semibold border-b border-black/20 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Tombol Mobile */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition"
                >
                  Daftar Sekarang
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
