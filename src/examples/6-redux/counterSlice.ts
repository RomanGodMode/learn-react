import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    otherState: 0
  },
  reducers: {
    increment(state) {
      state.value++
    },
    doSome(state) {
      state.otherState++
    }
  }
})

export const {
  reducer: counterReducer,
  actions: {
    increment,
    doSome
  }
} = counterSlice

export const selectCounter = (state: RootState) => {
  console.log('good selector running')
  return state.counter.value
}

