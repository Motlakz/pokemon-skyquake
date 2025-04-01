"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Award, Scale, Ruler } from "lucide-react"
import { PokemonDetails } from "@/types"

export function PokemonDetail({ id }: { id: string }) {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetch Pokemon data
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonData = await pokemonResponse.json()

        // Fetch species data for description and habitat
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const speciesData = await speciesResponse.json()

        // Get English description
        const englishDescription = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        )?.flavor_text || ""

        const pokemonDetails: PokemonDetails = {
          id: pokemonData.id,
          name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
          types: pokemonData.types.map((type: any) => 
            type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
          ),
          height: pokemonData.height / 10, // Convert to meters
          weight: pokemonData.weight / 10, // Convert to kg
          abilities: pokemonData.abilities.map((ability: any) => 
            ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)
          ),
          description: englishDescription.replace(/\f/g, " "),
          image: pokemonData.sprites.other["official-artwork"].front_default,
          species: speciesData.genera.find((genus: any) => genus.language.name === "en")?.genus || "",
          habitat: speciesData.habitat?.name.charAt(0).toUpperCase() + speciesData.habitat?.name.slice(1) || "Unknown",
        }

        setPokemon(pokemonDetails)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching Pokemon:", error)
        setIsLoading(false)
      }
    }

    fetchPokemon()
  }, [id])

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

  if (isLoading || !pokemon) {
    return (
      <div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg p-6 animate-pulse">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="h-64 w-64 bg-gray-200/50 dark:bg-slate-700/50 rounded-lg"></div>
          <div className="flex-1 space-y-4">
            <div className="h-10 w-1/3 bg-gray-200 dark:bg-slate-700 rounded"></div>
            <div className="h-6 w-1/4 bg-gray-200 dark:bg-slate-700 rounded"></div>
            <div className="h-24 w-full bg-gray-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 p-4 rounded-lg"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={pokemon.image || "/placeholder.svg"}
                      alt={pokemon.name}
                      width={250}
                      height={250}
                      className="drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {pokemon.name}
                  </h1>
                  <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                    #{pokemon.id.toString().padStart(3, "0")}
                  </span>
                </div>

                <div className="flex gap-2 mb-4">
                  {pokemon.types.map((type) => (
                    <span
                      key={type}
                      className={`${typeColors[type] || "bg-gray-500"} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {pokemon.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-gray-100/80 dark:bg-slate-700/50 p-3 rounded-lg flex flex-col items-center">
                    <Badge variant="outline" className="mb-2 border-teal-500 text-teal-600 dark:text-teal-400">
                      <Scale className="h-3.5 w-3.5 mr-1" />
                      Weight
                    </Badge>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {pokemon.weight} kg
                    </span>
                  </div>

                  <div className="bg-gray-100/80 dark:bg-slate-700/50 p-3 rounded-lg flex flex-col items-center">
                    <Badge variant="outline" className="mb-2 border-teal-500 text-teal-600 dark:text-teal-400">
                      <Ruler className="h-3.5 w-3.5 mr-1" />
                      Height
                    </Badge>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {pokemon.height} m
                    </span>
                  </div>

                  <div className="bg-gray-100/80 dark:bg-slate-700/50 p-3 rounded-lg flex flex-col items-center">
                    <Badge variant="outline" className="mb-2 border-teal-500 text-teal-600 dark:text-teal-400">
                      <Award className="h-3.5 w-3.5 mr-1" />
                      Species
                    </Badge>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {pokemon.species}
                    </span>
                  </div>

                  <div className="bg-gray-100/80 dark:bg-slate-700/50 p-3 rounded-lg flex flex-col items-center">
                    <Badge variant="outline" className="mb-2 border-teal-500 text-teal-600 dark:text-teal-400">
                      <Heart className="h-3.5 w-3.5 mr-1" />
                      Habitat
                    </Badge>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {pokemon.habitat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="abilities" className="p-6 pt-0">
            <TabsList className="bg-gray-100/80 dark:bg-slate-700/50">
              <TabsTrigger 
                value="abilities"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white"
              >
                Abilities
              </TabsTrigger>
              <TabsTrigger 
                value="habitat"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white"
              >
                Habitat
              </TabsTrigger>
              <TabsTrigger 
                value="breeding"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-slate-800 dark:data-[state=active]:text-white"
              >
                Breeding
              </TabsTrigger>
            </TabsList>

            <TabsContent value="abilities" className="mt-4">
              <div className="bg-gray-100/70 dark:bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Abilities
                </h3>
                <ul className="space-y-2">
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {ability}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="habitat" className="mt-4">
              <div className="bg-gray-100/30 dark:bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Habitat Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This Pokémon can typically be found in {pokemon.habitat} areas. They prefer to live in groups and are
                  most active during the day.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="breeding" className="mt-4">
              <div className="bg-gray-100/30 dark:bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Breeding Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This Pokémon belongs to the Field egg group. It takes approximately 5,120 steps to hatch an egg of
                  this species. The gender ratio is typically 50% male and 50% female.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}
