import { createStore } from "redux";
import cartReducer from "../Reducer/cartReducer";

const store = createStore(cartReducer);
export default store;
