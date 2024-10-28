"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Accordian = ({
  disabled,
  post,
  organisation,
  date,
  children,
}: {
  disabled: boolean;
  post: string;
  organisation: string;
  date: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="w-full">
      <div
        className={`w-full ${disabled ? 'cursor-default': 'cursor-pointer'}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="my-2 flex flex-col md:flex-row justify-between">
          <span>{post}</span>
          <span>{date}</span>
        </p>
        <p className="my-2 font-bold">{organisation}</p>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {!disabled && children}
      </motion.div>
    </motion.div>
  );
};

export default Accordian;
