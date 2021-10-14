import * as React from 'react';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SectionFive from '../components/section-five';
import SectionFour from '../components/section-four';
import SectionOne from '../components/section-one';
import SectionThree from '../components/section-three';
import SectionTwo from '../components/section-two';
import Seo from '../components/seo';
import VideoHero from '../components/videoHero';
import Layout from '../layouts/layout';

export default function IndexPage({ location }) {
  console.log(location);
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <VideoHero />
      <div className="container mx-auto  ">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      <SectionFour />
      <div className="container mx-auto">
        <SectionFive />
        <ContactUs />
      </div>
      <Footer />
    </Layout>
  );
}
