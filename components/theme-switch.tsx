"use client";

import { useEffect, useId, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export default function ThemeSwitch() {
  const id = useId();
  const [hasMounted, setHasMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme == "dark";

    setChecked(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
  }, [checked]);

  const toggleSwitch = async () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      className="group inline-flex flex-col items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="hover:text-primary-color text-primary-text group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(false)}
      >
        <SunIcon size={16} aria-hidden="true" />
      </span>
      {hasMounted && (
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={toggleSwitch}
          aria-labelledby={`${id}-off ${id}-on`}
          aria-label="Toggle between dark and light mode"
        />
      )}

      <span
        id={`${id}-on`}
        className="hover:text-primary-color text-primary-text group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(true)}
      >
        <MoonIcon size={16} aria-hidden="true" />
      </span>
    </div>
  );
}
