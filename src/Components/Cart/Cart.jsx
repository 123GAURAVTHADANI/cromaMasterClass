import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Actions/action";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (event, item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <main className="cartMain">
      <div className="cart">
        {cart &&
          cart.map((item) => {
            return (
              <div className="cardItem">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <Rating name="simple-controlled" value={2} />
                  <div className="cardBtnHolder">
                    <button>Move to Whishlist</button>
                    <button onClick={(e) => handleRemove(e, item)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <h1>{item.price}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
export default Cart;
