"use client";

import React from 'react';

export function TechnologiesSection() {
  const coreTech = [
    { name: "JavaScript", icon: <i className="fa-brands fa-js text-yellow-400"></i> },
    { name: "React", icon: <i className="fa-brands fa-react text-cyan-400"></i> },
    { name: "Next.js", icon: <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold border border-white/20 shadow-sm">N</div> },
    { name: "Node.js", icon: <i className="fa-brands fa-node-js text-green-500"></i> },
    { name: "Express", icon: <span className="font-bold text-gray-800 dark:text-gray-200">ex</span> },
    { name: "MongoDB", icon: <i className="fa-brands fa-envira text-green-600"></i> },
    { name: "Tailwind CSS", icon: <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg> },
    { name: "Git", icon: <i className="fa-brands fa-git-alt text-orange-500"></i> },
  ];

  // We need enough items to fill the screen multiple times to make the infinite scroll seamless
  const duplicatedTech = [...coreTech, ...coreTech, ...coreTech, ...coreTech];

  return (
    <section className="w-full relative overflow-hidden py-10 lg:py-16 transition-colors duration-300 bg-brand-bg" id="technologies">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 mb-8">
        <h2 className="text-[14px] font-bold text-brand-heading uppercase tracking-widest text-center opacity-70">
          Technologies I Work With
        </h2>
      </div> */}

      <div className="w-full overflow-hidden flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee items-center gap-6 md:gap-8 pl-6 md:pl-8">
          {duplicatedTech.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 md:gap-3 px-5 py-2.5 rounded-full bg-brand-surface border border-brand-border shadow-sm hover:shadow-md hover:border-brand-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {tech.icon}
              </div>
              <span className="text-[14px] md:text-[15px] font-semibold text-brand-text group-hover:text-brand-heading transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
