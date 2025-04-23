
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold font-display">The Lab</span>
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/writing" className={cn(navigationMenuTriggerStyle(), "group")}>
                  Writing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/photography" className={cn(navigationMenuTriggerStyle(), "group")}>
                  Photography
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/videos" className={cn(navigationMenuTriggerStyle(), "group")}>
                  Videos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/apps" className={cn(navigationMenuTriggerStyle(), "group")}>
                  Apps
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
