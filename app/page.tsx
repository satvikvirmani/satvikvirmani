"use client";

import { motion } from "framer-motion";
import Contact from "./components/contact";

const Links = [
  {
    slug: "Linkedin",
    link: "https://www.linkedin.com/in/satvikvirmani/",
  },
  {
    slug: "Github",
    link: "https://github.com/satvikvirmani",
  },
  {
    slug: "Dribbble",
    link: "https://dribbble.com/satvikvirmani",
  },
  {
    slug: "Medium",
    link: "https://satvikvirmani.medium.com/",
  },
];

export default function Home() {
  return (
    <motion.main className="px-4 py-8">
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0 }}
        animate={{ opacity: 1 }}
        className="my-4 text-4xl md:text-5xl font-bold max-w-2xl"
      >
        My name is Satvik Virmani, I’m a Software Developer and turning
        algorithms into pure awesomeness.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        animate={{ opacity: 1 }}
        className="my-4 text-gray-400 dark:text-gray-200 md:text-xl md:font-medium max-w-2xl"
      >
        I am studying Computer Engineering at NIT Kurukshetra, with a strong
        focus on machine learning and web development. My journey blends
        data-driven insights with creative tech solutions.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        animate={{ opacity: 1 }}
        className="my-4 text-gray-400 dark:text-gray-200 md:text-xl md:font-medium max-w-2xl"
      >
        I believe that successful projects stem from collaboration and a spark
        of innovation.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        animate={{ opacity: 1 }}
        className="my-4 flex flex-row justify-start align-middle items-center gap-4"
      >
        {Links.map((item) => {
          return (
            <a
              href={item.link}
              key={item.slug}
              className="text-base md:text-xl cursor-pointer font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              {item.slug}
            </a>
          );
        })}
      </motion.ul>
      <Contact />
    </motion.main>
  );
}
