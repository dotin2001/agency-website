"use client";

import type { ThemePreference } from "@/app/theme-provider";
import { useTheme } from "@/app/theme-provider";
import type { SiteThemeControlContent } from "@/lib/content/site";

function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

export function ThemeControl({
  content,
}: Readonly<{ content: SiteThemeControlContent }>) {
  const { preference, setPreference } = useTheme();

  return (
    <label className="flex min-h-11 items-center gap-2 text-sm text-[var(--color-text-secondary)]">
      <span>{content.label}</span>
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
        <option value="system">{content.systemLabel}</option>
        <option value="light">{content.lightLabel}</option>
        <option value="dark">{content.darkLabel}</option>
      </select>
    </label>
  );
}
