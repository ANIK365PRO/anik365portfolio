import { useEffect } from "react";
import gsap from "gsap";

export function useAntigravity(refs) {
  useEffect(() => {
    const validElements = refs
      .map((ref) => ref.current)
      .filter((el) => el !== null);

    if (validElements.length === 0) return;

    const animations = validElements.map((el) => {
      // Create a continuous random float
      const randomX = gsap.utils.random(-15, 15, 1, true);
      const randomY = gsap.utils.random(-15, 15, 1, true);
      const randomDuration = gsap.utils.random(3, 5, 0.1, true);

      return gsap.to(el, {
        x: randomX,
        y: randomY,
        duration: randomDuration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
