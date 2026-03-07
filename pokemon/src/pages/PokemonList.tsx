import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../features/pokemon/pokemonThunks";
import type { RootState, AppDispatch } from "../stores/store";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { pokemon, page, loading, error } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemon(page));
  }, [dispatch, page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
   <div className="pokemon-ListPage">
    <div className="pokemon-header">
    <h1>Poke`dex</h1>
    <span>Discover and explore Pokemon with infinite scroll</span>
    </div>
    <div className="pokemon-headerButtons">
        <button>Page Controls</button>
        <button>Infinite Scroll</button>
    </div>
    <div className="PokemonList">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {pokemon.map((p) => (
        <PokemonCard key={p.name} name={p.name} url={p.url} />
      ))}
    </div>
    </div>
   </div>
  );
};

export default PokemonList;