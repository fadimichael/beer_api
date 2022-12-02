import "./BeerItems.css";
import { Link } from "react-router-dom";

const BeerItems = (props) => {
    return (
        <article className="flex-item">
            <div className="left">
                <img src={props.image_url} alt="" />
            </div>
            <div className="right">
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p>Created by: {props.name}</p>
                <Link to={`/beer/${props.id}`}>Details</Link>
            </div>
        </article>
    );
};

export default BeerItems;
