"use client";


import React from "react";
import { Separator } from "../ui/separator";
import {motion} from "framer-motion"
const visible = { opacity: 1, x: 0, transition: { duration: 0.5 } };
const variants = {
  hidden: { opacity: 0, y: 10 }, 
  visible,
};
const FooterContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.footer 
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 5} }}
    variants={{ visible: { transition: { staggerChildren: 0.4} } }}
     className=" w-full border-t bg-background mt-20 ">
      <Separator />
      <motion.section className=" m-6 max-w-screen-lg mx-auto flex flex-col items-center space-y-8 " variants={variants}>
        {children}
      </motion.section>
    </motion.footer>
  );
};

export default FooterContainer;
