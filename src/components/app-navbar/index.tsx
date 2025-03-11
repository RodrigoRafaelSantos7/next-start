import { defaultNavConfig } from "./default-config";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import type { AppNavbarProps, MenuItem } from "./types";

/**
 * AppNavbar - Main navigation component for the application
 *
 * Can be used as a shared component across the application or customized
 * for specific features by passing different props.
 */
const AppNavbar = ({
  logo = defaultNavConfig.logo,
  menu = defaultNavConfig.menu,
  auth = defaultNavConfig.auth,
}: AppNavbarProps) => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <DesktopNav logo={logo!} menu={menu} auth={auth} />

        {/* Mobile Navigation */}
        <MobileNav logo={logo!} menu={menu} auth={auth} />
      </div>
    </section>
  );
};

export { AppNavbar };
export type { AppNavbarProps, MenuItem };
