import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerDetails = () => {
    const [filterBeer, setFilterBeer] = useState([]);
    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then((res) => res.json())
            .then((json) => setFilterBeer(json));
    }, []);

    // console.log(beerDetails);

    let filterBeerDetails = filterBeer.filter((elt) => {
        return elt._id.toString() === id.toString();
    });
    console.log(filterBeerDetails);
    return (
        <div>
            {filterBeerDetails.map((elt, index) => (
                <div key={index}>
                    <h2>{elt.name}</h2>
                    <img src={elt.image_url} alt={elt.tagline} />
                    <h2>
                        {elt.volume.value} {elt.volume.unit}
                    </h2>
                    <p>{elt.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BeerDetails;
