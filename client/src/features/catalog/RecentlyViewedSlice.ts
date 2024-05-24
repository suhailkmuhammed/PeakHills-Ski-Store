import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../app/models/product';
import { RootState } from '../../app/store/configureStore';

interface RecentlyViewed {
    products: Product[]
}

const productsAdapter = createEntityAdapter<Product>();

export const recentlyViewedSlice = createSlice({
  name: 'recentlyViewed',
  initialState: productsAdapter.getInitialState<RecentlyViewed>({
    products: []
  }),
  reducers: {
    addRecentlyViewedProduct(state, action) {
        productsAdapter.addOne(state, action.payload);
    },
    clearRecentlyViewedProducts(state) {
        productsAdapter.removeAll(state);
    }
  }
});

export const recentProductSelectors = productsAdapter.getSelectors((state: RootState) => state.recentlyviewed);
export const { addRecentlyViewedProduct, clearRecentlyViewedProducts } = recentlyViewedSlice.actions;
