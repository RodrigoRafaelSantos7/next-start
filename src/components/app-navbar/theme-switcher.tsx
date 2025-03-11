"use client";

import { useEffect, useState } from "react";

import { RiMoonClearLine, RiSunLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import useSystemTheme from "@/hooks/use-system-theme";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "dark" ? (
    <Button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      variant="outline"
      size="sm"
    >
      <RiSunLine />
    </Button>
  ) : (
    <Button onClick={() => setTheme("dark")} variant="outline" size="sm">
      <RiMoonClearLine />
    </Button>
  );
}
