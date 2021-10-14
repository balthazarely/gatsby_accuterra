import React from 'react';
import HollowButtonDark from './hollowButtonDark';
import HollowButtonDarkSmall from './HollowButtonDarkSmall';
import { motion } from 'framer-motion';
import { sectionLayoutChildAnimation } from '../../utils/animations';
import { Link } from 'gatsby';

export default function BasicCard({ title, body, cta, link }) {
  return (
    <motion.div
      variants={sectionLayoutChildAnimation}
      className="w-full p-4 rounded-xl  bg-white  mx-auto shadow-lg   "
    >
      <div className="p-3 lg:p-6 ">
        <div className=" h-12 mb-0 md:mb-4 xl:mb-0">
          <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-700 ">
            {title}
          </h1>
        </div>
        <p className="mx-auto text-sm font-medium  leading-normal  text-gray-700 ">
          {body}
        </p>
        <div className="mt-4">
          <Link to={link}>
            <HollowButtonDarkSmall>{cta}</HollowButtonDarkSmall>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
