import Link from "next/link";
import { MainNav } from "./main-nav";
import { TypographyH3 } from "../ui/typography-h3";
import { MobileNav } from "./mobile-nav";
import { SiteConfig } from "@/types";

interface SiteHeaderProps {
  siteConfig: SiteConfig;
}

export function SiteHeader({ siteConfig }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex justify-between h-16 items-center">
        <Link href="/" >
          <TypographyH3 text={siteConfig.title} />
        </Link>

        <MainNav items={siteConfig.navItems} />
        <MobileNav items={siteConfig.navItems} />
      </div>
    </header>
  );
}
