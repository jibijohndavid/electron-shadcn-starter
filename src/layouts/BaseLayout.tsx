import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import TitleBar from "@/components/TitleBar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <SidebarProvider>
        <TitleBar />
        {/* Titlebar at the very top */}

        {/* Sidebar and main content below titlebar */}
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <SidebarInset className="bg-red-500">
            <main className="bg-background/95 supports-[backdrop-filter]:bg-background/60 flex-1 overflow-auto backdrop-blur">
              <div className="container mx-auto space-y-6 p-6">{children}</div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
