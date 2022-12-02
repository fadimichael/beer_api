import all_beers from "../data/all_beers.png";
import random_beer from "../data/random_beer.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Link to="/beer">
                <img src={all_beers} alt="" />
            </Link>
            <h2>All Beers</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laborum fuga facere non similique tempore?
            </p>
            <img src={random_beer} alt="" />
            <h2>All Beers</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laborum fuga facere non similique tempore?
            </p>
        </div>
    );
};

export default Home;
