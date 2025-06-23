"use client";
import * as React from "react";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Circle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  BarChart3,
  PieChart,
  Wallet,
  CreditCard,
  Building,
  Phone,
  Mail,
  MapPin,
  Check,
  X,
  Crown,
  Sparkles,
  Bot,
  Brain,
  Cpu,
  Sun,
  Moon,
  Play,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useEffect, useState } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

import { Suspense, lazy, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ultraFastInterval: NodeJS.Timeout;
    let persistentInterval: NodeJS.Timeout;
    let mutationObserver: MutationObserver;

    const nukeLogo = () => {
      let removed = false;

      // Method 1: Nuclear approach to shadow roots
      const viewers = document.querySelectorAll("spline-viewer");
      viewers.forEach((viewer) => {
        try {
          const shadowRoot = (viewer as any).shadowRoot;
          if (shadowRoot) {
            // Nuke everything that could be a logo
            const targets = shadowRoot.querySelectorAll("*");
            targets.forEach((element: any) => {
              const text = element.textContent || "";
              const className = element.className || "";
              const id = element.id || "";

              if (
                text.includes("Spline") ||
                text.includes("Built") ||
                className.includes("logo") ||
                className.includes("watermark") ||
                id.includes("logo") ||
                id.includes("watermark") ||
                (element.tagName === "A" && element.href?.includes("spline"))
              ) {
                // Multiple removal strategies
                element.style.cssText =
                  "display:none!important;visibility:hidden!important;opacity:0!important;position:absolute!important;left:-99999px!important;top:-99999px!important;width:0!important;height:0!important;pointer-events:none!important;z-index:-99999!important;";
                element.remove?.();
                element.parentNode?.removeChild?.(element);
                removed = true;
              }
            });

            // Inject nuclear CSS
            const nukeStyle =
              shadowRoot.querySelector("#nuclear-style") ||
              document.createElement("style");
            nukeStyle.id = "nuclear-style";
            nukeStyle.textContent = `
              *, *::before, *::after {
                ${["logo", "watermark", "branding", "spline"]
                  .map(
                    (term) => `
                  ${['class*="', 'id*="']
                    .map((attr) => `[${attr}${term}"]`)
                    .join(", ")} {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    position: absolute !important;
                    left: -99999px !important;
                    top: -99999px !important;
                    width: 0 !important;
                    height: 0 !important;
                    pointer-events: none !important;
                    z-index: -99999 !important;
                  }
                `
                  )
                  .join("")}
              }
              a[href*="spline"], a[href*="splinetool"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }
            `;
            if (!shadowRoot.contains(nukeStyle)) {
              shadowRoot.appendChild(nukeStyle);
            }
          }
        } catch (e) {
          // Silent fail
        }
      });

      // Method 2: Obliterate all text nodes containing Spline
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ALL,
        null
      );

      const nodesToNuke: Node[] = [];
      let node;
      while ((node = walker.nextNode())) {
        if (
          node.textContent?.toLowerCase().includes("spline") ||
          node.textContent?.toLowerCase().includes("built with")
        ) {
          nodesToNuke.push(node);
        }
      }

      nodesToNuke.forEach((node) => {
        let element =
          node.nodeType === Node.ELEMENT_NODE
            ? (node as Element)
            : node.parentElement;
        while (element && element !== document.body) {
          if (!element.hasAttribute?.("data-spline-protected")) {
            try {
              (element as HTMLElement).style.cssText =
                "display:none!important;visibility:hidden!important;opacity:0!important;position:absolute!important;left:-99999px!important;";
              element.remove?.();
              removed = true;
              break;
            } catch (e) {}
          }
          element = element.parentElement;
        }
      });

      // Method 3: Destroy all suspicious elements
      const suspiciousSelectors = [
        'a[href*="spline"]',
        'a[href*="splinetool"]',
        '*[class*="logo"]',
        '*[id*="logo"]',
        '*[class*="watermark"]',
        '*[id*="watermark"]',
        '*[class*="branding"]',
        '*[id*="branding"]',
        'div[style*="position: fixed"]',
        'div[style*="position: absolute"]',
      ];

      suspiciousSelectors.forEach((selector) => {
        try {
          document.querySelectorAll(selector).forEach((element) => {
            if (
              element.textContent?.toLowerCase().includes("spline") ||
              (element as HTMLElement).style.backgroundImage?.includes("spline")
            ) {
              (element as HTMLElement).style.cssText =
                "display:none!important;visibility:hidden!important;opacity:0!important;";
              element.remove?.();
              removed = true;
            }
          });
        } catch (e) {}
      });

      return removed;
    };

    // Initial nuclear strike
    nukeLogo();

    // Ultra-fast removal for first 15 seconds (every 25ms)
    ultraFastInterval = setInterval(nukeLogo, 25);
    setTimeout(() => {
      if (ultraFastInterval) clearInterval(ultraFastInterval);
    }, 15000);

    // Persistent nuclear option (every 100ms forever)
    persistentInterval = setInterval(nukeLogo, 100);

    // Nuclear mutation observer
    mutationObserver = new MutationObserver(() => {
      nukeLogo();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    });

    return () => {
      if (ultraFastInterval) clearInterval(ultraFastInterval);
      if (persistentInterval) clearInterval(persistentInterval);
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, []);

  const onLoad = () => {
    console.log("🚀 Spline loaded - activating logo destroyer");

    // Immediate nuclear strikes after load
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const viewers = document.querySelectorAll("spline-viewer");
        viewers.forEach((viewer) => {
          try {
            const shadowRoot = (viewer as any).shadowRoot;
            if (shadowRoot) {
              shadowRoot.querySelectorAll("*").forEach((el: any) => {
                if (
                  el.textContent?.includes("Spline") ||
                  el.textContent?.includes("Built")
                ) {
                  el.style.cssText =
                    "display:none!important;visibility:hidden!important;";
                  el.remove?.();
                }
              });
            }
          } catch (e) {}
        });
      }, i * 50);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`spline-container ${className || ""}`}
      style={{ position: "relative" }}
      data-spline-protected="true"
    >
      {/* Nuclear CSS */}
      <style jsx global>{`
        /* Nuclear option - hide everything that could be a Spline logo */
        spline-viewer *[class*="logo"],
        spline-viewer *[id*="logo"],
        spline-viewer *[class*="watermark"],
        spline-viewer *[id*="watermark"],
        spline-viewer *[class*="branding"],
        spline-viewer a,
        *[class*="spline-logo"],
        *[data-spline-logo],
        a[href*="spline"],
        a[href*="splinetool"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -99999px !important;
          top: -99999px !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
          z-index: -99999 !important;
        }

        /* Hide any element containing "Built with Spline" text */
        *:has-text("Built with Spline"),
        *:has-text("Spline") {
          display: none !important;
        }
      `}</style>

      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Spline
          ref={splineRef}
          scene={scene}
          className={className}
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  isDark = true,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  isDark?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            gradient,
            isDark
              ? "backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
              : "backdrop-blur-[3px] border-2 border-indigo-300/[0.4] shadow-[0_12px_40px_0_rgba(99,102,241,0.15)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "FinTech Innovation",
  title1 = "Elevate Your",
  title2 = "Financial Future",
  isDark = true,
  onGetStarted,
  onWatchDemo,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  isDark?: boolean;
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-150",
        isDark
          ? "bg-[#030303]"
          : "bg-gradient-to-br from-indigo-100 via-white to-rose-100"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 blur-3xl",
          isDark
            ? "bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]"
            : "bg-gradient-to-br from-indigo-500/[0.2] via-purple-400/[0.1] to-rose-500/[0.2]"
        )}
      />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient={
            isDark ? "from-indigo-500/[0.15]" : "from-indigo-400/[0.25]"
          }
          isDark={isDark}
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient={isDark ? "from-rose-500/[0.15]" : "from-rose-400/[0.25]"}
          isDark={isDark}
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient={
            isDark ? "from-violet-500/[0.15]" : "from-purple-400/[0.25]"
          }
          isDark={isDark}
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient={isDark ? "from-rose-500/[0.15]" : "from-rose-400/[0.25]"}
          isDark={isDark}
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient={
            isDark ? "from-indigo-500/[0.15]" : "from-indigo-400/[0.25]"
          }
          isDark={isDark}
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 md:mb-12",
              isDark
                ? "bg-white/[0.03] border-white/[0.08]"
                : "bg-white/70 border-indigo-200/50 shadow-lg backdrop-blur-sm"
            )}
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span
              className={cn(
                "text-sm tracking-wide",
                isDark ? "text-white/60" : "text-gray-700"
              )}
            >
              {badge}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
              <span
                className={cn(
                  "bg-clip-text text-transparent block",
                  isDark
                    ? "bg-gradient-to-b from-white to-white/80"
                    : "bg-gradient-to-b from-gray-900 to-gray-700"
                )}
              >
                {title1}
              </span>
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400 block"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p
              className={cn(
                "text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4 text-center",
                isDark ? "text-white/40" : "text-gray-800"
              )}
            >
              Revolutionary financial technology that empowers businesses and
              individuals to manage, invest, and grow their wealth with
              unprecedented ease and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={onGetStarted}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_0_rgba(99,102,241,0.3)]"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onWatchDemo}
              className={cn(
                "px-8 py-4 border font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm",
                isDark
                  ? "bg-white/[0.03] border-white/[0.08] text-white/80 hover:bg-white/[0.08]"
                  : "bg-white/90 border-gray-600/80 text-gray-900 hover:bg-white shadow-xl"
              )}
            >
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t via-transparent pointer-events-none",
          isDark
            ? "from-[#030303] to-[#030303]/80"
            : "from-white/60 to-indigo-50/40"
        )}
      />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  isDark = true,
}: {
  icon: any;
  title: string;
  description: string;
  delay?: number;
  isDark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-8 border rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105",
        isDark
          ? "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.04]"
          : "bg-white/95 border-gray-400/40 hover:bg-white shadow-xl hover:shadow-2xl hover:border-gray-500/60"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          isDark
            ? "bg-gradient-to-br from-indigo-500/[0.03] to-rose-500/[0.03]"
            : "bg-gradient-to-br from-indigo-400/[0.12] to-rose-400/[0.12]"
        )}
      />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 rounded-xl mb-6">
          <Icon
            className={cn(
              "h-6 w-6",
              isDark ? "text-white/80" : "text-gray-800"
            )}
          />
        </div>

        <h3
          className={cn(
            "text-xl font-semibold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "leading-relaxed",
            isDark ? "text-white/60" : "text-gray-800"
          )}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function StatsCard({
  value,
  label,
  icon: Icon,
  delay = 0,
  isDark = true,
}: {
  value: string;
  label: string;
  icon: any;
  delay?: number;
  isDark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "text-center p-6 rounded-xl backdrop-blur-sm transition-all duration-300",
        isDark
          ? "bg-white/[0.02] border border-white/[0.08]"
          : "bg-white/95 border border-gray-400/40 shadow-xl"
      )}
    >
      <Icon className="h-8 w-8 text-rose-400 mx-auto mb-4" />
      <div
        className={cn(
          "text-3xl font-bold mb-2",
          isDark
            ? "bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            : "text-gray-900"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "text-sm font-medium",
          isDark ? "text-white/60" : "text-gray-700"
        )}
      >
        {label}
      </div>
    </motion.div>
  );
}

