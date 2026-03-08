import enums from "../enums/enums";

import type { AbilitiesProps } from "../types/PokemonDetailTypes";

const Abilities = ({ abilities }: AbilitiesProps) => {
    return (
        <>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{enums.pageText.ABILITIES}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
                {abilities.map((a: any) => (
                    <div key={a.ability.name} className="bg-gray-100 border border-gray-200 text-gray-700 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                        <span className="capitalize">{a.ability.name.replace('-', ' ')}</span>
                        {a.is_hidden && <span className="text-xs text-gray-400 font-normal">({enums.pageText.HIDDEN})</span>}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Abilities;
