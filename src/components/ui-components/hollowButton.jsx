import React from 'react';

export default function HollowButton({ children, color }) {
  return (
    <button
      style={{ border: '1px solid white' }}
      className=" backdrop-opacity-0  transition duration-200 hover:bg-accuterraBlue-500 hover:backdrop-opacity-1 hover:shadow-lg shadow-none  py-2 px-3 rounded-lg transform hover:-translate-y-0.5   ease-in-out "
    >
      <p className="text-sm text-white  font-light focus:outline-none focus:ring-2 focus:ring-offset-2">
        {children}
      </p>
    </button>
  );
}
