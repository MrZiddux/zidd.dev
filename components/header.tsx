"use client";

import { usePathname } from "next/navigation";
import { Kaisei_Tokumin } from "next/font/google";
import { motion, LayoutGroup } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-kaisei",
});

const navItems = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/blog", name: "blog" },
];

const Logo = () => {
  return (
    <Link aria-label="Ziyadatul Khair" href={"/"}>
      <motion.svg
        className="text-black dark:text-white h-10 w-10"
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 30,
          }}
          d="M22 32H32V15L22 32Z"
          fill="black"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M32 0L14 32H0L18 0H32Z"
          fill="black"
        />
        <motion.path
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 30,
          }}
          d="M10 0H0V17L10 0Z"
          fill="black"
        />
      </motion.svg>
    </Link>
  );
};

function Header(props: any) {
  let currentPath = usePathname() || "/";
  if (currentPath.includes("/blog/")) {
    currentPath = "/blog";
  }
  return (
    <header>
      <div className="px-3">
        <Logo />
      </div>
      <LayoutGroup>
        <nav className="mt-4 flex gap-2">
          {navItems.map(({ path, name }) => {
            const isActive = path === currentPath;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  "font-serif flex align-middle hover:text-zinc-900 transition-colors",
                  {
                    "text-zinc-500": !isActive,
                    "text-zinc-900 font-bold": isActive,
                  }
                )}
              >
                <span className="relative px-3 py-1">
                  {name}
                  {isActive ? (
                    <motion.div
                      layoutId="navigation"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 bg-zinc-100 rounded-md -z-[1]"
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </nav>
      </LayoutGroup>
    </header>
  );
}

export default Header;