function TestimonialCard({
  name,
  role,
  company,
  content,
  rating = 5,
  delay = 0,
  isDark = true,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  delay?: number;
  isDark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "p-8 border rounded-2xl backdrop-blur-sm transition-all duration-300",
        isDark
          ? "bg-white/[0.02] border-white/[0.08]"
          : "bg-white/95 border-gray-400/40 shadow-xl"
      )}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-rose-400 text-rose-400" />
        ))}
      </div>

      <p
        className={cn(
          "mb-6 leading-relaxed italic",
          isDark ? "text-white/70" : "text-gray-800"
        )}
      >
        "{content}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div
            className={cn(
              "font-semibold",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            {name}
          </div>
          <div
            className={cn(
              "text-sm",
              isDark ? "text-white/50" : "text-gray-600"
            )}
          >
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PricingCard({
  name,
  monthlyPrice,
  description,
  features,
  isPopular = false,
  buttonText = "Get started",
  delay = 0,
  isYearly = false,
  isDark = true,
  onButtonClick,
}: {
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  delay?: number;
  isYearly?: boolean;
  isDark?: boolean;
  onButtonClick?: () => void;
}) {
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8); // 20% discount
  const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
  const period = isYearly ? "year" : "month";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative p-8 rounded-2xl border transition-all flex flex-col h-full",
        isDark
          ? isPopular
            ? "bg-gradient-to-br from-indigo-900/40 to-rose-900/20 border-indigo-500/30 hover:border-rose-500/60"
            : "bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-indigo-500/30"
          : isPopular
          ? "bg-gradient-to-br from-indigo-50 to-rose-50 border-indigo-300 hover:border-rose-400 shadow-2xl"
          : "bg-white border-gray-400 hover:border-indigo-400 shadow-xl"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-8 bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-xs font-normal px-3 py-1 rounded-b-md">
          MOST POPULAR
        </div>
      )}

      <div className="mb-8">
        <h3
          className={cn(
            "text-xl font-normal mb-2",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "font-extralight text-sm mb-4",
            isDark ? "text-gray-400" : "text-gray-700"
          )}
        >
          {description}
        </p>
        <div className="flex items-baseline">
          <span
            className={cn(
              "text-4xl font-light",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            ${displayPrice}
          </span>
          <span
            className={cn(
              "ml-2 font-extralight",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            /{period}
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center font-extralight",
              isDark ? "text-gray-300" : "text-gray-800"
            )}
          >
            <svg
              className="w-5 h-5 mr-2 text-rose-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onButtonClick}
        className={cn(
          "w-full rounded-md px-6 py-3 transition-all font-light",
          isPopular
            ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:opacity-90"
            : isDark
            ? "bg-transparent border border-gray-700 text-white hover:bg-white/5"
            : "bg-transparent border border-gray-600 text-gray-900 hover:bg-gray-50"
        )}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

function AIFinancialSection({
  isDark = true,
  onExperienceAI,
}: {
  isDark?: boolean;
  onExperienceAI?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full min-h-[700px] md:min-h-[800px] lg:h-[900px] xl:h-[1000px] bg-white/[0.01] relative overflow-hidden border border-white/[0.03] rounded-3xl backdrop-blur-sm">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]" />

        <div className="flex flex-col lg:flex-row h-full relative z-10">
          {/* Left content */}
          <div className="flex-[0.6] p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/15 to-rose-500/15 border border-indigo-500/20">
                <Brain className="h-6 w-6 text-rose-400" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400 text-sm font-medium tracking-wide">
                AI-POWERED FINANCE
              </span>
            </div>

            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight",
                isDark
                  ? "bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                  : "text-gray-900"
              )}
            >
              Intelligent Financial
              <br />
              Automation
            </h2>

            <p
              className={cn(
                "max-w-2xl mb-8 text-base sm:text-lg leading-relaxed",
                isDark ? "text-neutral-300" : "text-gray-800"
              )}
            >
              Experience the future of finance with our AI-driven platform. Our
              advanced algorithms analyze market trends, optimize portfolios,
              and execute trades with precision - all while you focus on what
              matters most.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500/15 to-rose-500/15 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-rose-400" />
                </div>
                <span
                  className={cn(
                    "text-sm sm:text-base",
                    isDark ? "text-gray-300" : "text-gray-800"
                  )}
                >
                  Automated portfolio rebalancing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500/15 to-indigo-500/15 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-rose-400" />
                </div>
                <span
                  className={cn(
                    "text-sm sm:text-base",
                    isDark ? "text-gray-300" : "text-gray-800"
                  )}
                >
                  Real-time risk assessment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500/15 to-rose-500/15 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-rose-400" />
                </div>
                <span
                  className={cn(
                    "text-sm sm:text-base",
                    isDark ? "text-gray-300" : "text-gray-800"
                  )}
                >
                  Predictive market analysis
                </span>
              </div>
            </div>

            <button
              onClick={onExperienceAI}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_0_rgba(99,102,241,0.3)] w-fit text-sm sm:text-base"
            >
              Experience AI Finance
              <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right content */}
          <div className="hidden lg:flex flex-[1.4] relative overflow-hidden">
            <SplineScene
              scene={
                isDark
                  ? "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  : "https://prod.spline.design/K4Hm4IvIuLDNT5T6/scene.splinecode"
              }
              className={cn("w-full h-full", !isDark && "translate-y-[5%]")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ThemeToggle({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm border transition-all duration-150 hover:scale-105",
        isDark
          ? "bg-white/[0.05] border-white/[0.1] text-white hover:bg-white/[0.1]"
          : "bg-black/[0.05] border-black/[0.1] text-gray-900 hover:bg-black/[0.1]"
      )}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600" />
      )}
    </button>
  );
}

