import { configureStore, combineReducers } from '@reduxjs/toolkit'
import filesReducer from './slices/filesSlice'

const rootReducer = combineReducers({
  files: filesReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}