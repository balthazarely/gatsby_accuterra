import React from 'react';
import SectionLayout from '../layouts/section-layout';
import BasicCard from './ui-components/basic-card';
import { motion } from 'framer-motion';

import { sectionLayoutChildAnimation } from '../utils/animations';

export default function SectionTwo() {
  const cards = [
    {
      title: 'Beautiful Cartography',
      body: 'With the familiarity of modern web maps, while still incorporating the more complex concepts in a topographic trail map, our maps make it easy for users to understand the lay of the land whether novice or expert.',
      cta: 'Explore Styles',
      link: '/explore-map/',
    },
    {
      title: 'Unique content',
      body: 'AccuTerra Maps offers content not found on any other mapping platform.  AccuTerra Maps show more roads, more trails, more accurate land ownership data and highly detailed terrain models, not available from other map providers.',
      cta: 'Learn More',
      link: '/documentation/',
    },
    {
      title: 'Affordable pricing',
      body: 'Sign up for free and start incorporating the worlds best outdoor recreation maps into your apps risk-free.  Paid plans are compeditivly priced and scale with you as your user base grows, ensureing high quality maps are never out of reach.',
      cta: 'See Plans',
      link: '/plans/',
    },
  ];

  return (
    <SectionLayout>
      <div className="pb-16 mb-16  border-b-2 border-gray-300">
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="my-1 text-3xl  text-gray-600 font-bold">
            Set your applications apart from the competetion
          </p>
          <p className="my-1  text-lg  font-normal text-gray-700 ">
            Create a free developer account to add AccuTerra Maps to your
            applications today
          </p>
        </motion.div>

        <motion.div
          variants={sectionLayoutChildAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left  my-10"
        >
          {cards.map((card) => (
            <BasicCard
              title={card.title}
              body={card.body}
              cta={card.cta}
              link={card.link}
              key={card.title}
            />
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
}
