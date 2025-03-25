import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

// Define types for animation and scroll properties
interface AnimationProps {
  duration?: number;
  ease?: string;
  opacity?: number;
  x?: number;
  y?: number;
  scale?: number;
  [key: string]: any; // Allows additional GSAP properties
}

interface ScrollProps {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  [key: string]: any;
}

export const animateWithGsap = (
  target: gsap.TweenTarget | HTMLElement,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target as Element, // Ensure 'target' is treated as an Element
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

// Function to animate a GSAP timeline with React references
export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: RefObject<{ rotation: { y: number } }>,
  rotationState: number,
  firstTarget: gsap.TweenTarget | HTMLElement, // Same for first target
  secondTarget: gsap.TweenTarget | HTMLElement, // Same for second target
  animationProps: AnimationProps
): void => {
  if (!rotationRef.current) return;

  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
