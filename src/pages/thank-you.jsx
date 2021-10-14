import * as React from 'react';
import Layout from '../layouts/layout';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import Seo from '../components/seo';
import { Link } from 'gatsby';
import {
  sectionLayoutChildAnimation,
  sectionLayoutParentAnimation,
} from '../utils/animations';

export default function ThankYou({ location }) {
  return (
    <Layout location={location}>
      <Seo title="Thank You!" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionLayoutParentAnimation}
            className="py-24 flex flex-col justify-center items-center "
          >
            <motion.p
              variants={sectionLayoutChildAnimation}
              className="my-1 text-5xl text-accuterraBlue-500 font-bold "
            >
              Thank you for your submission!
            </motion.p>
            <motion.p
              variants={sectionLayoutChildAnimation}
              className="my-1 text-3xl text-gray-600  font-light "
            >
              We will get back to you as soon as possible.
            </motion.p>
            <motion.div variants={sectionLayoutChildAnimation}>
              <Link to={'/'}>
                <button className="py-2 px-4 mt-2 bg-accuterraBlue-500 hover:bg-accuterraBlue-700 focus:ring-accuterraBlue-500 focus:ring-offset-indigo-200 text-white  transition-all ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex flex-row ">
                  Go Home
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
