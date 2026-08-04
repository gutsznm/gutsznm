"use client";

import { ToggleTheme } from "@/components/ui/toggle-theme";

export function Header() {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}