import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarsByCategory = createAsyncThunk(
  'cars/fetchCarsByCategory',
  async (categoryName) => {
    const response = await axios.get(`https://evcarbackend.onrender.com/cars/category/${categoryName}`);
    return response.data;
  }
);

const carsByCategorySlice = createSlice({
  name: 'carsByCategory',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCarsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearData } = carsByCategorySlice.actions;
export default carsByCategorySlice.reducer;
