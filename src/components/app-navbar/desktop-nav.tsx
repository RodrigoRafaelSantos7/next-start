import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Logo } from "./logo";
import { SubMenuLink } from "./sub-menu-link";
import { ThemeSwitcher } from "./theme-switcher";
import type { AppNavbarProps, MenuItem } from "./types";

interface DesktopNavProps {
  logo: NonNullable<AppNavbarProps["logo"]>;
  menu: AppNavbarProps["menu"];
  auth: AppNavbarProps["auth"];
}

export const DesktopNav = ({ logo, menu, auth }: DesktopNavProps) => {
  return (
    <nav className="hidden justify-between lg:flex">
      <div className="flex items-center gap-6">
        <Logo {...logo} />
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {menu?.map((item) => (
                <DesktopMenuItem key={item.title} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex gap-2">
        <ThemeSwitcher />
        {auth && (
          <>
            <Button asChild variant="outline" size="sm">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

const DesktopMenuItem = ({ item }: { item: MenuItem }) => {
  if (item.items) {
    return (
      <NavigationMenuItem className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      className="group bg-background text-muted-foreground hover:bg-muted hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      href={item.url}
    >
      {item.title}
    </a>
  );
};
