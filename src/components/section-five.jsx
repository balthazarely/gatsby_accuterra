import React from 'react';
import HollowButtonDark from './ui-components/hollowButtonDark';
import SectionLayout from '../layouts/section-layout';
import { sectionLayoutChildAnimation } from '../utils/animations';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

export default function SectionFive() {
  return (
    <SectionLayout>
      <div className=" pb-16 mb-16  border-b-2 border-gray-300">
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="my-1 text-3xl  text-gray-600 font-bold">
            Ready to add AccuTerra Maps to your Applications?
          </p>
          <p className="my-1  text-lg  font-normal text-gray-700 ">
            Create a free account or contact us for more information
          </p>
        </motion.div>
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="mt-4 mb-1 flex justify-center"
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
