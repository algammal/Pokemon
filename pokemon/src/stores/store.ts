import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import tabsReducer from "../features/tabs/tabs"

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    tabs:tabsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;