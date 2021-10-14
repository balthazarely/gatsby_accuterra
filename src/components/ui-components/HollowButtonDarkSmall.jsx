import React from 'react';

export default function HollowButtonDarkSmall({ children }) {
  return (
    <button
      type="button"
      className="py-2 px-4  bg-accuterraBlue-500 hover:bg-accuterraBlue-700 focus:ring-accuterraBlue-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-xs font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >
      {children}
    </button>
  );
}