// Modal Components
function Modal({
  isOpen,
  onClose,
  children,
  title,
  isDark = true,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  isDark?: boolean;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={cn(
          "relative rounded-2xl shadow-2xl w-full max-w-lg border transition-colors duration-150 max-h-[90vh] overflow-y-auto",
          isDark
            ? "bg-[#030303] border-white/[0.08]"
            : "bg-white border-gray-300 shadow-xl"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2
              className={cn(
                "text-xl sm:text-2xl font-bold pr-4",
                isDark ? "text-white" : "text-gray-900"
              )}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className={cn(
                "hover:opacity-70 transition-opacity flex-shrink-0",
                isDark ? "text-white/40" : "text-gray-500"
              )}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function SignUpModal({
  isOpen,
  onClose,
  isDark,
}: {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "starter",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({ name: "", email: "", company: "", plan: "starter" });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Welcome to FinanceFlow!"
        isDark={isDark}
      >
        <div className="text-center py-4">
          <div
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              isDark
                ? "bg-gradient-to-r from-indigo-500/20 to-rose-500/20"
                : "bg-green-100"
            )}
          >
            <CheckCircle
              className={cn(
                "h-8 w-8",
                isDark ? "text-rose-400" : "text-green-600"
              )}
            />
          </div>
          <h3
            className={cn(
              "text-lg sm:text-xl font-semibold mb-3",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            Account Created Successfully!
          </h3>
          <p
            className={cn(
              "mb-4 text-sm sm:text-base",
              isDark ? "text-white/60" : "text-gray-600"
            )}
          >
            Check your email for setup instructions and your free trial details.
          </p>
          <div
            className={cn(
              "rounded-lg p-3 flex items-start gap-3 border text-left",
              isDark
                ? "bg-white/[0.02] border-white/[0.08]"
                : "bg-gray-50 border-gray-200"
            )}
          >
            <Crown
              className={cn(
                "h-5 w-5 mt-0.5 flex-shrink-0",
                isDark ? "text-rose-400" : "text-yellow-500"
              )}
            />
            <p
              className={cn(
                "text-sm",
                isDark ? "text-white/60" : "text-gray-600"
              )}
            >
              Your 30-day free trial includes all Pro features
            </p>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Start Your Free Trial"
      isDark={isDark}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              isDark ? "text-white/70" : "text-gray-700"
            )}
          >
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors text-base",
              isDark
                ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
            )}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              isDark ? "text-white/70" : "text-gray-700"
            )}
          >
            Email Address
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors text-base",
              isDark
                ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
            )}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              isDark ? "text-white/70" : "text-gray-700"
            )}
          >
            Company (Optional)
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors text-base",
              isDark
                ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
            )}
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              isDark ? "text-white/70" : "text-gray-700"
            )}
          >
            Plan
          </label>
          <select
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-colors text-base",
              isDark
                ? "border-white/[0.08] bg-white/[0.02] text-white"
                : "border-gray-300 bg-white text-gray-900"
            )}
          >
            <option value="starter">Starter Plan</option>
            <option value="pro">Pro Plan</option>
            <option value="enterprise">Enterprise Plan</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 text-base"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Creating Account...
            </div>
          ) : (
            "Start Free Trial"
          )}
        </button>

        <div
          className={cn(
            "text-center pt-2",
            isDark ? "text-white/40" : "text-gray-500"
          )}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2 text-xs">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle
                className={cn(
                  "h-3 w-3",
                  isDark ? "text-rose-400" : "text-indigo-600"
                )}
              />
              <span>No credit card required</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle
                className={cn(
                  "h-3 w-3",
                  isDark ? "text-rose-400" : "text-indigo-600"
                )}
              />
              <span>Cancel anytime</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle
                className={cn(
                  "h-3 w-3",
                  isDark ? "text-rose-400" : "text-indigo-600"
                )}
              />
              <span>30-day free trial</span>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

