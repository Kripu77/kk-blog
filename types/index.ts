import { Url } from "next/dist/shared/lib/router/router";

export interface TypographyProps {
  text: string;
}

export interface NavItem {
  title: string;
  href: Url;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItem[];
}

export interface NavItemWithOptionlChildren extends NavItem {
  items?: NavItem[];
}

export type MainNavItem = NavItemWithChildren | NavItemWithOptionlChildren;

export interface AboutConfig {
  title: string;
  imageLink: string;
  description: string;
}

export interface Authors {
  name: string;
  url: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  authors: Authors[];
  navItems: MainNavItem[];
  aboutConfig?: AboutConfig;
  footerItems: FooterItems;
}

export interface AboutSection {
  title: string;
  imageLink: string;
  description: string;
}

export interface FooterItem {
  title: string;
  url: string;
  description: string;
  icon: string;
}
interface FooterCopyrightInfo {
  year: number;
  owner: string;
}

export interface FooterItems {
  title: string;
  items: FooterItem[];
  footerCopyRightInfo: FooterCopyrightInfo;
}
