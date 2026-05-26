import { useCallback, useEffect, useState } from "react";
type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

const isTheme = (value: string | null): value is Theme => {
  return ["dark", "light"].includes(value as Theme);
};

const getSystemTheme = (): Theme => {
  console.log("matc media", window.matchMedia);
  return window.matchMedia("(prefer-color-scheme:dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (isTheme(stored)) {
    return stored;
  }

  return getSystemTheme();
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  return { theme, toggleTheme };
}
