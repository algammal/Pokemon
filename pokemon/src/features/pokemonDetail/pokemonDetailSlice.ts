import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonDetail } from "./pokemonDetailThunks";
import enums from "../../enums/enums";

import type { PokemonDetailState } from "../../types/PokemonDetailTypes";

const initialState: PokemonDetailState = {
  data: null,
  loading: false,
  error: null,
};

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    clearDetail: (state) => {
      state.data = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || enums.error.FAILED_TO_FETCH;
      });
  },
});

export const { clearDetail } = pokemonDetailSlice.actions;
export default pokemonDetailSlice.reducer;