export interface PokemonDetailState {
    data: any | null;
    loading: boolean;
    error: string | null;
}

export interface Stat {
    base_stat: number;
    stat: { name: string };
}

export interface BaseStatusProps {
    stats: Stat[];
}

export interface DimensionsProps {
    height: number;
    weight: number;
}

export interface Ability {
    ability: { name: string };
    is_hidden: boolean;
}

export interface AbilitiesProps {
    abilities: Ability[];
}

export interface BaseExperienceProps {
    baseExperience: number;
}

export interface PokemonDetailCardProps {
    data: any;
}
