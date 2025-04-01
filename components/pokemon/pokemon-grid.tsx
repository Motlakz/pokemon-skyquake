"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface Pokemon {
  id: number
  name: string
  types: string[]
  image: string
}

export interface PokemonFilters {
  search: string
  type: string
  generation: string
  sortBy: string
}

export function PokemonGrid() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Function to get generation based on Pokemon ID
  const getGeneration = (id: number): string => {
    if (id <= 151) return "Generation I"
    if (id <= 251) return "Generation II"
    if (id <= 386) return "Generation III"
    if (id <= 493) return "Generation IV"
    if (id <= 649) return "Generation V"
    if (id <= 721) return "Generation VI"
    if (id <= 809) return "Generation VII"
    return "Generation VIII"
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetch first 151 Pokemon (Gen 1)
        const responses = await Promise.all(
          Array.from({ length: 151 }, (_, i) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
          )
        )

        const pokemonData = await Promise.all(
          responses.map(async (response) => {
            const data = await response.json()
            return {
              id: data.id,
              name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
              types: data.types.map((type: any) => 
                type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
              ),
              image: data.sprites.other['official-artwork'].front_default
            }
          })
        )

        setPokemon(pokemonData)
        setFilteredPokemon(pokemonData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching Pokemon:", error)
        setIsLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  // Add filter handling
  const handleFiltersChange = (filters: PokemonFilters) => {
    let filtered = [...pokemon]

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.id.toString().includes(searchLower)
      )
    }

    // Apply type filter
    if (filters.type !== "All Types") {
      filtered = filtered.filter((p) =>
        p.types.map((t) => t).includes(filters.type)
      )
    }

    // Apply generation filter
    if (filters.generation !== "All Generations") {
      filtered = filtered.filter((p) => getGeneration(p.id) === filters.generation)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "id_asc":
          return a.id - b.id
        case "id_desc":
          return b.id - a.id
        case "name_asc":
          return a.name.localeCompare(b.name)
        case "name_desc":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

    setFilteredPokemon(filtered)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  const typeColors: Record<string, string> = {
    Normal: "bg-gray-400",
    Fire: "bg-orange-500",
    Water: "bg-blue-500",
    Electric: "bg-yellow-400",
    Grass: "bg-green-500",
    Ice: "bg-cyan-300",
    Fighting: "bg-red-700",
    Poison: "bg-purple-600",
    Ground: "bg-amber-700",
    Flying: "bg-indigo-300",
    Psychic: "bg-pink-500",
    Bug: "bg-lime-500",
    Rock: "bg-stone-600",
    Ghost: "bg-violet-700",
    Dragon: "bg-indigo-700",
    Dark: "bg-slate-800",
    Steel: "bg-slate-400",
    Fairy: "bg-pink-300",
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...Array(20)].map((_, i) => (
          <Card key={i} className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <Skeleton className="h-40 w-full bg-slate-100 dark:bg-slate-700/50" />
              <div className="p-4">
                <Skeleton className="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 mb-2" />
                <Skeleton className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (filteredPokemon.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 dark:text-gray-400">
          No Pokémon found matching your filters.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {filteredPokemon.map((poke) => (
        <motion.div key={poke.id} variants={item}>
          <Link href={`/pokemon/${poke.id}`}>
            <Card className="bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 p-4 flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src={poke.image || "/placeholder.svg"}
                      alt={poke.name}
                      width={100}
                      height={100}
                      className="drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                    />
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    #{poke.id.toString().padStart(3, "0")} {poke.name}
                  </h3>
                  <div className="flex gap-2">
                    {poke.types.map((type) => (
                      <span
                        key={type}
                        className={`${typeColors[type] || "bg-gray-500"} text-white text-xs px-2 py-1 rounded-full`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
