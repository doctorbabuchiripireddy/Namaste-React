import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div className="p-2 m-2 border-black  border-b-2 flex ">
          <div key={index} className="w-9/12 py-2">
            <stong></stong>
            <strong>{item.itemName}</strong> - ${item.price}
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <button classNme="" onClick={() => handleAddItem(item)}>
              {" "}
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
