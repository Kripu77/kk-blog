import React from "react";
import Image, { type StaticImageData } from "next/image";
import { TypographyP } from "./ui/typography-p";
import { motion } from "framer-motion";
import Wave from "./ui/wave";
import AnimatedTypographyH2 from "./ui/animated-typographyH2";
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y:10 },
  visible,
};

interface AboutSectionProps {
  ImageLink: StaticImageData;
  title: string;
  description: string;
}

export const AboutSection = ({
  ImageLink,
  title,
  description,
}: AboutSectionProps) => {
  return (
    <section className="max-w-screen-lg mx-auto flex flex-col items-center space-y-6 pt-24">
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible,
        }}
      >
        <Image
          src={ImageLink}
          alt={title}
          placeholder="blur"
          height={450}
          width={450}
          className="rounded-md object-cover"
        />
      </motion.section>
      <motion.section variants={itemVariants} className="text-center">
        <AnimatedTypographyH2
          text={title}
          animatedElement={<Wave />}
        />
      </motion.section>
      <motion.section variants={itemVariants} className="px-20 text-center">
        <TypographyP text={description} />
      </motion.section>
    </section>
  );
};