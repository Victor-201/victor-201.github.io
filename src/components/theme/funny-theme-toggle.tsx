import * as React from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

const Stars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
  </svg>
);

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { themeDisclaimers } from "@/data/constants";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function FunnyThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { setTheme, theme } = useTheme();
  const [darkCount, setDarkCount] = React.useState(0);
  const [lightCount, setLightCount] = React.useState(0);
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const { toast } = useToast();

  const toggleTheme = async (newTheme: string, event: React.MouseEvent) => {
    // @ts-ignore
    if (!document.startViewTransition || !event) {
      setTheme(newTheme);
      return;
    }

    const { top, left, width, height } = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  const goLight = (e: React.MouseEvent) => {
    setLightCount(lightCount + 1);
    toggleTheme("light", e);
    setPopoverOpen(false);
  };

  const goDark = (e: React.MouseEvent) => {
    const description =
      themeDisclaimers.dark[darkCount % themeDisclaimers.dark.length];
    setDarkCount(darkCount + 1);
    toast({
      description: description,
      className:
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4",
    });
    toggleTheme("dark", e);
  };

  const isDarkTheme = theme !== "light";

  return (
    <Popover
      open={popoverOpen}
      onOpenChange={(open) => {
        if (!isDarkTheme && open) return;
        setPopoverOpen(open);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative rounded-full overflow-hidden shadow-inner transition-colors duration-500",
            isDarkTheme ? "bg-slate-800" : "bg-blue-500",
            className,
          )}
          onClick={(e) => {
            if (!isDarkTheme) {
              e.preventDefault();
              goDark(e);
            }
          }}
        >
      {/* White Clouds */}
      <div
        className={cn(
          "absolute right-0 z-30 transition-all duration-500",
          isDarkTheme ? "top-[100%]" : "top-0",
        )}
      >
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*12)] top-[calc(1*(var(--header-height)*0.5)/20*4)] h-[calc((var(--header-height)*0.5)/20*16)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*18)] top-[calc(1*(var(--header-height)*0.5)/20*12)] h-[calc((var(--header-height)*0.5)/20*12)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*26)] top-[calc(1*(var(--header-height)*0.5)/20*14)] h-[calc((var(--header-height)*0.5)/20*12)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*38)] top-[calc(1*(var(--header-height)*0.5)/20*16)] h-[calc((var(--header-height)*0.5)/20*20)] aspect-[1/1] rounded-full bg-white"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*44)] top-[calc(1*(var(--header-height)*0.5)/20*17)] h-[calc((var(--header-height)*0.5)/20*14)] aspect-[1/1] rounded-full bg-white"></div>
      </div>

      {/* Blue Background Clouds */}
      <div
        className={cn(
          "absolute right-1 z-[0] transition-all duration-500",
          isDarkTheme ? "top-[100%]" : "top-[-15%]",
        )}
      >
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*12)] top-[calc(1*(var(--header-height)*0.5)/20*4)] h-[calc((var(--header-height)*0.5)/20*16)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*18)] top-[calc(1*(var(--header-height)*0.5)/20*12)] h-[calc((var(--header-height)*0.5)/20*12)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*26)] top-[calc(1*(var(--header-height)*0.5)/20*14)] h-[calc((var(--header-height)*0.5)/20*12)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*38)] top-[calc(1*(var(--header-height)*0.5)/20*16)] h-[calc((var(--header-height)*0.5)/20*20)] aspect-[1/1] rounded-full bg-blue-200"></div>
        <div className="absolute left-[calc(-1*(var(--header-height)*0.5)/20*44)] top-[calc(1*(var(--header-height)*0.5)/20*17)] h-[calc((var(--header-height)*0.5)/20*14)] aspect-[1/1] rounded-full bg-blue-200"></div>
      </div>

      {/* Stars */}
      <div
        className={cn(
          "absolute left-0 w-full h-full pointer-events-none z-[0] transition-all duration-500 text-yellow-300",
          isDarkTheme ? "bottom-[0]" : "bottom-[100%]",
        )}
      >
        <Stars className="absolute left-[5%] top-[12%] w-[7%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[15%] top-[35%] w-[7%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[30%] top-[70%] w-[7%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[45%] top-[65%] w-[7%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[5%] top-[45%] w-[11%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[20%] top-[7%] w-[11%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[35%] top-[2%] w-[11%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[15%] top-[60%] w-[12%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[25%] top-[30%] w-[12%] h-auto fill-white stroke-white" />
        <Stars className="absolute left-[40%] top-[20%] w-[14%] h-auto fill-white stroke-white" />
      </div>

      {/* Toggle Button Container - Sun/Moon */}
      <div
        className={cn(
          "group absolute top-1/2 -translate-y-1/2 rounded-full shadow-lg transition-all duration-500 h-[calc((var(--header-height)*0.5)-8px)] aspect-[1/1] flex items-center justify-center",
          isDarkTheme
            ? "left-[calc((var(--header-height)*0.5)*3/2)]"
            : "left-[6px]",
        )}
      >
        <div className="absolute rounded-full pointer-events-none h-[calc(3*(var(--header-height)*0.5))] aspect-[1/1] bg-stone-100/15 z-[0] transition-transform duration-600 group-hover:scale-[1.15]"></div>
        <div className="absolute rounded-full pointer-events-none h-[calc(2.3*(var(--header-height)*0.5))] aspect-[1/1] bg-stone-100/20 z-[0] transition-transform duration-600 group-hover:scale-[1.15]"></div>
        <div className="absolute rounded-full pointer-events-none h-[calc(1.5*(var(--header-height)*0.5))] aspect-[1/1] bg-stone-100/40 z-[0] transition-transform duration-600 group-hover:scale-[1.15]"></div>

        {/* Sun */}
        <div
          className={cn(
            "absolute h-[calc((var(--header-height)*0.5)-8px)] aspect-[1/1] rounded-full transition-all duration-500 bg-yellow-400",
            isDarkTheme
              ? "left-0 opacity-0 pointer-events-none"
              : "left-0 opacity-100",
          )}
        ></div>

        {/* Moon */}
        <div
          className={cn(
            "absolute h-[calc((var(--header-height)*0.5)-8px)] aspect-[1/1] rounded-full transition-all duration-500 bg-slate-300",
            isDarkTheme
              ? "left-0 opacity-100"
              : "left-0 opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute top-[4px] left-[14px] w-2 h-2 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute top-[16px] left-[6px] w-3 h-3 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute top-[18px] left-[22px] w-1.5 h-1.5 bg-slate-400 rounded-full shadow-inner" />
        </div>
      </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-[99999] flex flex-col items-center gap-2 w-80 md:w-auto md:max-w-[420px]">
        <p className="text-sm text-center">
          {
            themeDisclaimers.light[
              lightCount % themeDisclaimers.light.length
            ]
          }
        </p>
        <Button onClick={goLight}>Go Light</Button>
      </PopoverContent>
    </Popover>
  );
}
