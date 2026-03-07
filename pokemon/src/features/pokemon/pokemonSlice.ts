import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "./pokemonThunks";

interface PokemonState {
  pokemon: any[];
  page: number;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemon: [],
  page: 1,
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      if (state.page > 1) state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch pokemon";
      });
  },
});

export const { nextPage, prevPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;