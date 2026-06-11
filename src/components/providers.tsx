import SocketContextProvider from "@/contexts/socketio";
import Preloader from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { LocaleProvider } from "@/locales/use-locale";

import { TooltipProvider } from "./ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <LocaleProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
    >
      <Preloader>
        <SocketContextProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster />
        </SocketContextProvider>
      </Preloader>
    </ThemeProvider>
  </LocaleProvider>;
};
