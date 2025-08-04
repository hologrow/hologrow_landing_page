"use client";

import Analytics from "@/components/analytics";
import { CacheKey } from "@/services/constant";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import SignModal from "@/components/sign/modal";
import type { ThemeProviderProps } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { cacheGet } from "@/lib/cache";
import { useAppContext } from "@/contexts/app";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme, setTheme } = useAppContext();

  useEffect(() => {
    // Always use dark mode
    setTheme("dark");
  }, []);

  return (
    <NextThemesProvider forcedTheme="dark" {...props}>
      {children}

      <Toaster position="top-center" richColors />
      <SignModal />
      <Analytics />
    </NextThemesProvider>
  );
}
