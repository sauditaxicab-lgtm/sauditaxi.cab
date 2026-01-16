/**
 * Framer Motion Performance Configuration
 * Optimized settings to reduce forced reflows and improve animation performance
 */

import type { Transition, Variant } from "framer-motion";

/**
 * Optimized transition settings
 * - Uses GPU-accelerated properties (transform, opacity)
 * - Reduces layout thrashing
 */
export const optimizedTransition: Transition = {
    type: "tween",
    duration: 0.3,
    ease: "easeOut",
};

/**
 * Fast transition for subtle animations
 */
export const fastTransition: Transition = {
    type: "tween",
    duration: 0.2,
    ease: "easeInOut",
};

/**
 * Smooth spring transition (use sparingly)
 */
export const springTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    mass: 1,
};

/**
 * Fade-in animation variants
 * Uses only opacity (GPU-accelerated, no reflow)
 */
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: optimizedTransition,
    },
};

/**
 * Slide-up animation variants
 * Uses transform (GPU-accelerated, no reflow)
 */
export const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: optimizedTransition,
    },
};

/**
 * Slide-in from left
 */
export const slideInLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: optimizedTransition,
    },
};

/**
 * Slide-in from right
 */
export const slideInRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: optimizedTransition,
    },
};

/**
 * Scale animation
 */
export const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: optimizedTransition,
    },
};

/**
 * Stagger children animation
 * For animating lists or grids
 */
export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/**
 * Viewport animation configuration
 * Optimized for scroll-triggered animations
 */
export const viewportConfig = {
    once: true, // Animate only once (performance)
    amount: 0.3, // Trigger when 30% visible
    margin: "0px 0px -100px 0px", // Trigger slightly before element is visible
};

/**
 * Layout animation configuration
 * Use with caution - can cause reflows
 * Only use for critical layout changes
 */
export const layoutTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
};

/**
 * GPU-accelerated properties
 * Use these for best performance (no reflows)
 */
export const GPU_PROPS = [
    'opacity',
    'transform',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
] as const;

/**
 * Properties that cause reflows
 * Avoid animating these when possible
 */
export const REFLOW_PROPS = [
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'margin',
    'padding',
    'border',
] as const;

/**
 * Reduced motion configuration
 * Respects user's prefers-reduced-motion setting
 */
export const reducedMotionConfig = {
    initial: false,
    animate: { opacity: 1 },
    transition: { duration: 0 },
};

/**
 * Hook to check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Performance-optimized motion component props
 * Use these defaults for all motion components
 */
export const motionDefaults = {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportConfig,
    transition: optimizedTransition,
};
