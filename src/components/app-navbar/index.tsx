import Link from "next/link";

import { RiGithubFill } from "@remixicon/react";

import { MainNav } from "@/components/app-navbar/main-nav";
import { MobileNav } from "@/components/app-navbar/mobile-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function AppNavbar() {
  return (
    <header className="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <nav className="flex items-center gap-0.5">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0"
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGithubFill />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ThemeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
