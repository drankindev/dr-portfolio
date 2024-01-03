import { configureStore, combineReducers } from '@reduxjs/toolkit'
import pageReducer from '../features/pageSlice'
import portfolioReducer from '../features/portfolioSlice'

const rootReducer = combineReducers({
    page: pageReducer,
    portfolio: portfolioReducer,
  })

export const store = configureStore({
  reducer: rootReducer
})