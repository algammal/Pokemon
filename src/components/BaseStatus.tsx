import enums from "../enums/enums";

import type { BaseStatusProps ,Stat} from "../types/PokemonDetailTypes";

const BaseStatus = ({ stats }: BaseStatusProps) => {
    return (
        <>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{enums.pageText.BASE_STATS}</h2>
            <div className="space-y-3 mb-8">
                {stats.map((s: Stat) => {
                    const statName = s.stat.name.replace('special-attack', 'Sp. Attack').replace('special-defense', 'Sp. Defense');
                    return (
                        <div key={s.stat.name} className="w-full">
                            <div className="flex justify-between items-center text-sm font-semibold mb-1">
                                <span className="text-gray-700 capitalize">{statName}</span>
                                <span className="text-gray-500 text-xs">{s.base_stat}</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div
                                    className="bg-gray-800 h-2 rounded-full"
                                    style={{ width: `${Math.min((s.base_stat / 255) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BaseStatus;
