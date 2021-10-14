import React, { useEffect, useState } from 'react';

import Layout from '../layouts/layout';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import Seo from '../components/seo';
import JobCard from '../components/ui-components/job-card';
import {
  sectionLayoutChildAnimation,
  sectionLayoutParentAnimation,
} from '../utils/animations';

const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export default function Careers({ location }) {
  const [officeLocation, setOfficeLocation] = useState('All');

  const locations = ['All', 'USA', 'Czechia'];

  const careers = [
    {
      title: 'Senior Full Stack Developer - Maps',
      location: 'Castle Rock, USA',
      country: ['USA', 'All'],
      link: 'https://www.linkedin.com/jobs/view/2693760373/?alternateChannel=search&refId=S6QGk%2B0IMj3nYxCfxppKQQ%3D%3D&trackingId=VH5SOpb1GVTVw3a%2FGzRXhg%3D%3D',
    },
    {
      title: 'Senior Mobile Developer - Android',
      location: 'Castle Rock, USA',
      country: ['USA', 'All'],
      link: 'https://www.linkedin.com/jobs/view/2693756800/?alternateChannel=search&refId=S6QGk%2B0IMj3nYxCfxppKQQ%3D%3D&trackingId=4ZfD15Zjo5kL0hBrq0CjnA%3D%3D',
    },
    {
      title: 'Senior Mobile Developer - iOS',
      location: 'Castle Rock, USA',
      country: ['USA', 'All'],
      link: 'https://www.linkedin.com/jobs/view/2693753778/?alternateChannel=search&refId=S6QGk%2B0IMj3nYxCfxppKQQ%3D%3D&trackingId=yQKp1qHE240ECclWTxAYAg%3D%3D',
    },
    {
      title: 'Senior Mobile Developer - Android',
      location: 'Czechia',
      country: ['Czechia', 'All'],
      link: 'https://www.linkedin.com/jobs/view/2693760422/?refId=lWM0yjHwbuFQevaXr6AC2g%3D%3D&trackingId=bj4zogfLyL0fgZ6MbvIizQ%3D%3D',
    },
  ];

  return (
    <Layout location={location}>
      <Seo title="careers" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto  ">
          <div className="py-24 ">
            <p className="my-1 text-3xl  text-gray-600 font-bold">Careers</p>

            <p className="my-1 text-base max-w-screen-sm  text-gray-600 font-normal">
              Explore a career at NeoTreks in either our US or Czechia office.
            </p>
            <motion.div
              className="flex justify-center flex-row text-center mt-8 "
              variants={frameVariants}
              initial="hidden"
              animate="visible"
            >
              {locations.map((location) => (
                <motion.div
                  key={location}
                  variants={sectionLayoutParentAnimation}
                  onClick={() => setOfficeLocation(location)}
                  className={`text-center text-sm uppercase px-6 py-1 font-bold cursor-pointer no--select 
                  ${
                    officeLocation === location
                      ? 'text-accuterraBlue-500 border-b-2 border-accuterraBlue-500 '
                      : 'text-gray-600 '
                  }
                  `}
                >
                  {location}
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mt-0 gap-4 pt-4  "
              variants={frameVariants}
              initial="hidden"
              animate="visible"
            >
              {careers
                .filter((job) => job.country.includes(officeLocation))
                .map((jobCard) => (
                  <JobCard
                    key={jobCard.title}
                    title={jobCard.title}
                    location={jobCard.location}
                    link={jobCard.link}
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
