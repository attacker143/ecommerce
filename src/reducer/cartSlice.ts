import { createSlice } from "@reduxjs/toolkit";
import { products } from "../type/types";

// type cardItems = products[];
// type orderPlaced = string[];
type cardItem = { data: products[]; totalPrice: number; count: number ,quantity:number };

let initialState: cardItem = { data: [], totalPrice: 0, count: 0,quantity:1 };
export const cartSlice = createSlice({
  name: "addcart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.data.push(action.payload.data);
      state.totalPrice = state.totalPrice + action.payload.data.price;
      state.count = state.count + 1;
      console.log("state", state.totalPrice);
      console.log(state.count);
    },
    removeItems: (state, action) => {
      const itemid: number = action.payload.id;
      const price: any = state.data.find((item) => item.id === itemid);
      state.data = state.data.filter((item) => item.id !== itemid);
      state.count = state.count - 1;
      console.log(price.price);
      state.totalPrice = state.totalPrice - price.price;
      console.log(state.count);
      // console.log(totalPrice)

      // totalPrice=totalPrice-parseInt(price.price)
    },
    add:(state) => {
        state.quantity=state.quantity+1
        
    },
    rem:(state) => {
        state.quantity=state.quantity-1
       
    },
  },
});

export const { addItems, removeItems ,add ,rem } = cartSlice.actions;
export default cartSlice.reducer;
