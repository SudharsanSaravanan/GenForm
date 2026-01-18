"use client";

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ChartSpline, ClipboardList } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type MenuItems = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

const items: MenuItems[] = [
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <ChartSpline />,
  },
  {
    title: "My Forms",
    url: "/dashboard/forms",
    icon: <ClipboardList />,
  },
];

const DashboardSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          GenForm.ai
        </Link>
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Slide-in Drawer */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-black bg-opacity-30 flex">
           {/* Click outside to close */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
          <div className="bg-white w-80 h-full shadow-lg relative overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="p-6">
              <button
                className="absolute top-4 right-4"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
              <nav className="mt-16 space-y-1">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar (unchanged) */}
      <div className="hidden md:block">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="flex items-center justify-between">
                <Link href={"/"} className="font-bold text-lg">
                  GenForm.ai
                </Link>
              </SidebarGroupLabel>
              <Separator className="my-2" />
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
};

export default DashboardSidebar;
