import * as React from 'react';
import { Link } from 'gatsby';
import HollowButtonDark from './ui-components/hollowButtonDark';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <div className="container mx-auto ">
      <div className="text-center ">
        {previousPagePath && (
          <Link to={previousPagePath}>
            <HollowButtonDark>Previous</HollowButtonDark>
          </Link>
        )}
        {nextPagePath && (
          <Link to={nextPagePath}>
            <HollowButtonDark>Next</HollowButtonDark>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pager;
