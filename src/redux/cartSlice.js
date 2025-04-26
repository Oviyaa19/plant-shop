import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.id === item.id);

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(x => x.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(x => x.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(x => x.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
