"use client";

import React, { useState } from 'react';

export function QualificationSection() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      title: "Freelance Full-Stack Developer",
      subtitle: "Self-Employed / Independent",
      date: "2026 - Present",
      description: "Built modern, scalable web applications including 'SkillSwap' (a freelance marketplace) | 'DriveFleet' (a car rental platform) | '5 Star-Tiles-Gallery'(a tiles buying shop) using Next.js, React, Node.js, Express, and MongoDB."
    }
  ];

  const educationData = [
    {
      title: "level 1 web development course",
      subtitle: "Programming Hero, Dhaka",
      date: "2025 - 2026"
    },
     {
      title: "B.B.A in Accounting",
      subtitle: "Shahjalal College, Hobiganj",
      date: "2018 - 2023"
    },
    {
      title: "HSC",
      subtitle: "Paglapir School & College, Rangpur",
      date: "2016 - 2017"
    },
    {
      title: "SSC",
      subtitle: "Horidevpur High School, Rangpur",
      date: "2010 - 2015"
    }
  ];

  const currentData = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24 transition-colors duration-300" id="qualification" data-purpose="qualification-section">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-heading mb-4">
            Qualification
          </h2>
          <p className="font-sans text-[18px] leading-[28px] opacity-80 tracking-widest text-brand-text">
            My personal journey
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <div 
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 font-heading text-[24px] leading-[32px] font-semibold cursor-pointer transition-colors ${activeTab === 'experience' ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'}`}
          >
            <span className="material-symbols-outlined text-[28px]">work</span>
            Experience
          </div>
          <div 
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 font-heading text-[24px] leading-[32px] font-semibold cursor-pointer transition-colors ${activeTab === 'education' ? 'text-brand-primary' : 'text-brand-text hover:text-brand-primary'}`}
          >
            <span className="material-symbols-outlined text-[28px]">school</span>
            Education
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto py-6 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-6 md:before:left-1/2 before:w-[2px] before:bg-brand-border before:opacity-50 md:before:-translate-x-1/2">
          
          {currentData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`relative w-full md:w-1/2 mb-8 group flex md:block flex-col md:flex-row pl-12 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                <div className={`absolute top-0 w-4 h-4 bg-brand-primary ring-4 ring-brand-bg rounded-full z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(15,76,129,0.6)] ${isLeft ? 'left-6 md:left-auto md:-right-[8px]' : 'left-6 md:-left-[8px]'}`}></div>
                
                <div className="bg-brand-surface p-6 rounded-xl border border-brand-border/40 hover:border-brand-primary/50 transition-all duration-300 group-hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <h3 className="font-heading text-[24px] leading-[32px] font-semibold text-brand-primary mb-1">{item.title}</h3>
                  <p className="font-sans text-[16px] leading-[24px] text-brand-heading mb-3">{item.subtitle}</p>

                  <div className={`flex items-center gap-2 text-brand-text font-mono text-[12px] leading-[16px] opacity-80 ${isLeft ? 'md:justify-end' : ''} ${item.description ? 'mb-4' : ''}`}>
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {item.date}
                  </div>

                  {item.description && (
                    <p className={`font-sans text-sm leading-relaxed text-brand-text opacity-90 ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
