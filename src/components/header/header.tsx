import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/lib/app-config";
import { useLocale } from "@/locales/use-locale";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";
import LocaleToggle from "../locale-toggle";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const { t } = useLocale();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {/* Blur overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={background}
            initial="initial"
            animate="open"
            exit="closed"
            className={styles.background}
          />
        )}
      </AnimatePresence>

      <motion.header
        className={cn(
          styles.header,
          "transition-colors delay-100 duration-500 ease-in z-1000",
        )}
        style={{
          background: isActive ? "hsl(var(--background) / .1)" : "transparent",
        }}
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: loader ? 3.5 : 0,
          duration: 0.8,
        }}
      >
        <div className={cn(styles.bar, "flex items-center justify-between")}>
          <Link to="/" className="flex items-center justify-center">
            <Button variant={"link"} className="text-xl">
              {t("seo", "author")}
            </Button>
          </Link>

          <FunnyThemeToggle className="h-[calc(var(--header-height)*0.5)] aspect-5/2 mr-4 md:flex" />

          <OnlineUsers />

          {config.githubUsername && (
            <GitHubStarsButton
              username={config.githubUsername}
              repo={config.githubRepo}
              className="mr-4"
            />
          )}

          <LocaleToggle className="mr-4" />

          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            className={cn(
              styles.el,
              "m-0 p-0 h-6 bg-transparent flex items-center justify-center",
            )}
          >
            <div className="relative hidden md:flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>

            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
