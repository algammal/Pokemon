import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import enums from '../../enums/enums'

interface TabState {
  tab: string;
}

const initialState: TabState = {
  tab: enums.tabs.PAGE_CONTROL,
}

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<string>) => {
      state.tab = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;