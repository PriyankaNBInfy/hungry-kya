import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");

  const toggleBtn = () => {
    setBtnValue(btnValue === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header-container">
      <div>
        <img className="header-image" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul className="list">
          <li>Offers</li>
          <li>Help</li>
          <li>Contact Us</li>
          <li>Sign In</li>
          <button onClick={toggleBtn}>{btnValue}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
