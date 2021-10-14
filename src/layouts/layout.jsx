import * as React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/animations';
import { Helmet } from 'react-helmet';
import { favicon } from '../../static/favicon.ico';

export default function Layout({ children, location, transition = true }) {
  return (
    <div className="flex flex-col  min-h-screen  ">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <motion.main
        className="flex flex-col flex-grow bg-accuterraLightGrey "
        variants={transition ? pageAnimation : null}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
    </div>
  );
}
