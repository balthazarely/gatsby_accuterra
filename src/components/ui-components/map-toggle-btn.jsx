import React from 'react';

const LargeToggle = ({
  mapFilterOpen,
  activeMap,
  mapStyles,
  setMapStyles,
  setMapFilterOpen,
}) => {
  return (
    <div className=" flex-col-reverse justify-start items-center absolute top-2 sm:bottom-4 left-4 w-16 z-40 flex">
      {!mapFilterOpen && (
        <div
          onClick={() => setMapFilterOpen(true)}
          className="relative overflow-hidden  m-1   shadow-md hover:shadow-lg rounded-lg border-white border-2 h-16 w-16 text-white cursor-pointer"
        >
          <div className="map__thumb__text absolute top-0 left-0  font-semibold h-full w-full text-white text-center text-xs flex items-center justify-center z-20">
            {activeMap.name}
          </div>
          <img
            src={activeMap.style}
            alt={activeMap.name}
            className=" absolute top-0 left-0 z-10 h-full object-cover"
          />
        </div>
      )}

      {mapFilterOpen &&
        mapStyles.map((style) => (
          <div
            key={style.name}
            className="relative overflow-hidden  m-1  shadow-md hover:shadow-lg rounded-lg border-white border-2 h-16 w-16 cursor-pointer"
            onClick={() => setMapStyles(style)}
          >
            <div className="map__thumb__text no--select absolute top-0 left-0  font-semibold h-full w-full text-white text-center text-xs flex items-center justify-center z-20">
              {style.name}
            </div>
            <img
              src={style.style}
              alt={style.name}
              className=" absolute top-0 left-0 z-10 h-full object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export const MapToggleBtn = ({
  mapFilterOpen,
  activeMap,
  mapStyles,
  setMapStyles,
  setMapFilterOpen,
}) => {
  return (
    <>
      <LargeToggle
        mapFilterOpen={mapFilterOpen}
        activeMap={activeMap}
        mapStyles={mapStyles}
        setMapStyles={setMapStyles}
        setMapFilterOpen={setMapFilterOpen}
      />
    </>
  );
};
