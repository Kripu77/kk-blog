"use client";

import { AboutSection } from "@/components/about-section";
import KripuKhadka from "@/assets/kripukhadka.webp";
import AboutCard from "@/components/about-card";

import { motion } from "framer-motion";




export default function Home() {
  return (
    <main>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 5} }}
        variants={{ visible: { transition: { staggerChildren: 0.4} } }}
      >
        <AboutSection
          ImageLink={KripuKhadka}
          title="Hi, 👋 I'm Kripu Khadka!"
          description="Software Engineer specializing in crafting innovative solutions through code...💭"
        />

        <AboutCard />
      </motion.div>
    </main>
  );
}
