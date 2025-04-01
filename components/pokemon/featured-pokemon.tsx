"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Pokemon {
  id: number
  name: string
  types: string[]
  image: string
}

export function FeaturedPokemon() {
  const [featuredPokemon, setFeaturedPokemon] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from the PokeAPI
    // For demo purposes, we'll use hardcoded data
    const demoData: Pokemon[] = [
      {
        id: 25,
        name: "Pikachu",
        types: ["Electric"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        id: 6,
        name: "Charizard",
        types: ["Fire", "Flying"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
      {
        id: 150,
        name: "Mewtwo",
        types: ["Psychic"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      },
      {
        id: 384,
        name: "Rayquaza",
        types: ["Dragon", "Flying"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
      },
      {
        id: 249,
        name: "Lugia",
        types: ["Psychic", "Flying"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
      },
      {
        id: 149,
        name: "Dragonite",
        types: ["Dragon", "Flying"],
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
      },
    ]

    setTimeout(() => {
      setFeaturedPokemon(demoData)
      setIsLoading(false)
    }, 1000)
  }, [])

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

  return (
    <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-2 border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
            >
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Featured
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Featured Pokémon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out these powerful and popular Pokémon that trainers love
            </p>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="glass dark:glass-dark border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-slate-200/50 dark:bg-slate-800/50 animate-pulse" />
                  <div className="p-4">
                    <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-2" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse w-1/2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredPokemon.map((pokemon) => (
                <CarouselItem key={pokemon.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Link href={`/pokemon/${pokemon.id}`}>
                      <Card className="glass dark:bg-black/50 border-0 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/50 dark:to-cyan-900/50 p-6 flex justify-center">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Image
                                src={pokemon.image || "/placeholder.svg"}
                                alt={pokemon.name}
                                width={150}
                                height={150}
                                className="drop-shadow-[0_0_8px_rgba(79,70,229,0.5)]"
                              />
                            </motion.div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{pokemon.name}</h3>
                            <div className="flex gap-2">
                              {pokemon.types.map((type) => (
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 static translate-y-0" />
              <CarouselNext className="ml-2 static translate-y-0" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  )
}
