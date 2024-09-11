import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams, useNavigate } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("http://10.0.0.105:8087/api/restaurant/" + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <button
        className="back"
        onClick={() => navigate(-1)} // Navigate back
      >
        Back
      </button>

      <h1>{resInfo.name} </h1>
      <img className="res-logo2" alt="pic" src={"https:" + resInfo.imgId} />
      <h3>{resInfo.cuisines} </h3>
      <h2> Menu</h2>
      <ul>
        {resInfo.menuItems.map((item, index) => (
          <li key={index}>
            <strong>{item.category}</strong>: {item.itemName} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log(RestaurantMenu);

export default RestaurantMenu;
