import React, { useEffect, useState } from "react";



const useDataResourse = (getResourceFunc) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const res = fetch(getResourceFunc());
      const data = await res.json();
      if (data && data.length > 0) {
        setProducts(data);
      } else {
        throw new Error("Problem fetching data");
      }
    })();
  }, [getResourceFunc]);

  return products;
};

export default useDataResourse;
