import React from 'react';
import { Link } from 'gatsby';

export const GettingStarted = () => {
  return (
    <div>
      <p className="text-accuterraBlue-500 text-3xl text-md font-bold my-1 cursor-pointer ">
        Getting Started
      </p>
      <div className="relative w-full shadow-lg  bg-white p-4 mb-16 ">
        <p className="text-gray-700  text-2xl font-bold my-4">
          Accessing AccuTerra Maps
        </p>
        <p className="text-gray-700  text-normal font-normal my-4">
          Welcome to AccuTerra Maps. Adding AccuTerra Maps to your mobile or web
          applications is a great way to empower your users with access to the
          most complete outdoor recreation maps avaliable.
        </p>
        <p className="text-gray-700  text-normal font-normal my-4">
          AccuTerra provides multiple map styles for you to choose from, see the
          Map Styles section below for more information on each style. Each map
          style supports both raster and vector tiles.
        </p>
        <p className="text-gray-700  text-normal font-normal my-4">
          Each map service requires a API key to work. You can manage your API
          keys within the API Keys section of your Account page.
        </p>
        <p className="text-gray-700  text-normal font-normal my-4">
          Get started developing with AccuTerra today,{' '}
          <Link
            to={'https://account.accuterra.com/account/#/account/basics/login'}
          >
            <span className="text-accuterraBlue-500 hover:text-accuterraBlue-700">
              create your free account.
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
