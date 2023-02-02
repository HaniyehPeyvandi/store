import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  products: [],
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      return { ...state, products: [], loading: true, error: null };
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      return {
        ...state,
        products: [],
        loading: false,
        error: action.error.message,
      };
    });
  },
});

export default productsSlice.reducer;
