"use client"

import React from "react";
import { TypographySmall } from '../ui/typography-small';
import {motion} from "framer-motion"

const FooterContent: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
  return (
    <motion.section className="space-y-6" variants={{
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show" >
      <TypographySmall text={title} />
      {children}
    </motion.section>
  );
};

export default FooterContent;
