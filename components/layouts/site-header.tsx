import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";
import { TypographyH3 } from "../ui/typography-h3";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex justify-between h-16 items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold leading-none"
                >
                    <TypographyH3 text={siteConfig.title} />
                </Link>
                <MainNav items={siteConfig.navItems} />
                <MobileNav />
            </div>
        </header>
    );
}
