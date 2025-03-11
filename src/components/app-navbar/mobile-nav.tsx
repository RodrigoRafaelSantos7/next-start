import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Logo } from "./logo";
import { SubMenuLink } from "./sub-menu-link";
import type { AppNavbarProps, MenuItem } from "./types";

interface MobileNavProps {
  logo: NonNullable<AppNavbarProps["logo"]>;
  menu: AppNavbarProps["menu"];
  auth: AppNavbarProps["auth"];
}

export const MobileNav = ({ logo, menu, auth }: MobileNavProps) => {
  return (
    <div className="mx-5 block lg:hidden">
      <div className="flex items-center justify-between">
        <Logo {...logo} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <Logo {...logo} />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                {menu?.map((item) => (
                  <MobileMenuItem key={item.title} item={item} />
                ))}
              </Accordion>

              <div className="flex flex-col gap-3">
                {auth && (
                  <>
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const MobileMenuItem = ({ item }: { item: MenuItem }) => {
  if (item.items) {
    return (
      <AccordionItem value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};
