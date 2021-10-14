import React, { useRef, useState, useEffect } from 'react';
import AccuterraVideo from '../assets/video/ATMaps_hero_video_1920x640_hb2.mp4';
import HollowButton from './ui-components/hollowButton';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const mainVideo = AccuterraVideo;

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
};

export default function VideoHero() {
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute('muted', ''); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none';
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  const styleObj = {
    border: '5px solid gold',
    backgroundColor: 'red',
  };

  return (
    <div className="video-player-wrapper overflow-hidden relative w-full mb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="z-10 w-full h-full flex flex-col justify-center items-center text-center">
          <motion.p
            variants={children}
            className="my-1 md:text-7xl tracking-wide text-5xl fon font-black text-white"
          >
            Find Yourself Outdoors
          </motion.p>
          <motion.p
            variants={children}
            className="my-1 md:text-3xl text-2xl  font-extralight text-white"
          >
            maps for recreation apps
          </motion.p>
          <motion.div
            variants={children}
            className="mt-3 mb-1 grid grid-cols-2 gap-2 z-50"
          >
            <Link to={'/documentation'}>
              <HollowButton>Start Developing</HollowButton>
            </Link>
            <Link to={'/explore-map/'}>
              <HollowButton>Explore Maps</HollowButton>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <video
        className="video-player "
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
      >
        <source src={AccuterraVideo} type="video/mp4" />
      </video>
    </div>
  );
}
