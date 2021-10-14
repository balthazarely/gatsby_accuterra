import React, { useEffect } from 'react';
import { navigate } from 'gatsby'; //import navigate from gatsby

export default function Maps() {
  useEffect(() => {
    navigate('/explore-map/'); //navigate to edit page
  }, []);

  return <div></div>;
}
