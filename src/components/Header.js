import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
          <li>Online Status: {onlineStatus ? "✅" : "🟥"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Groceries</Link>
          </li>
          <li>Cart</li>
          <button onClick={toggleBtn}>{btnValue}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
