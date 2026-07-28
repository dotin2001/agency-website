"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type ViewportRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delayMs?: number;
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ViewportReveal({
  children,
  className,
  delayMs = 0,
  style,
  ...props
}: Readonly<ViewportRevealProps>) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const animationFrame = window.requestAnimationFrame(() => {
        setHasMounted(true);
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    const mountFrame = window.requestAnimationFrame(() => {
      setHasMounted(true);
    });

    const node = elementRef.current;

    if (!node) {
      return () => {
        window.cancelAnimationFrame(mountFrame);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      window.cancelAnimationFrame(mountFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      {...props}
      className={cn("motion-reveal", className)}
      data-reveal-state={
        hasMounted ? (isVisible ? "visible" : "hidden") : "visible"
      }
      ref={elementRef}
      style={
        {
          ...style,
          "--reveal-delay": `${delayMs}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
