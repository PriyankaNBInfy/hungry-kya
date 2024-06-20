import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ThemeContext } from "../utils/ThemeContext";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((store) => store.cart?.items);
  const [btnValue, setBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(items);
  const toggleBtn = () => {
    setBtnValue(btnValue === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="fixed top-0 w-[100%] flex justify-between shadow">
      <div>
        <img className="w-20" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🟥"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({items?.length})</Link>
          </li>
          <button
            className="px-2 ml-4 mr-2 bg-slate-200 rounded font-semibold font-mono"
            onClick={toggleBtn}
          >
            {btnValue}
          </button>
          <button
            className="px-2 ml-4 mr-2 bg-slate-200 rounded font-semibold font-mono"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
