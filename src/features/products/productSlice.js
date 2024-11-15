// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productService from "./productService";

// export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
//   const response = await productService.getProducts();
//   return response;
// });

// const productSlice = createSlice({
//   name: "products",
//   initialState: { items: [], loading: false },
//   reducers: {
//     addProduct: (state, action) => {
//       state.items.unshift(action.payload);
//     },
//     updateProduct: (state, action) => {
//       const index = state.items.findIndex(
//         (product) => product.id === action.payload.id
//       );
//       if (index !== -1) state.items[index] = action.payload;
//     },
//     removeProduct: (state, action) => {
//       state.items = state.items.filter(
//         (product) => product.id !== action.payload
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       });
//   },
// });

// export const { addProduct, updateProduct, removeProduct } =
//   productSlice.actions;
// export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

// Thunk to fetch products from API
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await productService.getProducts();
  return response;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false },
  reducers: {
    addProduct: (state, action) => {
      state.items.unshift(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) state.items[index] = action.payload;
    },
    removeProduct: (state, action) => {
      // Only remove the product with matching id
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export const { addProduct, updateProduct, removeProduct } =
  productSlice.actions;
export default productSlice.reducer;
