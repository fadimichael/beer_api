import React, { useState, useEffect } from "react";
import BeerItems from "../components/BeerItems";

const Overview = () => {
  const [beers, setBeers] = useState([]);
  const showBeers = () => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((json) => setBeers(json));
  };
  useEffect(showBeers, []);
  console.log(beers);
  return (
    <section className="grid">
      {beers.map((beer) => (
        <BeerItems
          key={beer.id}
          image_url={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      ))}
    </section>
  );
};

export default Overview;
