import React from 'react';
import { Link } from 'gatsby';
import { capitalizeString } from '../../utils/capitalizeString';
import { motion } from 'framer-motion';
import { sectionLayoutChildAnimation } from '../../utils/animations';

const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
  },
};

const textHover = {
  rest: {
    color: 'rgb(55, 65, 81)',
  },
  hover: {
    color: 'rgb(1, 173, 240)',
  },
};

export default function BlogCard({
  date,
  title,
  path,
  thumbnail,
  categories,
  excerpt,
}) {
  return (
    <motion.div variants={sectionLayoutChildAnimation}>
      <motion.div
        className=" bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 justify-between flex flex-col  "
        initial="rest"
        // animate="rest"
        whileHover="hover"
      >
        <Link to={path} className="w-full h-64 rounded overflow-hidden ">
          <motion.img
            variants={cardHover}
            transition={{ type: 'easeInOut', duration: 0.35 }}
            className="object-cover w-full h-full rounded"
            src={thumbnail.childImageSharp.resize.src}
            alt="blog post image"
          />
        </Link>
        <div className="p-4">
          <div className=" flex-grow ">
            <p className="mb-2 text-xs text-gray-600 ">{date}</p>
            <Link
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              to={path}
            >
              <motion.p
                className="h-14  text-2xl font-bold text text-gray  leading-none"
                variants={textHover}
                transition={{ type: 'easeInOut', duration: 0.1 }}
              >
                {title}
              </motion.p>
            </Link>
            <p className=" text-gray-700">{excerpt}</p>
          </div>
          <div className="flex flex-wrap flex-row-reverse justify-starts items-center my-3  md:mb-0 ">
            {categories.map((cat) => (
              <Link key={cat} to={`category/${cat}`}>
                <div className="text-xs mr-2 py-1 px-3 text-white bg-accuterraBlue-500 focus:ring-offset-indigo-200 focus:ring-accuterraBlue-500  transition ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-accuterraBlue-700 rounded-2xl">
                  {capitalizeString(cat)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
