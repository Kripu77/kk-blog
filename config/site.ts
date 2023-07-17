import { MainNavItem } from "@/types";

interface SiteConfig {
    title: string;
    description: string;
    navItems: MainNavItem[];
}

export const siteConfig: SiteConfig = {
    title: "kripukhadka ✨",
    description: "Hi, I'm Kripu Khadka. I'm a full-stack developer.",
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
