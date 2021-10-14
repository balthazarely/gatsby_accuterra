import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { sectionLayoutChildAnimation } from '../../utils/animations';

export default function JobCard({ title, location, link }) {
  return (
    <motion.div
      variants={sectionLayoutChildAnimation}
      className="shadow-lg rounded-2xl   bg-white flex items-center justify-center  h-32 "
    >
      <div className="w-full mx-8">
        <a target="BLANK" href={link}>
          <div className="text-lg text-grey-600 font-semibold hover:text-accuterraBlue-500 cursor-pointer">
            {title}
          </div>
        </a>
        <div className="flex items-center flex-row">
          <LocationMarkerIcon
            className="h-6 w-6 text-accuterraBlue-500"
            aria-hidden="true"
          />
          <div className="ml-1 text-grey-600 text-sm">{location}</div>
        </div>
      </div>
    </motion.div>
  );
}
