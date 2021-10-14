import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionLayout from '../layouts/section-layout';
import {
  sectionLayoutChildAnimation,
  sectionLayoutParentAnimation,
} from '../utils/animations';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function SectionFour() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
      className={`text-center`}
    >
      <div className="pb-16 mb-16 ">
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="px-4 max-w-2xl mx-auto text-center "
        >
          <div className="  ">
            <p className="my-1 text-3xl  text-gray-600 font-bold">
              See the difference with AccuTerra Maps
            </p>
            <p className="my-1  text-md  font-normal text-gray-700 ">
              AccuTerra was built by a team of avid outdoorsmen, hikers,
              cyclists, backpackers, and lovers of the great outdoors. Our maps
              are created with a unique collection of the nation's multi-use,
              equestrian, foot traffic, OHV, and snowmobile trails, combined
              with open mapping solutions. Like having a trail map for the whole
              world, AccuTerra ensures you never need to search for a quality
              map again.
            </p>
          </div>
        </motion.div>
        <motion.div variants={sectionLayoutChildAnimation} className="mt-12 ">
          <StaticImage
            quality={100}
            className="max-w-72"
            src="../assets/images/hiker-phone-laptop.jpg"
            alt="a map photo"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
