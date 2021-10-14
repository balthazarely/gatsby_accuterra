import React from 'react';
import SectionLayout from '../layouts/section-layout';
import DetailCard from './ui-components/detail-card';
import {
  sectionLayoutChildAnimation,
  sectionLayoutParentAnimation,
} from '../utils/animations';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function SectionThree() {
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

  const cards = [
    {
      title: 'Roads and Trails',
      image: 'map-examples-roads',
      body1:
        'We built our USA maps with combination of data from the nation’s national parks, national forests, and BLM lands, state parks, local parks, and high-use recreation areas, alongside data from the OpenStreetMap community. ',
      body2:
        'The result is an unparalleled mapping product for outdoor recreation and rural use. ',
    },
    {
      title: 'Surface Management',
      image: 'map-examples-surface',
      body1:
        'Knowing when you are on private or public land is of critical importance.  We have added federal Surface Managemnt Areas along with state land ownership data to to form the most complete nation-wide recreation areas map. ',
      body2:
        'While certainly colorful, it also guarantees that when using our maps you know exactly what type of public lands you’re on.',
    },
    {
      title: 'Detailed Terrain',
      image: 'map-examples-terrain',
      body1:
        'AccuTerra’s unique terrain map and contours make it easy to guage even subtle differences in the earth’s, understand elevation changes, and plot your best route forward. ',
      body2: 'Always know what’s just over the next hill.',
    },
  ];

  return (
    <div className="pb-16 mb-16  border-b-2 border-gray-300">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionLayoutParentAnimation}
        className={`text-center   border-gray-200  `}
      >
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="my-1 text-3xl  text-gray-600 font-bold">
            Give your users the confidence to roam
          </p>
          <p className="my-1  text-lg  font-normal text-gray-700 ">
            Your users expect the best from your application. Rest easy knowing
            you are providing the most reliable maps available.
          </p>
        </motion.div>

        <motion.div variants={sectionLayoutParentAnimation} className="mt-5">
          {cards.map((card, idx) => (
            <DetailCard
              cardBackground={true}
              key={idx}
              title={card.title}
              image={card.image}
              body1={card.body1}
              body2={card.body2}
              idx={idx % 2 !== 0 ? idx : ''}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
