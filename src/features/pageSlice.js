import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listPages } from '../graphql/queries';
import { generateClient } from "aws-amplify/api";
import { Cache } from 'aws-amplify/utils';
import dayjs from 'dayjs';
const client = generateClient();

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {

  let PagesFromCache = await Cache.getItem('Pages');
  if (PagesFromCache !== null && PagesFromCache.length > 1000) {
    // return cached Pages
    return PagesFromCache;
  } else {
    try {
      // get Pages from api if not cached
      const apiData = await client.graphql({ query: listPages });
      const PagesFromAPI = apiData.data.listPages.items ?? [];

      // cache Pages for 1 week
      const expiration = dayjs(new Date()).add(1, 'd');
      Cache.setItem('Pages', PagesFromAPI, { expires: expiration.valueOf() });

      // return api Pages
      return PagesFromAPI;

    } catch (err) {
        console.log(err);
    }
  }
})

const defaultPage = {
    name: '',
    color: 'bg-mid-gray',
    body: '',
    media: [],
    path: ''
}
const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: defaultPage,
    allPages: [],
    status: 'idle'
  },
  reducers: {
    setCurrentPage: (state, action) => {
      const page = state.allPages.find(page => page.name === action.payload);
      state.currentPage = (page) ? page : defaultPage;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPages.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.allPages = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setPages, setCurrentPage } = pageSlice.actions
// export const getCurrentPage = (state) => state.currentPage;
// export const AllPageData = (state) => state.allPages;
export default pageSlice.reducer