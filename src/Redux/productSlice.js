import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const generateFakerData = () => {
  const fakerData = [];
  for (let i = 0; i < 20; i++) {
    fakerData.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
      fastDelivery: faker.datatype.boolean(),
      inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
      rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    });
  }
  return fakerData;
};
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: generateFakerData(),
    byStock: false,
    byFastDelivery: false,
    searchQuery: "",
    sort: "",
    byRating: 0,
  },
  reducers: {
    sortByPrice: (state, action) => {
      state.sort = action.payload;
    },
    filterByStock: (state) => {
      state.byStock = !state.byStock;
    },
    filterByDelievery: (state) => {
      state.byFastDelivery = !state.byFastDelivery;
    },
    filterBySearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterByRating: (state, action) => {
      state.byRating = action.payload;
    },
    clearFilters: (state) => {
      state.byStock = false;
      state.byFastDelivery = false;
      state.byRating = 0;
      state.searchQuery = "";
    },
  },
});

export const {
  sortByPrice,
  filterByStock,
  filterByDelievery,
  filterByRating,
  filterBySearch,
  clearFilters,
} = productSlice.actions;
export default productSlice.reducer;
