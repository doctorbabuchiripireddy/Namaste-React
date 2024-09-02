import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div classname="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurauntCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="pic"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrXWTUKQZI_OEBPfN5G-5HHM1U_15k23lyA&s"
      />
      <h3>Biriyani Pot</h3>
      <h5> Briyani,North Indian, Chats</h5>
      <h4>4.5</h4>
      <h4>35min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <RestaurauntCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
