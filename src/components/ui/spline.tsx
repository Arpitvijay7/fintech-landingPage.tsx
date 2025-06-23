"use client";

import { Suspense, lazy, useEffect, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
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
