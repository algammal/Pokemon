import Dimensions from "../components/Dimensions";
import BaseStatus from "../components/BaseStatus";
import Abilities from "../components/Abilities";
import BaseExperience from "../components/BaseExperience";

const typeColors: Record<string, string> = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-300",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-yellow-700",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    steel: "bg-gray-400",
    fairy: "bg-pink-300",
};

import type { PokemonDetailCardProps, PokemonType } from "../types/PokemonDetailTypes";

const PokemonDetailCard = ({ data }: PokemonDetailCardProps) => {
    const paddedId = String(data.id).padStart(3, "0");
    const defaultImage =
        data.sprites?.other?.["official-artwork"]?.front_default ||
        data.sprites?.front_default;

    return (
        <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 p-6 text-center text-white">
                <h1 className="text-3xl font-bold flex items-center justify-center gap-2 mb-1">
                    <span className="capitalize">{data.name}</span>
                </h1>
                <p className="text-white/80 text-sm font-medium">#{paddedId}</p>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 rounded-full bg-[#f3f4f7] flex items-center justify-center mb-6">
                        <img
                            src={defaultImage}
                            alt={data.name}
                            className="w-56 h-56 object-contain drop-shadow-lg relative z-10"
                        />
                    </div>
                    <div className="flex gap-2 mb-8">
                        {data.types.map((t: PokemonType) => (
                            <span
                                key={t.type.name}
                                className={`${typeColors[t.type.name] || "bg-gray-500"} text-white text-xs font-bold px-4 py-1.5 rounded-full capitalize`}
                            >
                                {t.type.name}
                            </span>
                        ))}
                    </div>

                    <Dimensions height={data.height} weight={data.weight} />
                </div>
                <div className="flex flex-col">
                    <BaseStatus stats={data.stats} />
                    <Abilities abilities={data.abilities} />
                    <BaseExperience baseExperience={data.base_experience} />
                </div>
            </div>
        </div>
    );
};

export default PokemonDetailCard;
