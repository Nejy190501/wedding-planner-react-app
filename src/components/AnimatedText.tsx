import { motion } from "motion/react";
import { ElementType } from "react";

interface Props {
  text: string;
  className?: string;
  el?: ElementType;
  once?: boolean;
}

export default function AnimatedText({ text, className = "", el: Wrapper = "p", once = true }: Props) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        className="flex flex-wrap justify-center"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="mr-2 mb-1">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
