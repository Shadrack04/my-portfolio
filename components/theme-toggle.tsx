import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme
      ? savedTheme == "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkTheme(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme, hasMounted]);

  const toggleTheme = async () => {
    setIsDarkTheme((prev) => !prev);
  };

  if (!hasMounted) {
    return;
  }

  return (
    <div onClick={toggleTheme}>
      {isDarkTheme ? (
        <SunIcon size={16} aria-hidden="true" className=" text-primary-text" />
      ) : (
        <MoonIcon size={16} aria-hidden="true" className=" text-primary-text" />
      )}
    </div>
  );
}
