import React from 'react';
import HollowButtonDark from './ui-components/hollowButtonDark';
import { StaticImage } from 'gatsby-plugin-image';
import SectionLayout from '../layouts/section-layout';
import { motion } from 'framer-motion';
import { sectionLayoutChildAnimation } from '../utils/animations';
import { Link } from 'gatsby';

export default function SectionOne() {
  return (
    <SectionLayout>
      <div className="pb-16 mb-16  border-b-2 border-gray-300">
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="max-w-2xl mx-auto text-center  "
        >
          <p className="my-1 text-3xl  text-gray-600 font-bold">
            Adventure begins where the pavement ends
          </p>
          <p className="my-1  text-lg  font-normal text-gray-700 ">
            AccuTerra Maps are designed specifically for outdoor recreation
          </p>
        </motion.div>
        <motion.div variants={sectionLayoutChildAnimation}>
          <StaticImage
            className="flex justify-center my-10  "
            style={{ maxHeight: '370px' }}
            src="../assets/images/section-1-group.png"
            alt="a map photo"
          />
        </motion.div>
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="my-1 mb-1 flex justify-center"
        >
          <Link to="https://account.accuterra.com/account/#/account/basics/signup">
            <HollowButtonDark>Sign up for free</HollowButtonDark>
          </Link>
          <Link to={'/contact/'}>
            <HollowButtonDark>Contact Sales</HollowButtonDark>
          </Link>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
