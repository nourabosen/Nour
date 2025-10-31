import { useState, useEffect } from "react";
import { getDefaultColorMode } from "@/utils";

interface Theme {
  mode: "dark" | "light";
}

const useTheme = (): readonly [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>({ mode: "light" });

  useEffect(() => {
    setTheme({ mode: getDefaultColorMode() });
  }, []);

  const toggle = () => {
    setTheme(({ mode }) => {
      const newMode = mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return { mode: newMode };
    });
  };

  return [theme, toggle];
};

export default useTheme;
