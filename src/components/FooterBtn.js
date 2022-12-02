import logo from "../data/Logo.png";
import { Link } from "react-router-dom";
import "./FooterBtn.css";

const FooterBtn = () => {
    return (
        <footer>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
        </footer>
    );
};

export default FooterBtn;
