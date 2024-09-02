import React from "react";

import { TypographyMuted } from './typography-muted';

const FooterCopyright: React.FC<{ year: number; owner: string }> = ({ year, owner }) => {
  return (
    <section>
      <TypographyMuted text={`Copyright © ${year} ${owner}`} />
    </section>
  );
};

export default FooterCopyright;
