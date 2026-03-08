import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../features/pokemon/pokemonThunks";
import type { RootState, AppDispatch } from "../stores/store";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import { setTab } from "../features/tabs/tabs";
import PokemonCardSkeleton from "../components/PokemonCardSkeleton";
import type {Pokemon} from '../types/pokemon'
import enums from "../enums/enums";

const PokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { pokemon, page, count, loading, error } = useSelector(
    (state: RootState) => state.pokemon,
  );
  const tab = useSelector((state: RootState) => state.tabs.tab);
  useEffect(() => {
    dispatch(
      fetchPokemon({
        page,
        isAppend: tab === enums.tabs.INFINITE_SCROLL && page > 1,
      })
    );
  }, [dispatch, page, tab]);

  const totalPages = Math.ceil(count / 20) || 1;
  const handleTabChange = (
    tabName: (typeof enums.tabs)[keyof typeof enums.tabs],
  ) => {
    dispatch(setTab(tabName));
  };
  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300 ${tab === enums.tabs.INFINITE_SCROLL ? 'bg-[#f0fdf4]' : 'bg-[#f3f7fb]'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-3">
            {enums.pageText.TITlE}
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            {enums.pageText.SUB_TITLE}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-md p-1 inline-flex shadow-sm gap-1">
            <button
              onClick={() => handleTabChange(enums.tabs.PAGE_CONTROL)}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${tab === enums.tabs.PAGE_CONTROL
                ? "bg-[#111827] text-white"
                : "bg-transparent text-gray-500 hover:bg-gray-100"
                }`}
            >
              {enums.tabs.PAGE_CONTROL}
            </button>
            <button
              onClick={() => handleTabChange(enums.tabs.INFINITE_SCROLL)}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${tab === enums.tabs.INFINITE_SCROLL
                ? "bg-[#111827] text-white"
                : "bg-transparent text-gray-500 hover:bg-gray-100"
                }`}
            >
              {enums.tabs.INFINITE_SCROLL}
            </button>
          </div>
        </div>

        {error && <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">{error}</p>}

        {loading && (tab === enums.tabs.PAGE_CONTROL || page === 1) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {Array.from({ length: 20 }).map((_, index:number) => (
              <PokemonCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {pokemon.map((pokemon:Pokemon,key:number) => (
                <PokemonCard key={key} name={pokemon.name} url={pokemon.url} />
              ))}
            </div>
            <Pagination
              page={page}
              totalPages={totalPages}
              pokemonCount={pokemon.length}
              error={error}
              loading={loading}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
