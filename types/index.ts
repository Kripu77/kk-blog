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

export interface AboutSection {
  title: string;
  imageLink: string;
  description: string;
}
