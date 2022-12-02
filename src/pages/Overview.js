import React, { useState, useEffect } from "react";
import BeerItems from "../components/BeerItems";
import "./Overview.css";
import FooterBtn from "../components/FooterBtn";
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
        <div>
            <section className="grid">
                {beers.map((beer) => (
                    <BeerItems
                        id={beer.id}
                        image_url={beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                    />
                ))}
            </section>
            <FooterBtn />
        </div>
    );
};

export default Overview;
