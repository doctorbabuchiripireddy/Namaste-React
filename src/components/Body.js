import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://10.0.0.105:8087/api/restaurant",
        {
          method: "GET",
          credentials: true,
        }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      const json = await response.data;
      console.log("Fetched data:", json); // Log the response to check its structure

      // Adjust based on actual response structure
      // data = json.data || [];
      setListOfRestaurant(json);
      setFilteredRestaurant(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurantList = listOfRestaurant.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurantList);
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurant.filter((res) => res.avgRating > 4.5);
    setFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus(); // Use online status hook

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  /*return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="modifiers">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="back-btn">
          <button onClick={handleSearch}> Back</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
            {restaurant.data.promoted ? (
              <RestaurantPromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );*/
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="modifiers">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="back-btn">
          <button onClick={handleSearch}> Back</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
