export function TechnologiesSection() {
  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24 transition-colors duration-300" id="technologies">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-4 uppercase tracking-tight">Technologies</h2>
          <p className="text-lg md:text-xl text-[#ffc300] font-bold uppercase tracking-widest">My Tech Stack</p>
        </div>

        {/* Technologies Grid container */}
        <div className="flex flex-col items-center gap-12">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {/* Tech Item: JavaScript */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-js text-4xl text-yellow-400"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">JavaScript</span>
            </div>

            {/* Tech Item: TypeScript */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <span className="text-blue-500 font-bold text-2xl leading-none block border-2 border-blue-500 px-1.5 pt-1.5 bg-white">TS</span>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">TypeScript</span>
            </div>

            {/* Tech Item: React */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-react text-4xl text-cyan-400"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">React</span>
            </div>

            {/* Tech Item: Next.js */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white font-bold text-lg relative z-10">N</span>
                </div>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Next.js</span>
            </div>

            {/* Tech Item: Node.js */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-node-js text-4xl text-green-500"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Node.js</span>
            </div>

            {/* Tech Item: Express */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-2xl">ex</span>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Express</span>
            </div>

            {/* Tech Item: NestJS */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-cat text-4xl text-red-500"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">NestJS</span>
            </div>

            {/* Tech Item: MongoDB */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-envira text-4xl text-green-600"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">MongoDB</span>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {/* Tech Item: PostgreSQL */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-database text-4xl text-blue-400"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">PostgreSQL</span>
            </div>

            {/* Tech Item: Prisma */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Prisma</span>
            </div>

            {/* Tech Item: Docker */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-docker text-4xl text-blue-500"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Docker</span>
            </div>

            {/* Tech Item: Kubernetes */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-dharmachakra text-4xl text-blue-500"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Kubernetes</span>
            </div>

            {/* Tech Item: Tailwind CSS */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider text-center">Tailwind CSS</span>
            </div>

            {/* Tech Item: Git */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-git-alt text-4xl text-orange-500"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">Git</span>
            </div>

            {/* Tech Item: AWS */}
            <div className="flex flex-col items-center gap-4 w-24">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a3156] border-2 border-[#ffc300]/50 shadow-[0_0_20px_rgba(255,195,0,0.25)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:border-[#ffc300] flex items-center justify-center hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-aws text-4xl text-orange-400"></i>
              </div>
              <span className="text-sm font-bold text-brand-text uppercase tracking-wider">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
