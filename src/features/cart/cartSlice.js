import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalCount: 0, totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.totalCount++;
        state.totalPrice += itemInCart.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalCount++;
        state.totalPrice += action.payload.price;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
      state.totalCount++;
      state.totalPrice += item.price;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const filteredItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        state.items = filteredItems;
        state.totalCount--;
        state.totalPrice -= item.price;
      } else {
        item.quantity--;
        state.totalCount--;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = filteredItems;
      state.totalCount -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
