"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { RiStackFill } from "@remixicon/react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <RiStackFill className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/docs/installation"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          href="/"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Components
        </Link>
        <Link
          href="/"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Blocks
        </Link>
        <Link
          href="/"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Charts
        </Link>
        <Link
          href="/"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Themes
        </Link>
        <Link
          href="/"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Colors
        </Link>
      </nav>
    </div>
  );
}
