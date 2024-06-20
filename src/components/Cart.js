import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    console.log("clear");
    dispatch(clearCart());
  };
  return (
    <>
      <div>Cart Summary</div>
      {items?.map((item) => (
        <ItemList item={item} />
      ))}
      <div onClick={handleClearCart}>Clear cart</div>
    </>
  );
};

export default Cart;
