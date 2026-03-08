import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../features/pokemonDetail/pokemonDetailThunks";
import { clearDetail } from "../features/pokemonDetail/pokemonDetailSlice";
import type { RootState, AppDispatch } from "../stores/store";
import enums from "../enums/enums";
import PokemonDetailCard from "../layouts/PokemonDetailCard";

const PokemonDetail = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const arrow = "\u2190";
    const { data, loading, error } = useSelector(
        (state: RootState) => state.pokemonDetail
    );

    useEffect(() => {
        if (id) {
            dispatch(fetchPokemonDetail(id));
        }
        return () => {
            dispatch(clearDetail());
        };
    }, [id, dispatch]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#fdf5fa] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-[#fdf5fa] flex flex-col items-center justify-center p-4">
                <Link to="/" className="mb-4 text-sm font-medium bg-white px-4 py-2 rounded-md shadow-sm text-gray-700">← {enums.buttons.BACK_TO_LIST}</Link>
                <p className="text-red-500">{error || enums.error.POKEMON_NOT_FOUND}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fdf5fa] py-8 px-4 font-sans">
            <div className="max-w-4xl mx-auto flex flex-col items-start">
                <Link to="/" className="mb-6 inline-flex items-center text-sm font-semibold bg-white px-4 py-2 rounded-md shadow-sm text-gray-700 hover:shadow-md transition">
                    <span className="mr-2">{arrow}</span> {enums.buttons.BACK_TO_LIST}
                </Link>

                <PokemonDetailCard data={data} />
            </div>
        </div>
    );
};

export default PokemonDetail;
