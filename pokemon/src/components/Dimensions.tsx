import enums from "../enums/enums";

import type { DimensionsProps } from "../types/PokemonDetailTypes";

const Dimensions = ({ height, weight }: DimensionsProps) => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#f9fafb] p-4 flex flex-col items-center rounded-xl shadow-sm border border-gray-100">
                <span className="text-gray-400 text-xs font-medium flex items-center gap-1 mb-1">{enums.pageText.HEIGHT}</span>
                <span className="text-gray-900 font-bold text-lg">{height / 10} m</span>
            </div>
            <div className="bg-[#f9fafb] p-4 flex flex-col items-center rounded-xl shadow-sm border border-gray-100">
                <span className="text-gray-400 text-xs font-medium flex items-center gap-1 mb-1">{enums.pageText.WEIGHT}</span>
                <span className="text-gray-900 font-bold text-lg">{weight / 10} kg</span>
            </div>
        </div>
    );
};

export default Dimensions;
