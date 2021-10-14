import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export default function PriceCard({ card }) {
  let useList = card.features.length === 2 ? false : true;
  return (
    <motion.div
      variants={itemVariants}
      className="col-span-1 flex flex-col justify-between shadow-lg rounded-2xl   bg-white  p-4"
    >
      <div>
        <p className="text-gray-700  text-xl font-bold mb-4">{card.name}</p>

        <ul className="text-sm text-gray-600  w-full mt-6 mb-6">
          {useList &&
            card.features.map((feature) => {
              return (
                <li className="mb-3 flex items-center " key={feature}>
                  <svg
                    className="h-6 w-6 mr-2 text-accuterraBlue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#01ADF0"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  {feature}
                </li>
              );
            })}
        </ul>
        <p className="text-gray-700 text-md my-2 py-2 border-t-2 border-b-2 border-grey-200 ">
          {card.subheading}
        </p>
        {card.table.length !== 0 && (
          <div className=" ">
            <table className="table-fixed  w-full mt-4 ">
              <thead className=" w-full  h-6">
                <tr className=" ">
                  <th className="pl-2 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Tier
                  </th>
                  <th className="pr-2 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Price per 1,000
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 font-normal w-full ">
                {card.table.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`h-8  ${
                      idx % 2 !== 0 ? ' bg-gray-100 ' : 'bg-white '
                    }`}
                  >
                    <td className="pl-2 text-left  ">{item.teir}</td>
                    <td className="pr-2 text-right ">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>{' '}
          </div>
        )}

        {card.enterpriseText && (
          <div className="mb-4 font-semibold text-center">
            {card.enterpriseText}
          </div>
        )}
      </div>
      <div>
        <Link to={card.link}>
          <button
            type="button"
            className="py-2 px-4 mt-4   bg-accuterraBlue-500 hover:bg-accuterraBlue-700 focus:ring-accuterraBlue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            {card.cta}
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
