import { useState } from "react";
import useRestaurantmenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(false);

  const { resId } = useParams();

  const handleClick = () => {
    setShowItems(!showItems);
  };

  /*const resInfo = useRestaurantmenu(resId);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <button className="back">
        {" "}
        <Link to="/home">Back</Link>
      </button>

      <h1>{resInfo.name} </h1>
      <img className="res-logo2" alt="pic" src={"https:" + resInfo.imgId} />
      <h3>{resInfo.cuisines} </h3>
      <h2> Menu</h2>
      <ul>
        {resInfo.menuItems.map((item, index) => (
          <li key={index}>
            <strong>{item.category}</strong> {item.itemName} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );*/
  const resInfo = useRestaurantmenu(resId);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="menu">
        <button className="back">
          {" "}
          <Link to="/home">Back</Link>
        </button>

        <h1>{resInfo.name} </h1>
        <img className="res-logo2" alt="pic" src={"https:" + resInfo.imgId} />
        <h3>{resInfo.cuisines} </h3>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {resInfo.name} ({resInfo.menuItems.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={resInfo.menuItems} />}
      </div>
    </div>
  );
};

console.log(RestaurantMenu);

export default RestaurantMenu;
