export interface PokemonType {
    type: {
        name: string;
        url?: string;
    };
}

export interface PokemonSprites {
    front_default: string;
    other?: {
        "official-artwork"?: {
            front_default: string;
        };
    };
}

export interface PokemonDetailData {
    id: number;
    name: string;
    sprites: PokemonSprites;
    types: PokemonType[];
    height: number;
    weight: number;
    stats: Stat[];
    abilities: Ability[];
    base_experience: number;
}

export interface PokemonDetailState {
    data: PokemonDetailData | null;
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
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
    slot: number
}

export interface AbilitiesProps {
    abilities: Ability[];
}

export interface BaseExperienceProps {
    baseExperience: number;
}

export interface PokemonDetailCardProps {
    data: PokemonDetailData;
}
