/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UiState = {
  theme: 'light' | 'dark'
}

const initialState: UiState = {
  theme: 'light',
}
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
  },
})

const { actions, reducer } = uiSlice
export { actions as actionUi, reducer as reducerUi }
