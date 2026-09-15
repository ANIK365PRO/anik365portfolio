"use client";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full bg-brand-surface/40 border-t-[6px] border-brand-border pt-20 pb-12 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center gap-3">
            <img src="/my-logo.svg" alt="Anik Mohanta Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <h2 className="text-2xl font-medium text-brand-primary tracking-tight font-['Inter']">Anik Mohanta</h2>
          </div>
          <p className="text-brand-text leading-relaxed max-w-sm font-['Inter']">
            Full Stack Developer passionate about creating beautiful and functional web experiences. Bridging the gap between design and robust engineering.
          </p>
        </div>
        <div className="flex flex-col space-y-7">
          <h3 className="text-sm font-medium uppercase tracking-wider text-brand-heading font-['Inter']">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-4 font-['Inter']">
            <a className="inline-block text-brand-text hover:text-brand-accent transition-all duration-300 hover:translate-x-1" href="#about">About</a>
            <a className="inline-block text-brand-text hover:text-brand-accent transition-all duration-300 hover:translate-x-1" href="#projects">Projects</a>
            <a className="inline-block text-brand-text hover:text-brand-accent transition-all duration-300 hover:translate-x-1" href="#technologies">Services</a>
            <a className="inline-block text-brand-text hover:text-brand-accent transition-all duration-300 hover:translate-x-1" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex flex-col space-y-7">
          <h3 className="text-sm font-medium uppercase tracking-wider text-brand-heading font-['Inter']">
            Connect With Me
          </h3>
          <div className="flex space-x-6">
            <a aria-label="GitHub" className="text-brand-primary hover:text-brand-accent transition-all duration-300 hover:-translate-y-1" href="https://github.com/ANIK365PRO" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github text-[1.35rem]"></i>
            </a>
            <a aria-label="LinkedIn" className="text-brand-primary hover:text-brand-accent transition-all duration-300 hover:-translate-y-1" href="https://www.linkedin.com/in/anik-mohanta" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-[1.35rem]"></i>
            </a>
            {/* <a aria-label="Twitter X" className="text-brand-primary hover:text-brand-accent transition-all duration-300 hover:-translate-y-1" href="#">
              <i className="fa-brands fa-x-twitter text-[1.35rem]"></i>
            </a> */}
            <a aria-label="Email" className="text-brand-primary hover:text-brand-accent transition-all duration-300 hover:-translate-y-1" href="mailto:anikmohanta75@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope text-[1.35rem]"></i>
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-brand-border">
            <p className="text-xs text-brand-text tracking-wide uppercase font-medium font-['Inter']">Available for freelance opportunities</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p className="text-sm text-brand-text text-center md:text-left font-['Inter']">
          © 2026 Anik Mohanta. All rights reserved. Built with <span className="text-brand-accent font-medium">Next.js</span> &amp; <span className="text-brand-accent font-medium">Tailwind CSS</span>.
        </p>
        <button 
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-brand-border/50 text-brand-heading hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 shadow-sm"
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-chevron-up text-sm"></i>
        </button>
      </div>
    </footer>
  );
}
