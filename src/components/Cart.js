import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handlClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold"> cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handlClearCart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 && <h1> Your Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

console;
console.log(Cart);

export default Cart;
