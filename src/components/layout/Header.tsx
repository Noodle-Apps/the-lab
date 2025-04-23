
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const location = useLocation();
  
  const getHeaderColor = () => {
    const path = location.pathname;
    if (path.startsWith('/photography')) return 'bg-page-photography';
    if (path.startsWith('/videos')) return 'bg-page-videos';
    if (path.startsWith('/apps')) return 'bg-page-apps';
    return 'bg-primary'; // Default/Writing color
  };

  const getHoverColor = (path: string) => {
    if (path === 'photography') return 'hover:bg-page-photography';
    if (path === 'videos') return 'hover:bg-page-videos';
    if (path === 'apps') return 'hover:bg-page-apps';
    return 'hover:bg-primary';
  };

  return (
    <header className="w-full border-b-[3px] border-black bg-white">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <span className={cn(
            "text-3xl font-black font-display text-white px-4 py-2 mondrian-border transform hover:rotate-2 transition-transform",
            getHeaderColor()
          )}>
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
                    className={cn(
                      "text-lg font-bold hover:text-white px-3 py-2 transition-colors",
                      getHoverColor(item.toLowerCase())
                    )}
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
