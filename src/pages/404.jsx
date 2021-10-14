import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';
import Footer from '../components/footer';
import Seo from '../components/seo';

// markup
const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location} transition={false}>
      <Seo title="404" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto">
          <div className="py-24 flex flex-col justify-center items-center ">
            <p className="my-1 text-5xl text-accuterraBlue-500 font-bold uppercase">
              404
            </p>
            <p className="my-1 text-3xl text-gray-600  font-light ">
              Opps... something went wrong.
            </p>
            <Link to={'/'}>
              <button className="py-2 px-4 mt-2 bg-accuterraBlue-500 hover:bg-accuterraBlue-700 focus:ring-accuterraBlue-500 focus:ring-offset-indigo-200 text-white  transition-all ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg flex flex-row ">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default NotFoundPage;
