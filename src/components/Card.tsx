import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, rotate: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: 0 }}
      animate={controls}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 m-4"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-400">{title}</div>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          {description}
        </p>
      </div>
      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </motion.div>
  );
};

export default Card;
