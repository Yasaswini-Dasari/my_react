import { LOGO_URL } from "../Utils/constants";
import { useState,useEffect } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <img className="logo" alt="LOGO - Not rendered" src={LOGO_URL} /> 
            {/* <div className="nav-items"> */}
                <ul> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
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