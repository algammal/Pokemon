import { createAsyncThunk } from "@reduxjs/toolkit";
import enums from "../../enums/enums";

export const fetchPokemonDetail = createAsyncThunk(
  "pokemonDetail/fetch",
  async (id: string | number) => {
    const res = await fetch(`${import.meta.env.VITE_POKEMON_API_BASE_URL}/${id}`);
    if (!res.ok) {
      throw new Error(enums.error.FAILED_TO_FETCH);
    }
    const data = await res.json();
    return data;
  }
);