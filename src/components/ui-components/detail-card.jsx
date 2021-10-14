import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  sectionLayoutParentAnimation,
  sectionLayoutChildAnimation,
} from '../../utils/animations';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'gatsby';
import HollowButtonDarkSmall from './HollowButtonDarkSmall';
import SectionLayout from '../../layouts/section-layout';

export default function DetailCard({
  idx,
  title,
  image,
  body1,
  body2,
  cardBackground,
}) {
  return (
    <SectionLayout>
      <motion.div
        variants={sectionLayoutChildAnimation}
        className={`flex justify-between flex-col-reverse  mb-4  w-full p-4 rounded-lg  mx-auto
               ${idx ? ' md:flex-row-reverse ' : 'md:flex-row '}
               ${cardBackground ? 'bg-white  shadow-lg' : ''}
               `}
      >
        <div className="p-3 lg:p-6  flex-1 order-1">
          <h5 className="mb-3 trext-center md:text-left text-2xl font-semibold leading-none tracking-tighter text-gray-700">
            {title}
          </h5>

          <p className="mx-auto text-left text-sm  font-medium  leading-normal  text-gray-700 ">
            {body1}
          </p>
          <p className="mx-auto  text-left text-sm  font-medium mt-4 leading-normal  text-gray-700 ">
            {body2}
          </p>
        </div>

        <div className={`flex-1 order-0`}>
          {image === 'map-examples-roads' && (
            <StaticImage
              className={`rounded shadow-lg min-h-16 h-60 m-3 `}
              src={`../../assets/images/map-example-roads.jpg`}
              alt="a map photo"
            />
          )}
          {image === 'map-examples-surface' && (
            <StaticImage
              className={`rounded shadow-lg min-h-16 h-60 m-3 `}
              src={`../../assets/images/map-example-surface.jpg`}
              alt="a map photo"
            />
          )}
          {image === 'map-examples-terrain' && (
            <StaticImage
              className={`rounded shadow-lg min-h-16 h-60 m-3 `}
              src={`../../assets/images/map-examples-terrain.jpg`}
              alt="a map photo"
            />
          )}
        </div>
      </motion.div>
    </SectionLayout>
  );
}

// import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
// import { sectionLayoutParentAnimation } from '../../utils/animations';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion, useAnimation } from 'framer-motion';

// export default function DetailCard({
//   idx,
//   title,
//   image,
//   body1,
//   body2,
//   cardBackground,
// }) {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//     if (!inView) {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={sectionLayoutParentAnimation}
//       className={`flex justify-between flex-col-reverse  mb-4  w-full p-4 rounded-lg  mx-auto
//       ${idx ? ' md:flex-row-reverse ' : 'md:flex-row '}
//       ${cardBackground ? 'bg-white  shadow-lg' : ''}
//       `}
//     >
//   <div className="p-3 lg:p-6  flex-1 order-1">
//     <div className="h-12 ">
//       <h5 className="mb-3 trext-center md:text-left text-2xl font-semibold leading-none tracking-tighter text-gray-700">
//         {title}
//       </h5>
//     </div>
//     <p className="mx-auto text-left text-normal font-medium  leading-normal  text-gray-700 ">
//       {body1}
//     </p>
//     <p className="mx-auto  text-left text-normal font-medium mt-4 leading-normal  text-gray-700 ">
//       {body2}
//     </p>
//   </div>

//   <div className={`flex-1 order-0`}>
//     {image === 'map-examples-roads' && (
//       <StaticImage
//         className={`rounded shadow-lg min-h-16 h-60 m-3 `}
//         src={`../../assets/images/map-example-roads.jpg`}
//         alt="a map photo"
//       />
//     )}
//     {image === 'map-examples-surface' && (
//       <StaticImage
//         className={`rounded shadow-lg min-h-16 h-60 m-3 `}
//         src={`../../assets/images/map-example-surface.jpg`}
//         alt="a map photo"
//       />
//     )}
//     {image === 'map-examples-terrain' && (
//       <StaticImage
//         className={`rounded shadow-lg min-h-16 h-60 m-3 `}
//         src={`../../assets/images/map-examples-terrain.jpg`}
//         alt="a map photo"
//       />
//     )}
//   </div>
// </motion.div>
//   );
// }
