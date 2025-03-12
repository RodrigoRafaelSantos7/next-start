"use client";

import { useEffect, useState } from "react";

import { RiMoonClearLine, RiSunLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import useSystemTheme from "@/hooks/use-system-theme";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      size="sm"
      variant="outline"
      className={cn(className)}
    >
      {theme === "dark" ? <RiSunLine /> : <RiMoonClearLine />}
    </Button>
  );
}
