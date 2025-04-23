
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="w-full border-b-[3px] border-black bg-white">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-black font-display bg-primary text-white px-4 py-2 mondrian-border transform hover:rotate-2 transition-transform">
            The Lab
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {["Writing", "Photography", "Videos", "Apps"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink asChild>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-lg font-bold hover:bg-primary hover:text-white px-3 py-2 transition-colors"
                  >
                    {item}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
