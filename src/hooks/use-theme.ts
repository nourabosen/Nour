import { useState, useEffect } from "react";
import { getDefaultColorMode } from "@/utils";

interface Theme {
  mode: "dark" | "light";
}

const useTheme = (): readonly [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>({
    mode: getDefaultColorMode(),
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme({ mode: storedTheme as "dark" | "light" });
    }
  }, []);

  const toggle = () => {
    const newMode = theme.mode === "dark" ? "light" : "dark";
    setTheme({ mode: newMode });
    localStorage.setItem("theme", newMode);
  };

  return [theme, toggle];
};

export default useTheme;
