import React from "react";
import { Settings, Minus, Square, X, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
} from "@/helpers/window_helpers";
import { cn } from "@/utils/tailwind";
import { toggleTheme } from "@/helpers/theme_helpers";

interface TitleBarProps {
  className?: string;
}

export default function TitleBar({ className }: TitleBarProps) {
  const handleSettings = () => {
    console.log("Navigating to settings");
  };

  // Detect platform
  const isMac =
    typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") > -1;

  return (
    <div
      className={cn(
        "bg-background/80 border-border/50 draglayer supports-[backdrop-filter]:bg-background/75 z-50 flex h-8 w-full items-center justify-between border-b backdrop-blur-lg",
        className,
      )}
    >
      {/* Left side - Traffic lights space on macOS + Controls */}
      <div className="flex h-full min-w-0 items-center px-3">
        {isMac && <div className="w-20" />}
        <SidebarTrigger className="no-drag hover:bg-accent/50 mr-2 size-4 transition-colors" />
      </div>

      {/* Center - Page Title */}
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-foreground/90 truncate text-center text-sm font-medium tracking-tight">
          Electron | Shadcn | Tailwind - Starter
        </h1>
      </div>

      {/* Right side - Settings and Window Controls */}
      <div className="flex h-full items-center justify-end gap-1 px-3">
        {/* Theme Toggle */}
        <Button
          onClick={toggleTheme}
          size="icon"
          variant="ghost"
          className="hover:bg-accent/50 no-drag h-6 w-6 transition-colors"
        >
          <Moon size={16} className="text-muted-foreground" />
        </Button>

        {/* Settings Button */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent/50 no-drag h-6 w-6 transition-colors"
          onClick={handleSettings}
        >
          <Settings size={16} className="text-muted-foreground" />
        </Button>

        {/* Window Controls - Only show on Windows and Linux */}
        {!isMac && (
          <div className="no-drag ml-2 flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/50 h-6 w-6 transition-colors"
              onClick={minimizeWindow}
            >
              <Minus size={12} className="text-muted-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/50 h-6 w-6 transition-colors"
              onClick={maximizeWindow}
            >
              <Square size={12} className="text-muted-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-destructive hover:text-destructive-foreground h-6 w-6 transition-colors"
              onClick={closeWindow}
            >
              <X size={12} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
