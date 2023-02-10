import React, { useState, useEffect } from "react";





export const Price = () => {

  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const getData = async () => {
      const url = "https://www.vattenfall.fi/sahkosopimukset/porssisahko/tuntispot-hinnat-sahkoporssissa";

      try {
        const data = await fetch(url);
        const jsondata = data.json();
        console.log(jsondata);
      } catch(e) {
        console.error("Error fetching the url,", e);
      }

      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Price of electricity</h1>

      {data}
    </>
  );
};

