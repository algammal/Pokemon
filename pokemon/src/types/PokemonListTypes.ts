export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonState {
    pokemon: Pokemon[];
    page: number;
    count: number;
    loading: boolean;
    error: string | null;
}

export interface PokemonCardProps {
    name: string;
    url: string;
}

export interface PaginationProps {
    page: number;
    totalPages: number;
    pokemonCount: number;
    error?: string | null;
}