function DemoModal({
  isOpen,
  onClose,
  isDark,
}: {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Product Demo"
      isDark={isDark}
    >
      <div className="space-y-6">
        <div
          className={cn(
            "relative rounded-lg h-48 sm:h-64 flex items-center justify-center border",
            isDark
              ? "bg-white/[0.02] border-white/[0.08]"
              : "bg-gray-100 border-gray-300"
          )}
        >
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-rose-500 hover:opacity-90 rounded-full flex items-center justify-center text-white transition-all hover:scale-105"
            >
              <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-1" />
            </button>
          ) : (
            <div className="text-center px-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p
                className={cn(
                  "text-sm sm:text-base",
                  isDark ? "text-white/60" : "text-gray-600"
                )}
              >
                Demo Playing...
              </p>
              <div
                className={cn(
                  "w-full rounded-full h-2 mt-4 border max-w-xs mx-auto",
                  isDark
                    ? "bg-white/[0.02] border-white/[0.08]"
                    : "bg-gray-200 border-gray-300"
                )}
              >
                <div
                  className="bg-gradient-to-r from-indigo-500 to-rose-500 h-2 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3
            className={cn(
              "font-semibold text-base sm:text-lg",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            What you'll see in this demo:
          </h3>
          <div className="space-y-3">
            {[
              "AI-powered portfolio analysis",
              "Real-time market insights",
              "Automated trading features",
              "Risk assessment tools",
              "Performance analytics dashboard",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle
                  className={cn(
                    "h-4 w-4 mt-0.5 flex-shrink-0",
                    isDark ? "text-rose-400" : "text-indigo-600"
                  )}
                />
                <span
                  className={cn(
                    "text-sm sm:text-base",
                    isDark ? "text-white/60" : "text-gray-600"
                  )}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* <div
          className={cn(
            "p-4 rounded-lg flex items-start gap-3 border",
            isDark
              ? "bg-white/[0.02] border-white/[0.08]"
              : "bg-blue-50 border-blue-200"
          )}
        >
          <Sparkles
            className={cn(
              "h-5 w-5 mt-0.5 flex-shrink-0",
              isDark ? "text-rose-400" : "text-blue-500"
            )}
          />
          <p
            className={cn(
              "text-sm",
              isDark ? "text-white/60" : "text-blue-700"
            )}
          >
            This is a simulated demo. In the real platform, you'll have access
            to live data and full functionality.
          </p>
        </div> */}
      </div>
    </Modal>
  );
}

function ContactModal({
  isOpen,
  onClose,
  type,
  isDark,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: "demo" | "sales";
  isDark: boolean;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        preferredTime: "",
      });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Thank You!"
        isDark={isDark}
      >
        <div className="text-center py-4">
          <div
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              isDark
                ? "bg-gradient-to-r from-indigo-500/20 to-rose-500/20"
                : "bg-green-100"
            )}
          >
            <Calendar
              className={cn(
                "h-8 w-8",
                isDark ? "text-rose-400" : "text-green-600"
              )}
            />
          </div>
          <h3
            className={cn(
              "text-lg sm:text-xl font-semibold mb-3",
              isDark ? "text-white" : "text-gray-900"
            )}
          >
            {type === "demo" ? "Demo Scheduled!" : "We'll Be In Touch!"}
          </h3>
          <p
            className={cn(
              "text-sm sm:text-base",
              isDark ? "text-white/60" : "text-gray-600"
            )}
          >
            {type === "demo"
              ? "Our team will contact you within 24 hours to schedule your personalized demo."
              : "Our sales team will reach out to you within 24 hours with a custom proposal."}
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={type === "demo" ? "Schedule a Demo" : "Contact Sales"}
      isDark={isDark}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className={cn(
                "block text-sm font-medium mb-2",
                isDark ? "text-white/70" : "text-gray-700"
              )}
            >
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm transition-colors",
                isDark
                  ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
              )}
            />
          </div>
          <div>
            <label
              className={cn(
                "block text-sm font-medium mb-2",
                isDark ? "text-white/70" : "text-gray-700"
              )}
            >
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm transition-colors",
                isDark
                  ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className={cn(
                "block text-sm font-medium mb-2",
                isDark ? "text-white/70" : "text-gray-700"
              )}
            >
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm transition-colors",
                isDark
                  ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
              )}
            />
          </div>
          <div>
            <label
              className={cn(
                "block text-sm font-medium mb-2",
                isDark ? "text-white/70" : "text-gray-700"
              )}
            >
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm transition-colors",
                isDark
                  ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
              )}
            />
          </div>
        </div>

        {type === "demo" && (
          <div>
            <label
              className={cn(
                "block text-sm font-medium mb-2",
                isDark ? "text-white/70" : "text-gray-700"
              )}
            >
              Preferred Time
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) =>
                setFormData({ ...formData, preferredTime: e.target.value })
              }
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm transition-colors",
                isDark
                  ? "border-white/[0.08] bg-white/[0.02] text-white"
                  : "border-gray-300 bg-white text-gray-900"
              )}
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
            </select>
          </div>
        )}

        <div>
          <label
            className={cn(
              "block text-sm font-medium mb-2",
              isDark ? "text-white/70" : "text-gray-700"
            )}
          >
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={3}
            className={cn(
              "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm transition-colors resize-none",
              isDark
                ? "border-white/[0.08] bg-white/[0.02] text-white placeholder-white/40"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
            )}
            placeholder={
              type === "demo"
                ? "Tell us about your goals..."
                : "Tell us about your requirements..."
            }
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 text-base"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Submitting...
            </div>
          ) : type === "demo" ? (
            "Schedule Demo"
          ) : (
            "Contact Sales"
          )}
        </button>
      </form>
    </Modal>
  );
}

