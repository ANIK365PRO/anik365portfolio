import { MonitorSmartphone, BadgeCheck, Server, Wrench } from "lucide-react";

export function SkillsSection() {
  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24 transition-colors duration-300 z-10" id="skills">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(15,76,129,0.1)_0%,transparent_80%)] opacity-60"></div>

      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 relative">
        {/* Header Section */}
        <div className="text-center mb-20 plx-layer-1 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display-xl font-bold text-brand-heading mb-4 tracking-wide drop-shadow-sm dark:drop-shadow-2xl">
            Skills
          </h2>
          <p className=" font-semibold text-sm tracking-widest uppercase opacity-90 drop-shadow-md">
            My Technical Level
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {/* Frontend Card Wrapper */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/30 to-brand-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            {/* Frontend Card */}
            <div className="glass-card rounded-2xl p-8 lg:p-10 transition-all duration-300 relative z-10 h-full">
              <div className="flex items-center gap-4 mb-10 justify-center">
                <MonitorSmartphone className="text-brand-accent w-8 h-8" />
                <h3 className="text-2xl font-bold text-brand-heading">Frontend Developer</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">HTML5</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">CSS3</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">JavaScript</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">TypeScript</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">React JS</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Next.JS</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Tailwind CSS</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Card Wrapper */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/10 to-brand-primary/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            {/* Backend Card */}
            <div className="glass-card rounded-2xl p-8 lg:p-10 transition-all duration-300 relative z-10 h-full">
              <div className="flex items-center gap-4 mb-10 justify-center">
                <Server className="text-brand-accent w-8 h-8" />
                <h3 className="text-2xl font-bold text-brand-heading">Backend Developer</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Node JS</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Express JS</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">MongoDB</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">SQL</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Docker</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Kubernetes</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Card Wrapper */}
          <div className="relative group md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary/20 to-brand-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            {/* Tools Card */}
            <div className="glass-card rounded-2xl p-8 lg:p-10 transition-all duration-300 relative z-10 h-full">
              <div className="flex items-center gap-4 mb-10 justify-center">
                <Wrench className="text-brand-accent w-8 h-8" />
                <h3 className="text-2xl font-bold text-brand-heading">Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Git</h4>
                    <span className="text-xs font-medium text-brand-text">Expert</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">AWS</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">Prisma</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="flex items-start gap-3">
                  <BadgeCheck className="text-brand-accent w-5 h-5 mt-1 opacity-90 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-brand-heading">PostgreSQL</h4>
                    <span className="text-xs font-medium text-brand-text">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
