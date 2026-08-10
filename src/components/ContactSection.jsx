export function ContactSection() {
  return (
    <section className="w-full relative overflow-hidden bg-brand-bg text-brand-text font-['Manrope'] py-16 lg:py-24 transition-colors duration-300" id="contact" data-purpose="contact-section">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          <h1 className="font-['Hanken_Grotesk'] text-[48px] leading-[56px] font-bold tracking-tight text-brand-heading mb-2">
            Contact Us
          </h1>
          <p className="font-['Manrope'] text-[18px] leading-[28px] text-brand-text">
            Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] font-bold text-brand-heading mb-2">
                Get in touch today
              </h2>
              <p className="font-['Manrope'] text-[16px] leading-[24px] text-brand-text max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-brand-accent transition-colors duration-200">mail</span>
                <a className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading hover:text-brand-accent transition-colors duration-200" href="mailto:google@gmail.com">
                  google@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-brand-accent transition-colors duration-200">call</span>
                <a className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading hover:text-brand-accent transition-colors duration-200" href="tel:+9230000000">
                  +92 30000000
                </a>
              </div>
              <div className="flex items-start gap-4 group cursor-default">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-brand-accent transition-colors duration-200 mt-1">location_on</span>
                <span className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading">
                  Lahore, Punjab,<br/>Pakistan
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <span className="material-symbols-outlined text-brand-primary group-hover:text-brand-accent transition-colors duration-200">chat</span>
                <a className="font-['Manrope'] text-[16px] leading-[24px] text-brand-heading hover:text-brand-accent transition-colors duration-200" href="https://wa.me/9230000000">
                  +92 30000000
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-brand-surface/40 backdrop-blur-md border border-brand-accent/20 rounded-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(248,190,0,0.15)]">
            <form action="#" className="flex flex-col gap-6" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name Field */}
                <div className="flex flex-col gap-1">
                  <label className="font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold text-brand-text" htmlFor="name">Name</label>
                  <div className="relative rounded-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-brand-primary/15 focus-within:border-brand-primary">
                    <input 
                      className="w-full bg-brand-bg border border-brand-border text-brand-heading font-['Manrope'] text-[16px] leading-[24px] rounded-lg px-4 py-2 focus:outline-none focus:border-brand-primary focus:ring-0 placeholder-brand-text/50 transition-colors duration-200" 
                      id="name" 
                      name="name" 
                      placeholder="John Carter" 
                      type="text"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1">
                  <label className="font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold text-brand-text" htmlFor="email">Email</label>
                  <div className="relative rounded-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-brand-primary/15 focus-within:border-brand-primary">
                    <input 
                      className="w-full bg-brand-bg border border-brand-border text-brand-heading font-['Manrope'] text-[16px] leading-[24px] rounded-lg px-4 py-2 focus:outline-none focus:border-brand-primary focus:ring-0 placeholder-brand-text/50 transition-colors duration-200" 
                      id="email" 
                      name="email" 
                      placeholder="example@email.com" 
                      type="email"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-1">
                  <label className="font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold text-brand-text" htmlFor="phone">Phone</label>
                  <div className="relative rounded-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-brand-primary/15 focus-within:border-brand-primary">
                    <input 
                      className="w-full bg-brand-bg border border-brand-border text-brand-heading font-['Manrope'] text-[16px] leading-[24px] rounded-lg px-4 py-2 focus:outline-none focus:border-brand-primary focus:ring-0 placeholder-brand-text/50 transition-colors duration-200" 
                      id="phone" 
                      name="phone" 
                      placeholder="(123) 456 - 789" 
                      type="tel"
                    />
                  </div>
                </div>

                {/* Project Brief / Attachment Field */}
                <div className="flex flex-col gap-1">
                  <label className="font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold text-brand-text" htmlFor="file-upload">Project Brief / Attachment</label>
                  <div className="relative rounded-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-brand-primary/15 focus-within:border-brand-primary">
                    <div className="w-full bg-brand-bg border border-brand-border border-dashed text-brand-heading font-['Manrope'] text-[16px] leading-[24px] rounded-lg px-4 py-2 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-brand-border/50 transition-colors duration-200 relative">
                      <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="file-upload" name="attachment" type="file" />
                      <span className="material-symbols-outlined text-brand-primary">attach_file</span>
                      <span className="text-brand-text font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold">Upload File</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1">
                <label className="font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold text-brand-text" htmlFor="message">Message</label>
                <div className="relative rounded-lg transition-shadow duration-200 h-32 focus-within:ring-2 focus-within:ring-brand-primary/15 focus-within:border-brand-primary">
                  <textarea 
                    className="w-full h-full bg-brand-bg border border-brand-border text-brand-heading font-['Manrope'] text-[16px] leading-[24px] rounded-lg px-4 py-2 focus:outline-none focus:border-brand-primary focus:ring-0 placeholder-brand-text/50 resize-none transition-colors duration-200" 
                    id="message" 
                    name="message" 
                    placeholder="Please type your message here..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full bg-brand-accent text-[#0F172A] font-['Hanken_Grotesk'] text-[14px] leading-[20px] font-semibold py-4 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-[0px_4px_12px_rgba(248,190,0,0.2)] mt-2" 
                type="submit"
              >
                Send message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
