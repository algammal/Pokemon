import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemon } from "./pokemonThunks";
import enums from "../../enums/enums";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemon: Pokemon[];
  page: number;
  count: number;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemon: [],
  page: 1,
  count: 0,
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
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
        state.pokemon = action.payload.results;
        state.count = action.payload.count;
        state.error = null
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.loading = false;
        state.error = enums.error.FETCH_POKEMONAPI_ERROR;
        state.pokemon = []
      });
  },
});

export const { nextPage, prevPage, setPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;