
import { useContext } from "react";
import { ThemeContext } from "./ThemeContextDef";
import type { ThemeContextType } from "./ThemeContextDef";

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
