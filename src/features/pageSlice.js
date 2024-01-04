import { createSlice } from '@reduxjs/toolkit';
import PageData from '../data/PageData';

const defaultPage = {
    name: '',
    color: 'bg-mid-gray',
    body: [],
    media: [],
    path: ''
}
const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: defaultPage,
    allPages: PageData
  },
  reducers: {
    setCurrentPage: (state, action) => {
      const page = PageData.find(page => page.name === action.payload);
      state.currentPage = (page) ? page : defaultPage;
    }
  }
})

export const { setCurrentPage } = pageSlice.actions
export const getCurrentPage = (state) => state.currentPage;
export const AllPageData = PageData;
export default pageSlice.reducer