import * as React from 'react';
import Layout from '../layouts/layout';
import Footer from '../components/footer';
import Seo from '../components/seo';
import ContactUs from '../components/contact-us';

export default function Contact({ location }) {
  return (
    <Layout location={location}>
      <Seo title="contact" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto text-center mt-12">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
