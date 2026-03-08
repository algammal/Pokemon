import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (page: number) => {
    const limit = 10;
    const offset = (page - 1) * limit;

    const res = await fetch(
      `${import.meta.env.VITE_POKEMON_API_BASE_URL}?limit=${limit}&offset=${offset}`
    );

    const data = await res.json();
    return { results: data.results, count: data.count };
  }
);