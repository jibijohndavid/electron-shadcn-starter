import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, Code, Palette, Rocket } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Electron + shadcn/ui Starter
          </h1>
          <p className="text-muted-foreground text-lg">
            A modern desktop app template with React, TypeScript, and beautiful
            components
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card border-border/50 rounded-xl border p-6 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Electron
              </p>
              <p className="text-foreground text-2xl font-bold">Desktop</p>
            </div>
            <div className="rounded-lg bg-orange-500/10 p-2">
              <Rocket size={20} className="text-orange-500" />
            </div>
          </div>
        </div>
        <div className="bg-card border-border/50 rounded-xl border p-6 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                shadcn/ui
              </p>
              <p className="text-foreground text-2xl font-bold">Styled</p>
            </div>
            <div className="rounded-lg bg-purple-500/10 p-2">
              <Palette size={20} className="text-purple-500" />
            </div>
          </div>
        </div>
        <div className="bg-card border-border/50 rounded-xl border p-6 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                React 19
              </p>
              <p className="text-foreground text-2xl font-bold">Latest</p>
            </div>
            <div className="rounded-lg bg-blue-500/10 p-2">
              <Code size={20} className="text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-card border-border/50 rounded-xl border p-6 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                TypeScript
              </p>
              <p className="text-foreground text-2xl font-bold">Ready</p>
            </div>
            <div className="rounded-lg bg-green-500/10 p-2">
              <Zap size={20} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-card border-border/50 rounded-xl border p-6 shadow-sm backdrop-blur-sm">
        <h2 className="text-foreground mb-4 text-xl font-semibold">
          Getting Started
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This template includes everything you need to build a modern desktop
            application:
          </p>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>• Electron with React 19 and TypeScript</li>
            <li>• shadcn/ui components with Tailwind CSS</li>
            <li>• TanStack Router for navigation</li>
            <li>• Custom titlebar with window controls</li>
            <li>• Dark/light theme support</li>
            <li>• Modern sidebar navigation</li>
          </ul>
          <div className="flex gap-3 pt-2">
            <Button className="gap-2">
              <Code size={16} />
              Start Building
            </Button>
            <Button variant="outline" className="gap-2">
              <Rocket size={16} />
              View Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
