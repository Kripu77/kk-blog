import { MainNavItem } from "@/types";

interface SiteConfig {
    title: string;
    navItems: MainNavItem[];
}

export const siteConfig: SiteConfig = {
    title: "kripukhadka ✨",
    navItems: [
        {
            title: "Home",
            href: "/",
            label: "Home",
            description: "Home page",
        },
        {
            title: "blogs",
            href: "/blogs",
            label: "Blogs",
            description: "Blogs page",
        },
    ],
};
