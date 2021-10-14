import * as React from 'react';
import ReactDOM from 'react-dom';
import { PageProps } from 'gatsby';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { sectionLayoutParentAnimation } from '../utils/animations';

export default function SectionLayout({ children, noBottomBorder }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionLayoutParentAnimation}
      // className={`text-center   border-gray-200 ${
      //   noBottomBorder ? ' border-b-0 ' : 'border-b-2 order-gray-200'
      // }
      // `}
      className="text-center"
    >
      {children}
    </motion.div>
  );
}
