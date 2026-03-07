import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (page: number) => {
    const limit = 10;
    const offset = (page - 1) * limit;

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const data = await res.json();
    return { results: data.results, count: data.count };
  }
);