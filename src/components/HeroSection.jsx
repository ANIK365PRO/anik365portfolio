"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Globe, 
  Share2, 
  Send, 
  Download,
  Briefcase,
  BrainCircuit,
  CircleCheck,
  MousePointerClick
} from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
import { useOrbitalAnimation } from "@/hooks/useOrbitalAnimation";

export function HeroSection() {
  const { containerRef, card1Ref, card2Ref, card3Ref } = useOrbitalAnimation();

  // Framer Motion variants for left content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* SideNavBar (Desktop Only) */}
      <motion.aside
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="hidden md:flex flex-col items-center py-8 gap-y-6 fixed left-8 top-1/2 -translate-y-1/2 rounded-full w-16 bg-brand-surface/40 backdrop-blur-xl border border-brand-border/50 shadow-xl z-40"
      >
        <SocialLink icon={<LinkedinIcon className="w-5 h-5" />} label="LinkedIn" />
        <SocialLink icon={<GithubIcon className="w-5 h-5" />} label="GitHub" />
        <SocialLink icon={<Globe className="w-5 h-5" />} label="Web" />
        <SocialLink icon={<Share2 className="w-5 h-5" />} label="Share" />
      </motion.aside>

      {/* Main Content Canvas */}
      <main className="relative flex-1 flex items-center justify-center pt-24 pb-20 px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 max-w-container-max mx-auto z-10 w-full min-h-screen">
        {/* Background Ambient Effect */}
        <div className="hero-glow"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 w-full items-center">
          
          {/* Text Content (Top/Left Column) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left space-y-6 z-10"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-headline-md font-headline-md text-brand-text">
                Hey, I&apos;m
              </p>
              <h1 className="text-headline-lg-mobile md:text-headline-40 xl:text-display-xl font-display-xl text-brand-heading tracking-tight">
                Anik Mohanta{" "}
                <motion.span 
                  className="inline-block origin-bottom-right cursor-default"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  👋
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
              <h2 className="text-headline-sm font-headline-sm text-brand-primary dark:text-brand-accent min-h-[32px] flex items-center justify-center md:justify-start">
                I am a&nbsp;<TypewriterEffect words={["Web Developer", "Frontend Developer", "React Developer", "Next-js Developer"]} />
              </h2>
              <p className="text-body-md md:text-body-lg font-body-lg text-brand-text leading-relaxed">
                🚀 Turning ideas into Stunning Websites 💻<br />
                | Available for projects and collaborations 🌟
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto bg-brand-accent text-brand-heading dark:text-[#6d5200] hover:bg-[#e0ab00] transition-colors px-8 py-4 rounded-full text-label-md font-label-md flex items-center justify-center gap-3 font-bold shadow-lg hover:shadow-xl duration-200"
              >
                Say Hello
                <Send className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors px-8 py-4 rounded-full text-label-md font-label-md md:hidden flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.button>
            </motion.div>
            
            {/* Mobile Socials */}
            <motion.div variants={itemVariants} className="flex md:hidden items-center gap-4 pt-2">
              <SocialLinkMobile icon={<GithubIcon className="w-6 h-6" />} label="GitHub" />
              <SocialLinkMobile icon={<LinkedinIcon className="w-6 h-6" />} label="LinkedIn" />
              <SocialLinkMobile icon={<Globe className="w-6 h-6" />} label="Web" />
            </motion.div>
          </motion.div>

          {/* Visual Content (Bottom/Right Column) */}
          <div 
            ref={containerRef}
            className="md:col-span-5 relative flex justify-center items-center mt-12 md:mt-0 z-10 h-[400px] md:h-[450px] lg:h-[500px]"
          >
            {/* Circular Frame */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full glass-panel flex items-center justify-center p-2 shadow-[0_0_40px_rgba(15,76,129,0.3)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden border border-brand-border/50 bg-brand-surface relative group">
                <Image
                  alt="Nur Adnan Professional Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  src="/profile.jpg"
                  width={384}
                  height={384}
                  priority
                />
                {/* Brand Color Tint Overlay */}
                <div className="absolute inset-0 bg-brand-primary mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                {/* Inner subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/20 dark:from-brand-bg/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Floating Badges using GSAP & Framer Motion for hover */}
            
            {/* Badge 1: Experience */}
            <div ref={card1Ref} className="absolute top-4 left-0 md:top-10 md:-left-12 origin-top-left z-20">
              <StatCard 
                icon={<Briefcase className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />} 
                value="3" 
                label={<>Years of<br />Experience</>} 
              />
            </div>

            {/* Badge 2: Problem Solving */}
            <div ref={card2Ref} className="absolute top-16 right-0 md:top-20 md:-right-12 origin-top-right z-20">
              <StatCard 
                icon={<BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-brand-accent" />} 
                value="120" 
                label={<>Problem<br />Solving</>} 
              />
            </div>

            {/* Badge 3: Projects */}
            <div ref={card3Ref} className="absolute bottom-4 right-4 md:bottom-10 md:-right-8 origin-bottom-right z-20">
              <StatCard 
                icon={<CircleCheck className="w-5 h-5 md:w-6 md:h-6 text-green-500" />} 
                value="150" 
                label={<>Finished<br />Projects</>} 
              />
            </div>
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <div className="w-6 h-10 rounded-full border-2 border-brand-text flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-brand-accent rounded-full"
            />
          </div>
          <span className="text-label-sm font-label-sm text-brand-text flex items-center gap-1">
            Scroll Down <MousePointerClick className="w-4 h-4" />
          </span>
        </motion.div>
      </main>
    </>
  );
}

// Sub-components
function SocialLink({ icon, label }) {
  return (
    <motion.a
      aria-label={label}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="text-brand-text hover:text-brand-accent p-3 hover:bg-brand-border/50 transition-colors duration-300 rounded-full flex items-center justify-center"
      href="#"
    >
      {icon}
    </motion.a>
  );
}

function SocialLinkMobile({ icon, label }) {
  return (
    <motion.a
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-border/30 text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md"
      href="#"
    >
      {icon}
    </motion.a>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="glass-panel rounded-xl p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-lg bg-brand-surface/70"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-border/50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-[20px] md:text-headline-sm font-headline-sm text-brand-heading font-bold leading-none">
          {value}
        </p>
        <p className="text-[10px] md:text-label-sm font-label-sm text-brand-text leading-tight mt-1">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

function TypewriterEffect({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, currentText.length - 1)
          : currentWord.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-w-[120px]">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-[2px] w-[2px] h-[1em] bg-brand-accent align-middle"
      />
    </span>
  );
}
