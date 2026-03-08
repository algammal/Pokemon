import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FetchPokemonArgs } from "../../types/PokemonListTypes"

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async ({ page, isAppend }: FetchPokemonArgs) => {
    const limit = 20;
    const offset = (page - 1) * limit;

    const res = await fetch(
      `${import.meta.env.VITE_POKEMON_API_BASE_URL}?limit=${limit}&offset=${offset}`
    );

    const data = await res.json();
    return { results: data.results, count: data.count, isAppend };
  }
);