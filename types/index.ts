export interface Pokemon {
    id: number
    name: string
    types: string[]
    generation: string
}
  
export interface PokemonDetails {
    id: number
    name: string
    types: string[]
    height: number
    weight: number
    abilities: string[]
    description: string
    image: string
    species: string
    habitat: string
}

export interface PokemonFiltersType {
    search: string
    type: string
    generation: string
    sortBy: string
}
  
export interface FilterChangeHandler {
    (filters: PokemonFiltersType): void
}