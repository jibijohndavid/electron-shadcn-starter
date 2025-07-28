import React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import TitleBar from "@/components/TitleBar";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <h1 className="text-foreground text-4xl font-bold">404</h1>
      <p className="text-muted-foreground text-lg">Page not found</p>
      <p className="text-muted-foreground text-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
}

function Root() {
  console.log("Root component is rendering");
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen flex-col">
        <TitleBar />
        <div className="flex w-full flex-1 overflow-hidden">
          <AppSidebar />
          <main className="bg-background/95 supports-[backdrop-filter]:bg-background/60 scrollbar-hide min-w-0 flex-1 overflow-auto backdrop-blur">
            <div className="w-full min-w-0 space-y-6 p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export const RootRoute = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});
