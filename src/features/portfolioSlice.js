import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listProjects } from '../graphql/queries';
import { generateClient } from "aws-amplify/api";
import { Cache } from 'aws-amplify/utils';
import dayjs from 'dayjs';

const client = generateClient();

export const fetchPortfolio = createAsyncThunk('portfolio/fetchPortfolio', async () => {

  let ProjectsFromCache = await Cache.getItem('Projects');
  if (ProjectsFromCache !== null && ProjectsFromCache.length > 1000) {
    // return cached Pages
    return ProjectsFromCache;
  } else {
    try {
      // get Pages from api if not cached
      const apiData = await client.graphql({ query: listProjects });
      const ProjectsFromAPI = apiData.data.listProjects.items ?? [];

      // cache Pages for 1 day
      const expiration = dayjs(new Date()).add(1, 'd');
      Cache.setItem('Projects', ProjectsFromAPI, { expires: expiration.valueOf() });

      // return api Pages
      return ProjectsFromAPI;

    } catch (err) {
        console.log(err);
    }
  }
})

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    filteredProjects: [],
    data: [],
    status: 'idle',
    categories: [
      {
          name: 'websites',
          title: 'Websites'
      },
      {
          name: 'applications',
          title: 'Applications'
      },
      {
          name: 'features',
          title: 'Special Features'
      }
    ]
  },
  reducers: {
    getProjectsByCategory: (state, action) => {
      const projects = state.data.find(proj => proj.category === action.payload);
      state.filteredProjects = (projects) ? projects : [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPortfolio.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { getProjectsByCategory } = portfolioSlice.actions
export default portfolioSlice.reducer;