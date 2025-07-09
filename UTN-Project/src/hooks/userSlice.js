import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  isRegistered: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
      state.isRegistered = true;
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isRegistered = false;
    }
  },
});

export const { register, logout } = userSlice.actions;

export default userSlice.reducer;
