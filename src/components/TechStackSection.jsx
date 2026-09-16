"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Paintbrush, Database, Wrench } from "lucide-react";
import { useAntigravity } from "@/hooks/useAntigravity";

export function TechStackSection() {
  const reactRef = useRef(null);
  const tailwindRef = useRef(null);
  const nextRef = useRef(null);
  const nodeRef = useRef(null);
  const postgresRef = useRef(null);
  const mongoRef = useRef(null);
  const gitRef = useRef(null);
  const awsRef = useRef(null);
  const dockerRef = useRef(null);

  useAntigravity([
    reactRef, tailwindRef, nextRef,
    nodeRef, postgresRef, mongoRef,
    gitRef, awsRef, dockerRef
  ]);

  return (
    <section className="relative overflow-hidden z-10" id="tech-stack">
      {/* Container matching Hero and About */}
      <div className="max-w-container-max mx-auto px-6 md:pl-[120px] md:pr-10 lg:pl-[140px] lg:pr-20 py-24 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-20 plx-layer-1"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-heading mb-4 tracking-wide drop-shadow-sm dark:drop-shadow-2xl">
            Digital Elements
          </h2>
          <p className="text-brand-primary dark:text-[#a0c9ff] font-semibold text-sm tracking-widest uppercase opacity-90 drop-shadow-md">
            Tools of Creation
          </p>
        </motion.div>

        {/* Experimental Fluid Grid Area */}
        <div className="relative min-h-[900px] md:min-h-[600px] w-full max-w-5xl mx-auto plx-layer-2">
          
          {/* Cluster: Frontend */}
          <div className="absolute top-0 left-0 md:left-[5%] w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="fluid-blob rounded-[60%_40%_30%_70%/60%_30%_70%_40%] w-64 h-64 absolute -z-10 bg-brand-primary/20 dark:bg-purple-600/30 blur-2xl"></div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-brand-heading mb-8 flex items-center gap-2 drop-shadow-sm"
            >
              <Paintbrush className="w-6 h-6 text-brand-primary dark:text-[#a0c9ff]" /> Frontend
            </motion.h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full max-w-[300px]">
              <div ref={reactRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 fluid-blob rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex items-center justify-center mb-2 shadow-lg dark:shadow-purple-900/40"
                >
                  <Image alt="React" width={40} height={40} className="w-10 h-10 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDoWbZWkuq_ieWgkr3I8_MJ_-uKhEiAnqJmYrD_dHWcGw762mGJjZAc0ZkjzV3gGkKpLKiY8HV_g-bNXdUfHAgGaRukBTJEqT5T3SiBqSRAJg7n_mTvR6xFEPdWx6vla345C6rKk7J6-6KpIvC5hhs1eEd23217b4lX146YKV1B9o4pxRmfWHuxt2iHeHv_amg7MBkHGnxUY-qGeMK8h2dIKwvCyUlieBGN5r-zTp78ASGP_wq-ZHq"/>
                </motion.div>
                <span className="text-xs text-brand-text font-bold tracking-wider drop-shadow-sm">REACT</span>
              </div>
              <div ref={tailwindRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 fluid-blob rounded-[50%_50%_20%_80%/25%_80%_20%_75%] flex items-center justify-center mb-2 mt-4 shadow-lg dark:shadow-purple-900/40"
                >
                  <Image alt="Tailwind CSS" width={32} height={32} className="w-8 h-8 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqogU7q_RhdHVLg5Ru0QkczzefGfGOtRM-vOjw9aBk3H4ExoN02trRICtGc8tygKaru-AUNQWV-cls654Tip9tUTbblF0HLQti8nJwPquSaYF6llSJ1XJZPlPjLJFAY2rXEVd9HTuLNbQtMUyXFNhM2FEH1IiExxFRgrMB73Ap4KO0ab-Lyb9pH41SDSDWfmfuB_pm23p6Jd2T9wWhuMSqivy1ULRxgyNrlPrKHDh0jgvuMyWXL8B4"/>
                </motion.div>
                <span className="text-[10px] text-brand-text font-bold tracking-wider drop-shadow-sm">TAILWIND</span>
              </div>
              <div ref={nextRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-18 h-18 fluid-blob rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center mb-2 p-4 shadow-lg dark:shadow-purple-900/40"
                >
                  <Image alt="Next.js" width={40} height={40} className="w-10 h-10 dark:invert drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE4XE28ld6QisRT3-gmNyKM9iRLplWCen_qfrQVdr92ZSKvdbq3CrugD7cVY_G6jw22rBuK9k7nmeGDolJXxuX8LCUTdcjQjEs4E2QiYrP0FbKZ5GpeYx-RD43ehVRp6xn4fMm6ZNMiibfnU3SRPK594yv9xgeHDwi1jFWtj7ggeZXkuTzelle6tOdpD3FNZmqosYcNBdgYL6ASf1siIp9rPtyGMBJxjsfhk16LsXtGYlrJFa01Grd"/>
                </motion.div>
                <span className="text-xs text-brand-text font-bold tracking-wider drop-shadow-sm">NEXT.JS</span>
              </div>
            </div>
          </div>

          {/* Cluster: Backend */}
          <div className="absolute top-[35%] md:top-[10%] right-0 md:right-[5%] w-full md:w-auto flex flex-col items-center md:items-end mt-20 md:mt-0">
            <div className="fluid-blob rounded-[50%_50%_20%_80%/25%_80%_20%_75%] w-72 h-72 absolute -z-10 bg-[#0F4C81]/20 dark:bg-blue-600/30 blur-2xl"></div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-brand-heading mb-8 flex items-center gap-2 drop-shadow-sm"
            >
              <Database className="w-6 h-6 text-[#0F4C81] dark:text-[#97cbff]" /> Backend
            </motion.h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 w-full max-w-[320px]">
              <div ref={nodeRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-22 h-22 fluid-blob rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center mb-2 p-5 shadow-lg dark:shadow-blue-900/40"
                >
                  <Image alt="Node.js" width={48} height={48} className="w-12 h-12 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_yd6y7r6JuY3NzT0d7KQXewKAh4Aii7bB-vD5f6wMTyrYCYfYBgdj5MihsSj0vml8IQ3tNEUIylcZc5vBpcW74LNWYbgjSO6oVn9Slyzj3meeE71rL9tmAi8cBTYeQHjzd85DKmeLZBjqMLIO_Ef8Mu8Wf4DhxuEQM9dW1es39iTb4cyyClGBcISBKJLJefLv1ovy_NHKgOfUCqAVdfIZQUmEBcUKHiE_KOnB5FASg1UN5skJ8YkI"/>
                </motion.div>
                <span className="text-xs text-brand-text font-bold tracking-wider drop-shadow-sm">NODE.JS</span>
              </div>
              <div ref={postgresRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 fluid-blob rounded-[60%_40%_30%_70%/60%_30%_70%_40%] flex items-center justify-center mb-2 mt-6 shadow-lg dark:shadow-blue-900/40"
                >
                  <Image alt="PostgreSQL" width={32} height={32} className="w-8 h-8 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu7liX8LL5WHKc-wWnFaBHCT_Wzjui9KOjgOsKukOWlCwdwciNsmlM4ATIrV-H1_H14g9vLocCNzj51U3k520zJSvmHI9hU6pYumlPv8DqvU4qTSBlInWBpYS48mKgdgSFkiJuPN2iuH3mS2jxjaojz61KHlJ5Cw9HxoBg2uC-xaWGq2BMwbvHEx9FwlLyirUpvUguCu4jES1NDZHau5eG2K3OVpO4JoC_RcSytnERcTXn8t2a1QJa"/>
                </motion.div>
                <span className="text-[10px] text-brand-text font-bold tracking-wider drop-shadow-sm">POSTGRES</span>
              </div>
              <div ref={mongoRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 fluid-blob rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex items-center justify-center mb-2 shadow-lg dark:shadow-blue-900/40"
                >
                  <Image alt="MongoDB" width={40} height={40} className="w-10 h-10 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgiquRGGW7wPfaxh144Me1h38jTibvx8628T5Hxe7yeQZGzscSEB0bJDu35nZACRP1AJVIW9dmzsCrOnBBqkMCheIuH-MCIE1AWpjywFQ4JdYU0qBy18tBA2Pyn-AxT1pfO6qWSF8qHskcTLRvdxqvdcya9St4h6PpFBOLHIgx9sQIU0OZcV2UU_OcI3fqNh9R20O5i5ufTI810Y3rhlWXa2CudmfjoWpJcbpcKDC207pJVOWyAH8j"/>
                </motion.div>
                <span className="text-xs text-brand-text font-bold tracking-wider drop-shadow-sm">MONGO</span>
              </div>
            </div>
          </div>

          {/* Cluster: Tools */}
          <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-full md:w-auto flex flex-col items-center mt-32 md:mt-0">
            <div className="fluid-blob rounded-[30%_70%_70%_30%/30%_30%_70%_70%] w-80 h-40 absolute -z-10 bg-brand-accent/20 blur-2xl"></div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-brand-heading mb-8 flex items-center gap-2 drop-shadow-sm md:hidden"
            >
              <Wrench className="w-6 h-6 text-brand-accent" /> Tools
            </motion.h3>
            <div className="flex items-center gap-10 justify-center">
              <div ref={gitRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 fluid-blob rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center mb-2 shadow-lg dark:shadow-amber-900/30"
                >
                  <Image alt="Git" width={24} height={24} className="w-6 h-6 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9M_lf_Eojer0o_ZqqrGHJQNjQSkEDpaVzk0Tabsy0mIQ5Vlv9WHzWF2WBMkxwgMvKxBrY8ei05hAdhMcunVYA5R-aB3XSeT8RxUYxyOfSENEgtsAsM30F-8Xa_TzyWUjla65cfKoiKenX2dBZUtA20NITP26UeB9gQIOVSrFJgF7nXaPl7hdP_k2ht_cJIQ8RX6BoCLbz6uWufV3svXGYSWQKEEwnQBhxzDIJZnZSqYVKqrCmw3_4"/>
                </motion.div>
                <span className="text-[10px] text-brand-text font-bold tracking-wider drop-shadow-sm">GIT</span>
              </div>
              <div ref={awsRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 fluid-blob rounded-[60%_40%_30%_70%/60%_30%_70%_40%] flex items-center justify-center mb-2 -mt-8 shadow-lg dark:shadow-amber-900/40 border-brand-accent/30"
                >
                  <Image alt="AWS" width={48} height={48} className="w-12 h-12 dark:invert drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIyI3TtDq3-20SViECUIj5y7MjMkzcmBQF5ty5MbiIB4_KZmBPCW_ypKoqxzuSVDqIAKkMzjZDCmnqh2HBF0yPsKw2UXqoCsvzJkY8dISmix1kH9vk1KSP3rk-J1M9k_UsOUY2PxmwprmW0JkjPCwmxi4SHwo_c4yINEmI2hDuvLE68tdZhFB4fq1rkBrSg8xiu-Em6k2ZU50OhJLzIntvSwgBZ_glSZNAzv4mSxRvIGHfc5pGgPhZ"/>
                </motion.div>
                <span className="text-sm text-brand-accent font-bold tracking-wider drop-shadow-md">AWS</span>
              </div>
              <div ref={dockerRef} className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 fluid-blob rounded-[50%_50%_20%_80%/25%_80%_20%_75%] flex items-center justify-center mb-2 shadow-lg dark:shadow-amber-900/30"
                >
                  <Image alt="Docker" width={32} height={32} className="w-8 h-8 drop-shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0oO1Vij7ImF2OrgyY6Zy22AZ7tqgZb1g1L1-555yZVcL48uadZ5VBcAp4ATkA0h4d8mJ3G18GlpH998Lng3RimF44Xdjd7jzR28M9RkUjTJNhzvOIVgO61fCOQlEVNDNPAmed4fjCxTZMp8YUaWvJtywanC_04R--J7w50c902l4q9J3-LoibWxw1LZ-xt7ly7w8V13HdgMCYmntmralKm8dLKG6JLz0hSagjMz52QKc0wBsV_bLY"/>
                </motion.div>
                <span className="text-[10px] text-brand-text font-bold tracking-wider drop-shadow-sm">DOCKER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
