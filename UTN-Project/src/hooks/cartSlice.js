import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {name, color, price} = action.payload;
      state.products.push({name, color, precio_actual: price});
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      const {name, color} = action.payload;
      const index = state.products.findIndex(
        (item) => item.name === name && item.color === color
      );
      if (index !== -1) {
        state.products.splice(index, 1);
        state.totalItems -= 1;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;