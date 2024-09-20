import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"
        ></img>
        <h1 className="res-name"> Pandago</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
          <li>
            {" "}
            <Link to="/home">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Back </Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart({cartItems.length}items)</Link>
          </li>
          <li>
            {" "}
            <Link to="/orders">Orders</Link>
          </li>
          <button
            className="here"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
