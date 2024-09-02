import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  title: "kripukhadka ✨",
  description: "Hi, I'm Kripu Khadka. I'm a full-stack developer.",
  authors: [
    {
      name: "Kripu Khadka",
      url: "https://kripukhadka.com",
    },
  ],
  navItems: [
    {
      title: "Home",
      href: "/",
      label: "Home",
      description: "Home page",
    },
    {
      title: "Blogs",
      href: "https://medium.com/@khadkakripu4",
      label: "Blogs",
      description: "Blogs page",
    },
  ],
  footerItems: {
    title: "© Kripu Khadka ✨",
    items: [
      {
        title: "Github",
        url: "https://github.com/Kripu77",
        description: "Github",
        icon: "github",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/kripu-khadka/",
        description: "LinkedIn",
        icon: "linkedin",
      },
      {
        title: "Mail",
        url: "mailto:khadkakripu4@gmail.com",
        description: "Mail",
        icon: "mail",
      },
    ],
    footerCopyRightInfo: {
      year: new Date().getFullYear(),
      owner: "Kripu Khadka",
    },
  },
};
