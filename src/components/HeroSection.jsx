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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const footerElement = document.getElementById("footer");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSidebarVisible(!entry.isIntersecting);
      },
      { rootMargin: "100px", threshold: 0 }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

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
        animate={{ opacity: isSidebarVisible ? 1 : 0, x: isSidebarVisible ? 0 : -50 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: isSidebarVisible ? "auto" : "none" }}
        className="hidden md:flex flex-col items-center py-8 gap-y-6 fixed left-8 top-1/2 -translate-y-1/2 rounded-full w-16 bg-brand-surface/40 backdrop-blur-xl border border-brand-border/50 shadow-xl z-40"
      >
        <SocialLink icon={<LinkedinIcon className="w-5 h-5" />} label="LinkedIn" href="https://www.linkedin.com/in/anik-mohanta" />
        <SocialLink icon={<GithubIcon className="w-5 h-5" />} label="GitHub" href="https://github.com/ANIK365PRO" />
        <SocialLink icon={<i className="fa-solid fa-envelope text-[1.35rem]"></i>} label="Email" href="mailto:anikmohanta75@gmail.com" />
        {/* <SocialLink icon={<Globe className="w-5 h-5" />} label="Web" /> */}
        {/* <SocialLink icon={<Share2 className="w-5 h-5" />} label="Share" /> */}
      </motion.aside>

      {/* Main Content Canvas */}
      <main className="relative flex-1 flex items-center justify-center pt-24 pb-20 px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 max-w-container-max mx-auto z-10 w-full ">
        {/* Background Ambient Effect */}
        <div className="hero-glow"></div>
        
       <div className="w-full">
  <div
    className="
      grid
      grid-cols-1
      lg:grid-cols-12
      gap-8
      lg:gap-6
      xl:gap-10
      w-full
      items-center
    "
  >
    {/* =========================================================
        TEXT CONTENT
    ========================================================= */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        lg:col-span-7
        flex
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-left
        space-y-5
        sm:space-y-6
        z-10
        w-full
        min-w-0
      "
    >
      {/* Greeting + Name */}
      <motion.div
        variants={itemVariants}
        className="space-y-2 w-full"
      >
        <p
          className="
            text-headline-md
            font-headline-md
            text-brand-text
          "
        >
          Hey, I&apos;m
        </p>

        <h1
          className="
            text-headline-lg-mobile
            sm:text-headline-40
            lg:text-headline-40
            xl:text-display-xl
            font-display-xl
            text-brand-heading
            tracking-tight
            leading-tight
            break-words
          "
        >
          Anik Mohanta{" "}

          <motion.span
            className="
              inline-block
              origin-bottom-right
              cursor-default
            "
            whileHover={{ rotate: 15 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            👋
          </motion.span>
        </h1>
      </motion.div>

      {/* =========================================================
          ROLE + DESCRIPTION
      ========================================================= */}
      <motion.div
        variants={itemVariants}
        className="
          space-y-3
          sm:space-y-4
          max-w-xl
          w-full
        "
      >
        {/* Role */}
        <h2
          className="
            text-headline-sm
            font-headline-sm
            text-brand-primary
            dark:text-brand-accent
            min-h-[32px]
            flex
            flex-wrap
            items-center
            justify-center
            lg:justify-start
            leading-relaxed
          "
        >
          <span className="shrink-0">
            I am a&nbsp;
          </span>

          <span className="inline-flex min-w-0">
            <TypewriterEffect
              words={[
                "Full-Stack Developer",
                "Frontend Developer",
                "React Developer",
                "Next-js Developer",
                "Backend Developer",
              ]}
            />
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            text-body-md
            sm:text-body-lg
            font-body-lg
            text-brand-text
            leading-relaxed
          "
        >
          🚀 Turning ideas into Stunning Websites 💻
          <br />
          | Available for projects and collaborations 🌟
        </p>
      </motion.div>

      {/* =========================================================
          CTA BUTTONS
      ========================================================= */}
      <motion.div
        variants={itemVariants}
        className="
          pt-2
          sm:pt-4
          flex
          flex-col
          sm:flex-row
          w-full
          sm:w-auto
          gap-3
          sm:gap-4
        "
      >
        {/* Say Hello */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const contactSection =
              document.getElementById("contact");

            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth",
              });
            } else {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }
          }}
          className="
            w-full
            sm:w-auto
            bg-brand-accent
            text-brand-heading
            dark:text-[#6d5200]
            hover:bg-[#e0ab00]
            transition-colors
            px-7
            sm:px-8
            py-3.5
            sm:py-4
            rounded-full
            text-label-md
            font-label-md
            flex
            items-center
            justify-center
            gap-3
            font-bold
            shadow-lg
            hover:shadow-xl
            duration-200
            whitespace-nowrap
          "
        >
          Say Hello

          <Send className="w-5 h-5" />
        </motion.button>

        {/* Resume */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            w-full
            sm:w-auto
            border
            border-brand-border
            text-brand-text
            hover:border-brand-primary
            hover:text-brand-primary
            transition-colors
            px-7
            sm:px-8
            py-3.5
            sm:py-4
            rounded-full
            text-label-md
            font-label-md
            lg:hidden
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <Download className="w-5 h-5" />

          Resume
        </motion.button>

      </motion.div>

      {/* =========================================================
          MOBILE SOCIALS
      ========================================================= */}
      <motion.div
        variants={itemVariants}
        className="
          flex
          md:hidden
          items-center
          justify-center
          gap-5
          pt-1
        "
      >
        <SocialLinkMobile
          icon={<GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
          label="GitHub"
          href="https://github.com/ANIK365PRO"
        />

        <SocialLinkMobile
          icon={<LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/anik-mohanta"
        />

        <SocialLinkMobile
          icon={<i className="fa-solid fa-envelope text-[1.25rem] sm:text-[1.35rem]" />}
          label="Email"
          href="mailto:anikmohanta75@gmail.com"
        />
      </motion.div>
    </motion.div>

    {/* =========================================================
        VISUAL / PROFILE SECTION
    ========================================================= */}
    <div
      ref={containerRef}
      className="
        lg:col-span-5
        relative
        flex
        flex-col
        items-center
        justify-center
        mt-2
        sm:mt-6
        lg:mt-0
        z-10
        w-full
        min-w-0

        /* Mobile */
        min-h-[330px]

        /* Tablet */
        sm:min-h-[400px]

        /* Desktop */
        lg:h-[500px]
        lg:min-h-0
      "
    >
      {/* =======================================================
          PROFILE IMAGE
      ======================================================= */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          relative
          w-52
          h-52

          sm:w-64
          sm:h-64

          md:w-72
          md:h-72

          lg:w-80
          lg:h-80

          xl:w-96
          xl:h-96

          rounded-full
          glass-panel
          flex
          items-center
          justify-center
          p-2

          shadow-[0_0_40px_rgba(15,76,129,0.3)]

          shrink-0
        "
      >
        <div
          className="
            w-full
            h-full
            rounded-full
            overflow-hidden
            border
            border-brand-border/50
            bg-brand-surface
            relative
            group
          "
        >
          <Image
            alt="Anik Mohanta Professional Portrait"
            className="
              w-full
              h-full
              object-cover
              object-top
              transition-transform
              duration-700
              group-hover:scale-105
            "
            src="/profile.jpg"
            width={384}
            height={384}
            priority
            sizes="
              (max-width: 640px) 208px,
              (max-width: 768px) 256px,
              (max-width: 1024px) 288px,
              (max-width: 1280px) 320px,
              384px
            "
          />

          {/* Brand Color Tint */}
          <div
            className="
              absolute
              inset-0
              bg-brand-primary
              mix-blend-overlay
              opacity-20
              group-hover:opacity-0
              transition-opacity
              duration-500
            "
          />

          {/* Inner Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-brand-bg/20
              dark:from-brand-bg/80
              via-transparent
              to-transparent
            "
          />
        </div>
      </motion.div>

      {/* =======================================================
          MOBILE / TABLET STATS
          These stay below the image on small screens.
      ======================================================= */}
      <div
        className="
          flex
          sm:hidden
          items-center
          justify-center
          gap-3
          w-full
          mt-5
          px-2
        "
      >
        {/* Experience */}
        <div
          ref={card1Ref}
          className="relative z-20"
        >
          <StatCard
            icon={
              <Briefcase className="w-4 h-4 text-brand-primary" />
            }
            value="1+"
            label={
              <>
                Years
                <br />
                Experience
              </>
            }
          />
        </div>

        {/* Projects */}
        <div
          ref={card3Ref}
          className="relative z-20"
        >
          <StatCard
            icon={
              <CircleCheck className="w-4 h-4 text-green-500" />
            }
            value="10+"
            label={
              <>
                Finished
                <br />
                Projects
              </>
            }
          />
        </div>
      </div>

      {/* =======================================================
          TABLET STATS
      ======================================================= */}
      <div
        className="
          hidden
          sm:flex
          lg:hidden
          items-center
          justify-center
          gap-8
          mt-6
          w-full
        "
      >
        {/* Experience */}
        <div
          ref={card1Ref}
          className="relative z-20"
        >
          <StatCard
            icon={
              <Briefcase className="w-5 h-5 text-brand-primary" />
            }
            value="1"
            label={
              <>
                Year of
                <br />
                Experience
              </>
            }
          />
        </div>

        {/* Projects */}
        <div
          ref={card3Ref}
          className="relative z-20"
        >
          <StatCard
            icon={
              <CircleCheck className="w-5 h-5 text-green-500" />
            }
            value="66"
            label={
              <>
                Finished
                <br />
                Projects
              </>
            }
          />
        </div>
      </div>

      {/* =======================================================
          DESKTOP FLOATING STATS
      ======================================================= */}

      {/* Experience */}
      <div
        ref={card1Ref}
        className="
          hidden
          lg:block
          absolute
          bottom-10
          left-0
          xl:-left-8
          origin-top-left
          z-20
        "
      >
        <StatCard
          icon={
            <Briefcase className="w-5 h-5 xl:w-6 xl:h-6 text-brand-primary" />
          }
          value="1"
          label={
            <>
              Year of
              <br />
              Experience
            </>
          }
        />
      </div>

      {/* Projects */}
      <div
        ref={card3Ref}
        className="
          hidden
          lg:block
          absolute
          bottom-10
          right-0
          xl:-right-8
          origin-bottom-right
          z-20
        "
      >
        <StatCard
          icon={
            <CircleCheck className="w-5 h-5 xl:w-6 xl:h-6 text-green-500" />
          }
          value="66"
          label={
            <>
              Finished
              <br />
              Projects
            </>
          }
        />
      </div>
    </div>
  </div>
</div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className=" flex mt-6 absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer"
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
function SocialLink({ icon, label, href }) {
  return (
    <motion.a
      aria-label={label}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="text-brand-text hover:text-brand-accent p-3 hover:bg-brand-border/50 transition-colors duration-300 rounded-full flex items-center justify-center"
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </motion.a>
  );
}

function SocialLinkMobile({ icon, label, href }) {
  return (
    <motion.a
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-border/30 text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md"
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
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
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-border/50 flex items-center justify-center">
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
