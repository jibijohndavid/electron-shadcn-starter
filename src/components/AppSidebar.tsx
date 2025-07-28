import React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Home, FileText } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";

// Menu items for navigation
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Second Page",
    url: "/second-page",
    icon: FileText,
  },
];

export default function AppSidebar() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <Sidebar className="border-border/50 bg-background/80 supports-[backdrop-filter]:bg-background/75 border-r pt-8 backdrop-blur-lg">
      <SidebarContent className="bg-transparent px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPath === item.url}
                    className="hover:bg-accent/50 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground h-10 px-3 transition-colors"
                  >
                    <Link to={item.url}>
                      <item.icon size={18} className="text-muted-foreground" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-border/50 border-t px-4 py-2">
        <div className="text-muted-foreground flex w-full items-center justify-between text-xs">
          <p className="">
            <a
              href="https://electronjs.org/"
              className="hover:text-red-500 hover:underline"
            >
              Electron
            </a>{" "}
            |{" "}
            <a
              href="https://shadcn.dev/"
              className="hover:text-red-500 hover:underline"
            >
              Shadcn
            </a>{" "}
            |{" "}
            <a
              href="https://tailwindcss.com/"
              className="hover:text-red-500 hover:underline"
            >
              Tailwind
            </a>
          </p>
          <strong className="">v1.0.0</strong>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
