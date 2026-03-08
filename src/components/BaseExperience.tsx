import enums from "../enums/enums";

import type { BaseExperienceProps } from "../types/PokemonDetailTypes";

const BaseExperience = ({ baseExperience }: BaseExperienceProps) => {
    return (
        <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{enums.pageText.BASE_EXPERIENCE}</h2>
            <p className="text-2xl font-bold text-purple-600">{baseExperience} {enums.pageText.XP}</p>
        </>
    );
};

export default BaseExperience;
