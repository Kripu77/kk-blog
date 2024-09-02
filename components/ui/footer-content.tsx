import React from "react";
import { TypographySmall } from '../ui/typography-small';

const FooterContent: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
  return (
    <section className="space-y-6">
      <TypographySmall text={title} />
      {children}
    </section>
  );
};

export default FooterContent;
