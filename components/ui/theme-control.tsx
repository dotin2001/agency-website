"use client";

import type { ThemePreference } from "@/app/theme-provider";
import { useTheme } from "@/app/theme-provider";

type Locale = "en" | "vi";

const labels = {
  en: {
    theme: "Theme",
    system: "System",
    light: "Light",
    dark: "Dark",
  },
  vi: {
    theme: "Giao diện",
    system: "Hệ thống",
    light: "Sáng",
    dark: "Tối",
  },
} as const;

function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

export function ThemeControl({ locale }: Readonly<{ locale: Locale }>) {
  const { preference, setPreference } = useTheme();
  const copy = labels[locale];

  return (
    <label className="flex min-h-11 items-center gap-2 text-sm text-[var(--color-text-secondary)]">
      <span>{copy.theme}</span>
      <select
        className="min-h-10 rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] px-3 text-sm text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]"
        value={preference}
        onChange={(event) => {
          const nextPreference = event.target.value;

          if (isThemePreference(nextPreference)) {
            setPreference(nextPreference);
          }
        }}
      >
        <option value="system">{copy.system}</option>
        <option value="light">{copy.light}</option>
        <option value="dark">{copy.dark}</option>
      </select>
    </label>
  );
}
