import React from "react";
import { FooterItems } from "@/types";
import FooterContainer from "../ui/footer-container";
import FooterContent from "../ui/footer-content";
import FooterCopyright from "../ui/footer-copyright";
import FooterLinks from "../ui/footer-link";


interface SiteFooterProps {
  footerItems: FooterItems;
}

const SiteFooter = ({ footerItems }: SiteFooterProps) => {
  return (
    <FooterContainer>
      <FooterContent title={footerItems.title}>
        <FooterLinks items={footerItems.items} />
      </FooterContent>
      <FooterCopyright
        year={footerItems.footerCopyRightInfo.year}
        owner={footerItems.footerCopyRightInfo.owner}
      />
    </FooterContainer>
  );
};

export default SiteFooter;