export default function FintechLandingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Modal states
  const [modals, setModals] = useState({
    signUp: false,
    demo: false,
    contactDemo: false,
    contactSales: false,
  });

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const openModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  const closeAllModals = () => {
    setModals({
      signUp: false,
      demo: false,
      contactDemo: false,
      contactSales: false,
    });
  };

  return (
    <div
      className={cn(
        "overflow-x-hidden transition-colors duration-150",
        isDark ? "bg-[#030303] text-white" : "bg-gray-50 text-gray-900"
      )}
    >
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <HeroGeometric
        isDark={isDark}
        onGetStarted={() => openModal("signUp")}
        onWatchDemo={() => openModal("demo")}
      />

      {/* Features Section */}
      <section
        className={cn(
          "relative py-24 transition-colors duration-150",
          isDark
            ? "bg-[#030303]"
            : "bg-gradient-to-b from-white/60 via-indigo-50/30 to-white/60"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent to-transparent",
            isDark ? "via-indigo-500/[0.02]" : "via-indigo-400/[0.08]"
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span
                className={cn(
                  "bg-clip-text text-transparent",
                  isDark
                    ? "bg-gradient-to-r from-indigo-300 via-white to-rose-300"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600"
                )}
              >
                Powerful Financial Tools
              </span>
            </h2>
            <p
              className={cn(
                "text-xl max-w-2xl mx-auto",
                isDark ? "text-white/60" : "text-gray-800"
              )}
            >
              Experience the future of finance with our cutting-edge platform
              designed for modern businesses and individuals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={TrendingUp}
              title="Smart Analytics"
              description="Advanced AI-powered insights to help you make informed financial decisions and maximize your returns."
              isDark={isDark}
              delay={0.1}
            />
            <FeatureCard
              icon={Shield}
              title="Bank-Grade Security"
              description="Military-grade encryption and multi-layer security protocols to keep your financial data safe and secure."
              isDark={isDark}
              delay={0.2}
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Execute transactions and access your data instantly with our high-performance infrastructure."
              isDark={isDark}
              delay={0.3}
            />
            <FeatureCard
              icon={PieChart}
              title="Portfolio Management"
              description="Comprehensive portfolio tracking and management tools to diversify and optimize your investments."
              isDark={isDark}
              delay={0.4}
            />
            <FeatureCard
              icon={CreditCard}
              title="Digital Payments"
              description="Seamless payment processing with support for all major payment methods and cryptocurrencies."
              isDark={isDark}
              delay={0.5}
            />
            <FeatureCard
              icon={Building}
              title="Business Solutions"
              description="Enterprise-grade financial tools designed to scale with your business and streamline operations."
              isDark={isDark}
              delay={0.6}
            />
          </div>
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={1}
          width={400}
          height={100}
          rotate={8}
          gradient={
            isDark ? "from-violet-500/[0.08]" : "from-purple-400/[0.15]"
          }
          isDark={isDark}
          className="right-[-10%] top-[20%]"
        />
      </section>

      {/* AI Financial Section */}
      <section
        className={cn(
          "relative py-24 transition-colors duration-150",
          isDark
            ? "bg-[#030303]"
            : "bg-gradient-to-b from-white/60 via-rose-50/30 to-white/60"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r via-transparent",
            isDark
              ? "from-indigo-500/[0.03] to-rose-500/[0.03]"
              : "from-indigo-400/[0.08] to-rose-400/[0.08]"
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <AIFinancialSection
            isDark={isDark}
            onExperienceAI={() => openModal("signUp")}
          />
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={1.2}
          width={350}
          height={90}
          rotate={15}
          gradient={isDark ? "from-rose-500/[0.08]" : "from-rose-400/[0.15]"}
          isDark={isDark}
          className="left-[-8%] top-[30%]"
        />
        <ElegantShape
          delay={1.4}
          width={280}
          height={70}
          rotate={-20}
          gradient={
            isDark ? "from-indigo-500/[0.08]" : "from-indigo-400/[0.15]"
          }
          isDark={isDark}
          className="right-[-10%] bottom-[25%]"
        />
      </section>

      {/* Stats Section */}
      <section
        className={cn(
          "relative py-24 transition-colors duration-150",
          isDark
            ? "bg-[#030303]"
            : "bg-gradient-to-b from-white/60 via-indigo-50/20 to-white/60"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r via-transparent",
            isDark
              ? "from-indigo-500/[0.02] to-rose-500/[0.02]"
              : "from-indigo-400/[0.06] to-rose-400/[0.06]"
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Thousands
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="$2.5B+"
              label="Assets Under Management"
              icon={DollarSign}
              isDark={isDark}
              delay={0.1}
            />
            <StatsCard
              value="50K+"
              label="Active Users"
              icon={Users}
              isDark={isDark}
              delay={0.2}
            />
            <StatsCard
              value="99.9%"
              label="Uptime Guarantee"
              icon={Shield}
              isDark={isDark}
              delay={0.3}
            />
            <StatsCard
              value="150+"
              label="Countries Supported"
              icon={BarChart3}
              isDark={isDark}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={cn(
          "relative py-24 transition-colors duration-150",
          isDark
            ? "bg-[#030303]"
            : "bg-gradient-to-b from-white/60 via-rose-50/20 to-white/60"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent to-transparent",
            isDark ? "via-rose-500/[0.02]" : "via-rose-400/[0.06]"
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="CEO"
              company="TechFlow Inc"
              content="This platform revolutionized how we manage our company finances. The analytics are incredibly detailed and the security gives us complete peace of mind."
              isDark={isDark}
              delay={0.1}
            />
            <TestimonialCard
              name="Marcus Johnson"
              role="Investment Manager"
              company="Wealth Partners"
              content="The portfolio management tools are outstanding. I've been able to optimize my clients' investments like never before. Highly recommended!"
              isDark={isDark}
              delay={0.2}
            />
            <TestimonialCard
              name="Elena Rodriguez"
              role="Founder"
              company="StartupVibe"
              content="As a startup founder, this platform has been invaluable. The business solutions are comprehensive and the support team is exceptional."
              isDark={isDark}
              delay={0.3}
            />
          </div>
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={1.2}
          width={300}
          height={80}
          rotate={-12}
          gradient={
            isDark ? "from-indigo-500/[0.08]" : "from-indigo-400/[0.15]"
          }
          isDark={isDark}
          className="left-[-5%] bottom-[10%]"
        />
      </section>

      {/* Pricing Section */}
      <section
        className={cn(
          "py-24 relative overflow-hidden transition-colors duration-150",
          isDark
            ? "bg-[#030303]"
            : "bg-gradient-to-b from-white/60 via-indigo-50/30 to-white/60"
        )}
      >
        {/* Background elements */}
        <div
          className={cn(
            "absolute top-40 left-20 w-96 h-96 rounded-full blur-3xl",
            isDark ? "bg-indigo-900/20" : "bg-indigo-300/30"
          )}
        ></div>
        <div
          className={cn(
            "absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl",
            isDark ? "bg-rose-900/20" : "bg-rose-300/30"
          )}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Simple, transparent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                pricing
              </span>
            </h2>
            <p
              className={cn(
                "text-xl max-w-2xl mx-auto font-extralight",
                isDark ? "text-gray-300" : "text-gray-800"
              )}
            >
              Choose the perfect plan for your team's needs with no hidden fees
              or long-term commitments.
            </p>
          </motion.div>

          {/* Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-12"
          >
            <span
              className={cn(
                "mr-3 transition-colors",
                !isYearly
                  ? isDark
                    ? "text-white font-medium"
                    : "text-gray-900 font-medium"
                  : isDark
                  ? "text-gray-400"
                  : "text-gray-600"
              )}
            >
              Monthly
            </span>
            <div
              className={cn(
                "relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer",
                isDark ? "bg-gray-800" : "bg-gray-300 border border-gray-400"
              )}
              onClick={togglePricing}
            >
              <div
                className={`absolute top-0 w-6 h-6 transition-all duration-200 ease-in-out transform bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full cursor-pointer shadow-lg ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
            <span
              className={cn(
                "ml-3 transition-colors",
                isYearly
                  ? isDark
                    ? "text-white font-medium"
                    : "text-gray-900 font-medium"
                  : isDark
                  ? "text-gray-400"
                  : "text-gray-600"
              )}
            >
              Yearly <span className="text-xs text-rose-400">(Save 20%)</span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              monthlyPrice={29}
              description="Perfect for small teams getting started"
              features={[
                "Up to 5 team members",
                "20GB storage",
                "Basic analytics",
                "24/7 email support",
              ]}
              isYearly={isYearly}
              isDark={isDark}
              delay={0.1}
              onButtonClick={() => openModal("signUp")}
            />

            <PricingCard
              name="Pro"
              monthlyPrice={79}
              description="Ideal for growing businesses"
              features={[
                "Up to 20 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
              ]}
              isPopular={true}
              isYearly={isYearly}
              isDark={isDark}
              delay={0.2}
              onButtonClick={() => openModal("signUp")}
            />

            <PricingCard
              name="Enterprise"
              monthlyPrice={199}
              description="For large-scale organizations"
              features={[
                "Unlimited team members",
                "1TB storage",
                "Enterprise analytics",
                "24/7 phone & email support",
                "Dedicated account manager",
              ]}
              buttonText="Contact sales"
              isYearly={isYearly}
              isDark={isDark}
              delay={0.3}
              onButtonClick={() => openModal("contactSales")}
            />
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <h3
              className={cn(
                "text-2xl font-light mb-8 text-center",
                isDark ? "text-white" : "text-gray-900"
              )}
            >
              Frequently asked questions
            </h3>

            <div className="space-y-6">
              <div
                className={cn(
                  "border-b pb-6",
                  isDark ? "border-gray-800" : "border-gray-300"
                )}
              >
                <h4
                  className={cn(
                    "text-lg font-normal mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  Can I change my plan later?
                </h4>
                <p
                  className={cn(
                    "font-extralight",
                    isDark ? "text-gray-400" : "text-gray-700"
                  )}
                >
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be reflected in your next billing cycle.
                </p>
              </div>

              <div
                className={cn(
                  "border-b pb-6",
                  isDark ? "border-gray-800" : "border-gray-300"
                )}
              >
                <h4
                  className={cn(
                    "text-lg font-normal mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  Do you offer a free trial?
                </h4>
                <p
                  className={cn(
                    "font-extralight",
                    isDark ? "text-gray-400" : "text-gray-700"
                  )}
                >
                  Yes, we offer a 14-day free trial on all plans. No credit card
                  required to start.
                </p>
              </div>

              <div
                className={cn(
                  "border-b pb-6",
                  isDark ? "border-gray-800" : "border-gray-300"
                )}
              >
                <h4
                  className={cn(
                    "text-lg font-normal mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  What payment methods do you accept?
                </h4>
                <p
                  className={cn(
                    "font-extralight",
                    isDark ? "text-gray-400" : "text-gray-700"
                  )}
                >
                  We accept all major credit cards, PayPal, and for annual
                  plans, we also support wire transfers.
                </p>
              </div>

              <div
                className={cn(
                  "border-b pb-6",
                  isDark ? "border-gray-800" : "border-gray-300"
                )}
              >
                <h4
                  className={cn(
                    "text-lg font-normal mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  Is there a discount for non-profits?
                </h4>
                <p
                  className={cn(
                    "font-extralight",
                    isDark ? "text-gray-400" : "text-gray-700"
                  )}
                >
                  Yes, we offer special pricing for non-profit organizations.
                  Please contact our sales team for details.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={cn(
          "relative py-24 transition-colors duration-150",
          isDark
            ? "bg-[#030303]"
            : "bg-gradient-to-b from-white/60 via-rose-50/30 to-white/60"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 blur-2xl",
            isDark
              ? "bg-gradient-to-r from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]"
              : "bg-gradient-to-r from-indigo-400/[0.12] via-transparent to-rose-400/[0.12]"
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight",
                isDark ? "text-white" : "text-gray-900"
              )}
            >
              Ready to{" "}
              <span
                className={cn(
                  "bg-clip-text text-transparent",
                  isDark
                    ? "bg-gradient-to-r from-indigo-300 via-white to-rose-300"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600"
                )}
              >
                Transform
              </span>{" "}
              Your Finances?
            </h2>

            <p
              className={cn(
                "text-xl mb-12 max-w-2xl mx-auto",
                isDark ? "text-white/60" : "text-gray-800"
              )}
            >
              Join thousands of satisfied customers and start your journey
              towards financial freedom today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => openModal("signUp")}
                className="group relative px-10 py-5 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_0_rgba(99,102,241,0.4)] text-lg"
              >
                Start Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => openModal("contactDemo")}
                className={cn(
                  "px-10 py-5 border font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-lg",
                  isDark
                    ? "bg-white/[0.03] border-white/[0.08] text-white/80 hover:bg-white/[0.08]"
                    : "bg-white/90 border-gray-600/80 text-gray-900 hover:bg-white shadow-xl"
                )}
              >
                Schedule Demo
              </button>
            </div>

            <div
              className={cn(
                "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8",
                isDark ? "text-white/40" : "text-gray-700"
              )}
            >
              <div className="flex items-center gap-2">
                <CheckCircle
                  className={cn(
                    "h-5 w-5",
                    isDark ? "text-rose-400" : "text-indigo-600"
                  )}
                />
                <span className="text-sm sm:text-base">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  className={cn(
                    "h-5 w-5",
                    isDark ? "text-rose-400" : "text-indigo-600"
                  )}
                />
                <span className="text-sm sm:text-base">30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  className={cn(
                    "h-5 w-5",
                    isDark ? "text-rose-400" : "text-indigo-600"
                  )}
                />
                <span className="text-sm sm:text-base">Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Shapes */}
        <ElegantShape
          delay={0.8}
          width={500}
          height={120}
          rotate={15}
          gradient={
            isDark ? "from-indigo-500/[0.08]" : "from-indigo-400/[0.15]"
          }
          isDark={isDark}
          className="right-[-10%] top-[30%]"
        />
        <ElegantShape
          delay={1}
          width={350}
          height={90}
          rotate={-20}
          gradient={isDark ? "from-rose-500/[0.08]" : "from-rose-400/[0.15]"}
          isDark={isDark}
          className="left-[-8%] bottom-[20%]"
        />
      </section>

      {/* Footer */}
      <footer
        className={cn(
          "relative py-16 border-t transition-colors duration-150",
          isDark
            ? "bg-[#030303] border-white/[0.08]"
            : "bg-gradient-to-b from-white to-gray-50 border-gray-200/30"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t to-transparent",
            isDark ? "from-black/20" : "from-gray-100/30"
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-white" />
                </div>
                <span
                  className={cn(
                    "text-2xl font-bold",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  FinanceFlow
                </span>
              </div>
              <p
                className={cn(
                  "mb-6 max-w-md",
                  isDark ? "text-white/60" : "text-gray-700"
                )}
              >
                Empowering the future of finance through innovative technology
                and exceptional user experience.
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex items-center gap-2",
                    isDark ? "text-white/40" : "text-gray-600"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div
                  className={cn(
                    "flex items-center gap-2",
                    isDark ? "text-white/40" : "text-gray-600"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@financeflow.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4
                className={cn(
                  "font-semibold mb-4",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                Products
              </h4>
              <ul
                className={cn(
                  "space-y-3",
                  isDark ? "text-white/60" : "text-gray-700"
                )}
              >
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  Personal Banking
                </li>
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  Business Solutions
                </li>
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  Investment Platform
                </li>
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  API Services
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={cn(
                  "font-semibold mb-4",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                Company
              </h4>
              <ul
                className={cn(
                  "space-y-3",
                  isDark ? "text-white/60" : "text-gray-700"
                )}
              >
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  About Us
                </li>
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  Careers
                </li>
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  Press
                </li>
                <li
                  className={cn(
                    "transition-colors cursor-pointer",
                    isDark ? "hover:text-white" : "hover:text-gray-900"
                  )}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>

          <div
            className={cn(
              "border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center",
              isDark ? "border-white/[0.08]" : "border-gray-300"
            )}
          >
            <p
              className={cn(
                "text-sm",
                isDark ? "text-white/40" : "text-gray-600"
              )}
            >
              © 2024 FinanceFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span
                className={cn(
                  "text-sm transition-colors cursor-pointer",
                  isDark
                    ? "text-white/40 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Privacy Policy
              </span>
              <span
                className={cn(
                  "text-sm transition-colors cursor-pointer",
                  isDark
                    ? "text-white/40 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Terms of Service
              </span>
              <span
                className={cn(
                  "text-sm transition-colors cursor-pointer",
                  isDark
                    ? "text-white/40 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Security
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SignUpModal
        isOpen={modals.signUp}
        onClose={() => closeModal("signUp")}
        isDark={isDark}
      />

      <DemoModal
        isOpen={modals.demo}
        onClose={() => closeModal("demo")}
        isDark={isDark}
      />

      <ContactModal
        isOpen={modals.contactDemo}
        onClose={() => closeModal("contactDemo")}
        type="demo"
        isDark={isDark}
      />

      <ContactModal
        isOpen={modals.contactSales}
        onClose={() => closeModal("contactSales")}
        type="sales"
        isDark={isDark}
      />
    </div>
  );
}
