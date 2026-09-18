import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useOrbitalAnimation() {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Orbital/Floating Animations for Cards (yoyo infinite)
    const floatConfig = {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    };

    if (card1Ref.current) gsap.to(card1Ref.current, { ...floatConfig, delay: 0 });
    if (card2Ref.current) gsap.to(card2Ref.current, { ...floatConfig, delay: 1 });
    if (card3Ref.current) gsap.to(card3Ref.current, { ...floatConfig, delay: 2 });

    // 2. Scroll-triggered parallax for the entire right-side container
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          y: 100, // Move down slightly as you scroll
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => {
      // Cleanup
      mm.revert();
      const targets = [card1Ref.current, card2Ref.current, card3Ref.current, containerRef.current].filter(Boolean);
      if (targets.length) {
        gsap.killTweensOf(targets);
      }
    };
  }, []);

  return { containerRef, card1Ref, card2Ref, card3Ref };
}
