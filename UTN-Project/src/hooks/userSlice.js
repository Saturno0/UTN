import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user'));

const initialState = storedUser
  ? {
      username: storedUser.username,
      password: '',
      isRegistered: true,
    }
  : {
      username: '',
      password: '',
      isRegistered: false,
    };

const updateUserStorage = (state) => {
  localStorage.setItem('user', JSON.stringify({
    username: state.username,
    password: state.password,
    isRegistered: state.isRegistered
  }));
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
      updateUserStorage(state);
    },
    logout: (state) => {
      state.username = '';
      state.password = '';
      state.isRegistered = false;
      localStorage.removeItem('user');
    },
  },
});

export const { register, logout } = userSlice.actions;
export default userSlice.reducer;
