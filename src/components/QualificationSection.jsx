export function QualificationSection() {
  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24 transition-colors duration-300" id="qualification" data-purpose="qualification-section">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-heading mb-4">
          Qualification
        </h2>
        <p className="font-['Manrope'] text-[18px] leading-[28px] opacity-80 uppercase tracking-widest text-brand-text">
          My personal journey
        </p>
      </div>

      <div className="flex justify-center gap-8 mb-12">
        <div className="flex items-center gap-2 text-brand-primary font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold cursor-pointer">
          <span className="material-symbols-outlined text-[28px]">work</span>
          Experience
        </div>
        <div className="flex items-center gap-2 text-brand-text hover:text-brand-primary transition-colors font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold cursor-pointer">
          <span className="material-symbols-outlined text-[28px]">school</span>
          Education
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto py-6 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-6 md:before:left-1/2 before:w-[2px] before:bg-brand-border before:opacity-50 md:before:-translate-x-1/2">
        
        {/* Item 1 (Left aligned on desktop) */}
        <div className="relative w-full md:w-1/2 md:pr-8 mb-8 group flex md:block flex-col md:flex-row pl-12 md:pl-0 md:text-right">
          <div className="absolute left-6 md:left-auto md:-right-[8px] top-0 w-4 h-4 bg-brand-primary ring-4 ring-brand-bg rounded-full z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(15,76,129,0.6)]"></div>
          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border/40 hover:border-brand-primary/50 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold text-brand-primary mb-1">B.B.A in Accounting</h3>
            <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading mb-2">Shajalal Collage , Hobijong - Institute</p>
            <div className="flex items-center gap-2 text-brand-text font-['Manrope'] text-[12px] leading-[16px] md:justify-end opacity-80">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              2018 - 2023
            </div>
          </div>
        </div>

        {/* Item 2 (Right aligned on desktop) */}
        <div className="relative w-full md:w-1/2 md:ml-auto md:pl-8 mb-8 md:mb-12 group flex md:block flex-col md:flex-row pl-12 md:pl-0">
          <div className="absolute left-6 md:-left-[8px] top-0 w-4 h-4 bg-brand-primary ring-4 ring-brand-bg rounded-full z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(15,76,129,0.6)]"></div>
          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border/40 hover:border-brand-primary/50 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold text-brand-primary mb-1">HSC</h3>
            <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading mb-2">Paglapir School & College, Rangpur - Institute</p>
            <div className="flex items-center gap-2 text-brand-text font-['Manrope'] text-[12px] leading-[16px] opacity-80">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              2016 - 2017
            </div>
          </div>
        </div>

        {/* Item 3 (Left aligned on desktop) */}
        <div className="relative w-full md:w-1/2 md:pr-8 mb-8 md:mb-12 md:text-right group flex md:block flex-col md:flex-row pl-12 md:pl-0">
          <div className="absolute left-6 md:left-auto md:-right-[8px] top-0 w-4 h-4 bg-brand-primary ring-4 ring-brand-bg rounded-full z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(15,76,129,0.6)]"></div>
          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border/40 hover:border-brand-primary/50 transition-all duration-300 group-hover:-translate-y-1">
            <h3 className="font-['Hanken_Grotesk'] text-[24px] leading-[32px] font-semibold text-brand-primary mb-1">SSC</h3>
            <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading mb-2">Horidevpur High School, Rangpur - Institute</p>
            <div className="flex items-center gap-2 text-brand-text font-['Manrope'] text-[12px] leading-[16px] md:justify-end opacity-80">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              2010 - 2015
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
