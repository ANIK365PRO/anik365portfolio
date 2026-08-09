import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Footer with Social Links */}
      <footer className="w-full bg-brand-surface/80 backdrop-blur-md py-8 border-t border-brand-border/50 mt-auto z-20 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-body-md text-brand-text text-center md:text-left">
            © 2024 Nur Adnan. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a
              aria-label="LinkedIn"
              className="text-brand-text hover:text-brand-accent bg-brand-surface hover:bg-brand-border/30 p-3 rounded-full transition-all duration-300 flex items-center justify-center shadow-md border border-brand-border/50 hover:scale-105"
              href="#"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              aria-label="GitHub"
              className="text-brand-text hover:text-brand-accent bg-brand-surface hover:bg-brand-border/30 p-3 rounded-full transition-all duration-300 flex items-center justify-center shadow-md border border-brand-border/50 hover:scale-105"
              href="#"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a
              aria-label="Twitter"
              className="text-brand-text hover:text-brand-accent bg-brand-surface hover:bg-brand-border/30 p-3 rounded-full transition-all duration-300 flex items-center justify-center shadow-md border border-brand-border/50 hover:scale-105"
              href="#"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
