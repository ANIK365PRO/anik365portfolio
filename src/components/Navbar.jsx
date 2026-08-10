"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#technologies" },
  { name: "Qualification", href: "#qualification" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/95 backdrop-blur-[12px] border-b border-brand-border shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="flex justify-between items-center h-16 md:h-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-[1440px] mx-auto gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Image src="/my-logo.svg" width={48} height={48} alt="Anik Mohanta Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="text-headline-sm font-headline-sm font-bold text-brand-secondary hidden sm:block whitespace-nowrap">
            Anik Mohanta
          </span>
        </motion.div>

        {/* Desktop Nav Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-4 xl:gap-6"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`text-label-md font-label-md whitespace-nowrap hover:bg-brand-border/50 rounded-lg transition-all duration-300 px-3 py-2 ${
                index === 0
                  ? "text-brand-accent border-b-2 border-brand-accent pb-1 scale-95"
                  : "text-brand-text hover:text-brand-heading"
              }`}
              href={link.href}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Action Buttons & Mobile Menu Toggle */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 md:gap-4"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex bg-brand-primary text-white hover:bg-brand-primary/90 transition-colors px-6 py-2.5 rounded-full text-label-md font-label-md items-center gap-2 shadow-md"
          >
            <Download className="w-[18px] h-[18px]" />
            Download Resume
          </motion.button>
          
          <motion.div variants={itemVariants}>
            <ThemeToggle />
          </motion.div>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-brand-text hover:text-brand-heading p-2 rounded-full hover:bg-brand-border/50 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-surface border-t border-brand-border/50 px-4 sm:px-6 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col space-y-2 py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className={`text-label-md font-label-md rounded-lg transition-all duration-300 px-3 py-2 ${
                    index === 0
                      ? "text-brand-accent bg-brand-border/30"
                      : "text-brand-text hover:text-brand-heading hover:bg-brand-border/30"
                  }`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-brand-primary text-white hover:bg-brand-primary/90 transition-colors px-6 py-2.5 rounded-full text-label-md font-label-md flex items-center justify-center gap-2 shadow-md w-full"
              >
                <Download className="w-[18px] h-[18px]" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
