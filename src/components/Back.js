import React from "react";
import { Link } from "react-router-dom"; // Ensure you have this import for Link component

const Back = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"
          alt="Pandago Logo"
        />
        <h1 className="res-name">Pandago</h1>
      </div>
      <div className="info-section">
        <h3 className="about-card">
          Welcome to Pandago Application, here you can find the correct
          restaurant for your meal!
        </h3>
        <h1 className="search-heading">
          Search for the Food and order:
          <Link to="/home" className="search-link">
            {" "}
            <button class="here">Click Here</button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Back;
