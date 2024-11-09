// src/components/layout/Sidebar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { useSidebar } from '@/components/providers/sidebar-provider';

export const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: BarChart, label: 'Analytics', href: '/analytics' },
    { icon: Layers, label: 'Projects', href: '/projects' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside 
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r bg-background/95 backdrop-blur transition-all duration-300 ease-in-out",
        !isSidebarOpen && "w-20"
      )}
    >
      <div className="flex flex-col h-full p-4">
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                !isSidebarOpen && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {isSidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="self-end"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
    </aside>
  );
};