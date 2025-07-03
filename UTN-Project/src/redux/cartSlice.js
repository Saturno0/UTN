import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  productIds: [], // Lista de IDs de productos agregados
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      state.productIds.push(productId);
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const index = state.productIds.indexOf(productId);
      if (index !== -1) {
        state.productIds.splice(index, 1);
        state.totalItems -= 1;
      }
    },
    clearCart: (state) => {
      state.productIds = [];
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;