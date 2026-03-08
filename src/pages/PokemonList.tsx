import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../features/pokemon/pokemonThunks";
import type { RootState, AppDispatch } from "../stores/store";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import { setTab } from "../features/tabs/tabs";
import enums from "../enums/enums";

const PokemonList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { pokemon, page, count, loading, error } = useSelector(
    (state: RootState) => state.pokemon,
  );
  const tab = useSelector((state: RootState) => state.tabs.tab);
  useEffect(() => {
    dispatch(fetchPokemon(page));
  }, [dispatch, page, tab]);

  const totalPages = Math.ceil(count / 20) || 1;
  const handleTabChange = (
    tabName: (typeof enums.tabs)[keyof typeof enums.tabs],
  ) => {
    dispatch(setTab(tabName));
  };
  return (
    <div className="min-h-screen bg-[#f3f7fb] py-12 px-4 sm:px-6 lg:px-8 font-sans">
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
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                tab === enums.tabs.PAGE_CONTROL
                  ? "bg-[#111827] text-white"
                  : "bg-transparent text-gray-500 hover:bg-gray-100"
              }`}
            >
              {enums.tabs.PAGE_CONTROL}
            </button>
            <button
              onClick={() => handleTabChange(enums.tabs.INFINITE_SCROLL)}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                tab === enums.tabs.INFINITE_SCROLL
                  ? "bg-[#111827] text-white"
                  : "bg-transparent text-gray-500 hover:bg-gray-100"
              }`}
            >
              {enums.tabs.INFINITE_SCROLL}
            </button>
          </div>
        </div>

        {error && <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">{error}</p>}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {pokemon.map((p) => (
                <PokemonCard key={p.name} name={p.name} url={p.url}/>
              ))}
            </div>
            <Pagination
              page={page}
              totalPages={totalPages}
              pokemonCount={pokemon.length}
              error={error}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
