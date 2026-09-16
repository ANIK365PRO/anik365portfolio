"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Headset, Download } from "lucide-react";
import { useAntigravity } from "@/hooks/useAntigravity";
import { RESUME_URL } from "@/lib/constants";

export function AboutSection() {
  const avatarRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const textBlobRef = useRef(null);

  useAntigravity([avatarRef, stat1Ref, stat2Ref, stat3Ref, textBlobRef]);

  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24 transition-colors duration-300 z-10 perspective-1000" id="about">

      <div className="max-w-[1280px] mx-auto w-full px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 relative">
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 plx-layer-1 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-heading mb-6 tracking-wide drop-shadow-sm dark:drop-shadow-2xl">
            About
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-brand-primary to-transparent rounded-full opacity-70"></div>
        </motion.div> */}

        <div className="text-center mb-20 plx-layer-1 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-heading mb-4 tracking-wide drop-shadow-sm dark:drop-shadow-2xl">
           About
          </h2>
          <p className=" font-semibold text-sm tracking-widest  opacity-90 drop-shadow-md">
           A Brief Introduction
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
          {/* Fluid Profile Image */}
          <div className="w-full lg:w-5/12 flex justify-center plx-layer-2">
            <div ref={avatarRef} className="image-blob-container">
              <div className="image-blob-bg"></div>
              <div className="image-blob-mask">
                <Image
                  alt="Anik Mohanta Profile"
                  className="w-full h-full object-cover scale-110"
                  src="/anik_About.jpg"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>

          {/* Fluid Content Area */}
          <div className="w-full lg:w-7/12 relative">
            {/* Floating Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-12">
              <motion.div 
                ref={stat1Ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="fluid-blob rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-8 w-40 h-40 flex flex-col items-center justify-center text-center"
              >
                <Sparkles className="text-brand-primary dark:text-[#a0c9ff] w-8 h-8 mb-2 drop-shadow-md" />
                <span className="text-2xl font-bold text-brand-heading drop-shadow-sm">1+</span>
                <span className="text-xs text-brand-text font-semibold tracking-wider"> Years Experience </span>
              </motion.div>
              <motion.div 
                ref={stat2Ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="fluid-blob rounded-[50%_50%_20%_80%/25%_80%_20%_75%] p-8 w-44 h-44 flex flex-col items-center justify-center text-center mt-8 lg:mt-0"
              >
                <Rocket className="text-brand-primary dark:text-[#97cbff] w-8 h-8 mb-2 drop-shadow-md" />
                <span className="text-2xl font-bold text-brand-heading drop-shadow-sm">10+</span>
                <span className="text-xs text-brand-text font-semibold tracking-wider">Real-world Projects</span>
              </motion.div>
              <motion.div 
                ref={stat3Ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="fluid-blob rounded-[60%_40%_30%_70%/60%_30%_70%_40%] p-8 w-36 h-36 flex flex-col items-center justify-center text-center -mt-4 lg:mt-12"
              >
                <Headset className="text-brand-accent w-8 h-8 mb-2 drop-shadow-md" />
                <span className="text-xl font-bold text-brand-heading drop-shadow-sm">15+</span>
                <span className="text-xs text-brand-text font-semibold tracking-wider">Technologies Used</span>
              </motion.div>
            </div>

            {/* Main Text Blob */}
            <motion.div 
              ref={textBlobRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="fluid-blob rounded-[40%_60%_70%_30%/40%_50%_60%_50%] p-10 md:p-14 mb-10 relative z-10 plx-layer-1"
            >
              <p className="text-brand-text leading-relaxed text-body-lg font-sans drop-shadow-sm">
               I'm a Full-Stack Developer who loves building modern, scalable web applications using the MERN stack and Next.js. I handle everything from pixel-perfect frontend UIs to secure backend databases. 
               <br></br>
                <br></br>
                Recently, I built DriveFleet, a full-stack car rental platform, and SkillSwap, a freelance marketplace with Stripe integration. I thrive on writing clean code, solving complex problems, and am currently diving deeply into TypeScript to level up my backend architecture skills!
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left plx-layer-2"
            >
              <motion.a 
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-fluid inline-flex items-center gap-3 text-white font-bold py-4 px-10"
              >
                <span className="tracking-widest text-sm uppercase drop-shadow-md">Get Resume</span>
                <Download className="w-5 h-5 drop-shadow-md" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
