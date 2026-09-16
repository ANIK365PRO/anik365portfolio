export function ProjectsSection() {
  return (
    <section className="w-full relative overflow-hidden bg-brand-bg text-brand-text font-sans py-16 lg:py-24 transition-colors duration-300" id="projects" data-purpose="projects-section">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-heading mb-4">
            Projects
          </h2>
          <p className="text-[18px] leading-[28px] opacity-80 max-w-2xl mx-auto mb-10 text-brand-text">
            Recent Projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Project Card 1: SkillSwap */}
          <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="h-48 w-full relative overflow-hidden bg-brand-bg border-b border-brand-border">
              <img
                alt="SkillSwap Freelance Micro-Task Platform Preview"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                src="/images/skillswap-cover.png"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-heading text-[24px] leading-[32px] font-semibold text-brand-heading mb-4">
                SkillSwap — Freelance Micro-Task Platform
              </h3>

              <p className="font-sans text-[16px] leading-[24px] text-brand-text mb-4 flex-grow">
                A full-stack freelance micro-task marketplace where clients can post
                tasks and freelancers can discover jobs, submit proposals, manage
                projects, and track their earnings.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] border border-brand-border">Next.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] border border-brand-border">React</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] border border-brand-border">Node.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] border border-brand-border">MongoDB</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] border border-brand-border">Better Auth</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] border border-brand-border">Stripe</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                <a
                  href="https://skillswap-client-a10-m63.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-brand-accent text-[#0F172A] hover:opacity-90 transition-opacity font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square text-[13px]"></i>
                </a>
                <a
                  href="https://github.com/ANIK365PRO/skillswap-client-a10-m63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-transparent border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  <i className="fa-brands fa-github text-[14px]"></i>
                  GitHub
                </a>
                <a
                  href="https://github.com/ANIK365PRO/skillswap-server-a10-m63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-transparent border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  <i className="fa-brands fa-github text-[14px]"></i>
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2: DriveFleet */}
          <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="h-48 w-full relative overflow-hidden bg-brand-bg border-b border-brand-border">
              <img 
                alt="DriveFleet Preview" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="/images/drivefleet-cover.png"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-heading text-[24px] leading-[32px] font-semibold text-brand-heading mb-4">
                DriveFleet — Car Rental Platform
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-brand-text mb-4 flex-grow">
                A comprehensive full-stack car rental application featuring secure authentication, booking workflows, and a responsive UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">Next.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">Express.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">MongoDB</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">Tailwind CSS</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a
                  href="https://drivefleet-a9-m55.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-brand-accent text-[#0F172A] hover:opacity-90 transition-opacity font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square text-[13px]"></i>
                </a>
                <a
                  href="https://github.com/ANIK365PRO/DriveFleet-a9-m55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-transparent border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  <i className="fa-brands fa-github text-[14px]"></i>
                  GitHub
                </a>
                <a
                  href="https://github.com/ANIK365PRO/DriveFleet-server-a9-m55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-transparent border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  <i className="fa-brands fa-github text-[14px]"></i>
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3: Tiles Gallery */}
          <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="h-48 w-full relative overflow-hidden bg-brand-bg border-b border-brand-border">
              <img 
                alt="Tiles Gallery Preview" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="/images/tiles-gallery-cover.png"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-heading text-[24px] leading-[32px] font-semibold text-brand-heading mb-4">
                Tiles Gallery — Aesthetic Showcase
              </h3>
              <p className="font-sans text-[16px] leading-[24px] text-brand-text mb-4 flex-grow">
                A modern Next.js tile gallery featuring dynamic search, user profile management, and secure Google authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">Next.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">BetterAuth</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">MongoDB</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-mono text-[12px] leading-[16px] border border-brand-border">HeroUI</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <a
                  href="https://5star-tiles-gallery-b13-a8-m48.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-brand-accent text-[#0F172A] hover:opacity-90 transition-opacity font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square text-[13px]"></i>
                </a>
                <a
                  href="https://github.com/ANIK365PRO/5star-tiles-gallery-b13-a8-m48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-transparent border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors font-mono text-[14px] font-semibold whitespace-nowrap"
                >
                  <i className="fa-brands fa-github text-[14px]"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
