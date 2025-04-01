"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface Evolution {
  id: number
  name: string
  image: string
}

interface EvolutionChain {
  from: Evolution
  to: Evolution
  level: number
}

export function PokemonEvolutions({ id }: { id: string }) {
  const [evolutions, setEvolutions] = useState<EvolutionChain[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from the PokeAPI
    // For demo purposes, we'll use hardcoded data
    setTimeout(() => {
      // This is mock data - in a real app we'd fetch from the API
      const mockEvolutions: EvolutionChain[] = [
        {
          from: {
            id: 172,
            name: "Pichu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
          },
          to: {
            id: 25,
            name: "Pikachu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          },
          level: 16,
        },
        {
          from: {
            id: 25,
            name: "Pikachu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          },
          to: {
            id: 26,
            name: "Raichu",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
          },
          level: 0, // Thunder Stone
        },
      ]

      setEvolutions(mockEvolutions)
      setIsLoading(false)
    }, 1000)
  }, [id])

  return (
    <Card className="bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Evolution Chain</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-16 w-16 bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
                <div className="h-8 w-8 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                <div className="h-16 w-16 bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {evolutions.map((evo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link href={`/pokemon/${evo.from.id}`} className="group">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100/50 dark:bg-slate-700/50 rounded-full p-2 mb-2 group-hover:bg-gray-200 dark:group-hover:bg-slate-700 transition-colors">
                      <Image src={evo.from.image || "/placeholder.svg"} alt={evo.from.name} width={60} height={60} />
                    </div>
                    <span className="text-sm text-gray-900 dark:text-white">{evo.from.name}</span>
                  </div>
                </Link>

                <div className="flex flex-col items-center">
                  <ChevronRight className="h-6 w-6 text-teal-500 dark:text-teal-400" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {evo.level > 0 ? `Level ${evo.level}` : "Thunder Stone"}
                  </span>
                </div>

                <Link href={`/pokemon/${evo.to.id}`} className="group">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100/50 dark:bg-slate-700/50 rounded-full p-2 mb-2 group-hover:bg-gray-200 dark:group-hover:bg-slate-700 transition-colors">
                      <Image src={evo.to.image || "/placeholder.svg"} alt={evo.to.name} width={60} height={60} />
                    </div>
                    <span className="text-sm text-gray-900 dark:text-white">{evo.to.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}