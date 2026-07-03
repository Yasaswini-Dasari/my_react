import { LOGO_URL } from "../Utils/constants";

const Header = () => {
    return (
        <div className="header">
            <img className="logo" alt="LOGO - Not rendered" src={LOGO_URL} /> 
            {/* <div className="nav-items"> */}
                <ul> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            {/* </div> */}
        </div>
    );
};

export default Header;