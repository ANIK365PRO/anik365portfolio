export function ProjectsSection() {
  return (
    <section className="w-full relative overflow-hidden bg-brand-bg text-brand-text font-['Manrope'] py-16 lg:py-24 transition-colors duration-300" id="projects" data-purpose="projects-section">
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
          {/* Project Card 1: GameHub */}
          <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="h-48 w-full relative overflow-hidden bg-brand-bg border-b border-brand-border">
              <img 
                alt="GameHub Preview" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMBvEjsrUpH_WP17fk8N3OW4EUKjWuerdbrqBXFybVliDBXGr2Al7pa6OIEEXf8Uzl3ecDR4-jRqmLQls0RUlO3mIL0xVBhRWt3H1Sp2NgR6FWC3tMxSS6CvKJ7J-FkEricdbU5XvoIQ3T_2v3xYoVJMP4qHyL_mKRyYdPpPzjxSh_zqV3i68uQSNgOXuvPKfpt6vH38koyoej6HBPwBfb6lW5pOjG-CUnfWPfqOX44FD1REfpII0"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold text-brand-heading mb-4">
                GameHub: The Ultimate Livestreaming Platform
              </h3>
              <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-text mb-4 flex-grow">
                This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP streaming, real-time chat, viewer count, streamer dashboard, chat controls, and advanced search with SSR for speed.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">TypeScript</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Next.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Node.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Socket.IO</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">RTMP/WHIP</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">PostgreSQL</span>
              </div>
              <div className="flex gap-4 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-brand-accent text-[#0F172A] hover:opacity-90 transition-opacity font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold">
                  <span className="material-symbols-outlined text-[18px]">info</span>Details
                </button>

              </div>
            </div>
          </div>

          {/* Project Card 2: Google Docs 2.0 */}
          <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="h-48 w-full relative overflow-hidden bg-brand-bg border-b border-brand-border">
              <img 
                alt="Google Docs 2.0 Preview" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY9c-IfZ68VjoeqB1iBebxZqwmpQn1eXUsrnUO2XbXn2SBnpURNjYXpi18Wy9aHgWJHvjPsN1m4AcCKMyx8TJgDD7-ySQDuYICd7ufvEuOfL2FsYHXRY7dChX4H7f1ds2GDaItrvmiTJeustDCGAEteeK4cPSay3SoS71vTobYdaDf1gif4tiktKGD0lBc7gPcjEH7KTIPDb0bnjFsy5HKXWqTQNX2B3RqMbvN4V_hCzurVCxXQY9i"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold text-brand-heading mb-4">
                Google Docs 2.0: Next-Gen Real-Time Collaboration
              </h3>
              <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-text mb-4 flex-grow">
                Google Docs Clone is a full-stack app built with Next.js 15, Shadcn UI, and Tailwind CSS, offering real-time editing, collaboration, comments, mentions, notifications, customizable templates, secure auth, and export options.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">TypeScript</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Next.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Node.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">TipTap</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Tailwind CSS</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Firebase</span>
              </div>
              <div className="flex gap-4 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-brand-accent text-[#0F172A] hover:opacity-90 transition-opacity font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold">
                  <span className="material-symbols-outlined text-[18px]">info</span>Details
                </button>

              </div>
            </div>
          </div>

          {/* Project Card 3: Google Drive Clone */}
          <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
            <div className="h-48 w-full relative overflow-hidden bg-brand-bg border-b border-brand-border">
              <img 
                alt="Google Drive Clone Preview" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92caCj0MHleA0oC_bVeVen-BJQucclp0G9udzfGSVOe1E9m8ZQ0jxT1ydZl9QTpNEJVAMSlwgMnhfrFfsat4hbAbehdD3wrxqtsVcSVsNxsmq6aBERwZxkKbTH47OqwN81FW8Iv2TidvbSZKL845YoDxl89FysTRl2Ad3VbDRxpb5lhnF-vZBdoY9o0S6vII8R36J2_g_1u8Swv2jYDQ5sCorNYehvTg53HTasFqJM-LJwUYYO1zf"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold text-brand-heading mb-4">
                Google Drive Clone: The Ultimate Platform for File Sharing
              </h3>
              <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-text mb-4 flex-grow">
                Google Drive Clone is a modern file storage platform built with Next.js, Shadcn UI, and TypeScript. It offers secure uploads, role-based permissions, file organization, real-time updates, and seamless syncing across devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Next.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">React</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Node.js</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Convex</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Clerk</span>
                <span className="px-3 py-1 bg-brand-bg text-brand-text rounded-full font-['Manrope'] text-[12px] leading-[16px] border border-brand-border">Tailwind CSS</span>
              </div>
              <div className="flex gap-4 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-brand-accent text-[#0F172A] hover:opacity-90 transition-opacity font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold">
                  <span className="material-symbols-outlined text-[18px]">info</span>Details
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
