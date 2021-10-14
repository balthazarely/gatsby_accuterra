import * as React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import { favicon } from '../../static/favicon.ico';

export default function LayoutNoFoot({ children }) {
  return (
    <div className="flex flex-col h-screen  justify-between bg-accuterraLightGrey ">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="bg-accuterraLightGrey overflow-y-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
