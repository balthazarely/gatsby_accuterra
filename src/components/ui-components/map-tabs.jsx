import React from 'react';

export default function MapTabs({ activeMap, setMap, mapStyles }) {
  return (
    <div className="flex flex-row mt-4 mb-5 flex-wrap sm:justify-start justify-center ">
      {mapStyles.map((style, i) => {
        let active = activeMap.name === style.name ? true : false;
        return (
          <div
            className={` w-30 flex justify-center  pb-2 mx-3 my-1 focus:shadow-outline  ${
              active ? ' border-b-2 border-accuterraBlue-500  ' : ''
            }`}
            key={i}
          >
            <button
              onClick={() => setMap(style)}
              className={` whitespace-nowrap font-semibold text-gray-400   text-xs lg:text-sm  ${
                active ? ' text-accuterraBlue-500 ' : ''
              }`}
            >
              {style.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
