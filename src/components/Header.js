import { LOGO_URL } from "../Utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <img className="logo" alt="LOGO - Not rendered" src={LOGO_URL} /> 
            {/* <div className="nav-items"> */}
                <ul> 
                    <li>Online status:{onlineStatus? "🟢" : "🔴"} </li>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={ () => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")  
                    }}>
                        {btnName}</button>
                </ul>
            {/* </div> */}
        </div>
    );
};

export default Header;