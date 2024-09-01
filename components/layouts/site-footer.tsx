import { FooterItems } from "@/types";
import React from "react";
import { Separator } from "../ui/separator";
import { TypographyP } from '../ui/typography-p';

interface SiteFooterProps {
  footerItems: FooterItems;
}

const SiteFooter = ({ footerItems }: SiteFooterProps) => {
  return (
    <footer className="w-full border-t bg-background mt-20">
      <Separator />
      <section className="m-10">
        <TypographyP text={footerItems.title} />
      </section>
    </footer>
  );
};

export default SiteFooter;
