"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Move {
  name: string
  type: string
  power: number | null
  accuracy: number | null
  pp: number
  category: "Physical" | "Special" | "Status"
  learnMethod: string
}

export function PokemonMoves({ id }: { id: string }) {
  const [moves, setMoves] = useState<Move[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from the PokeAPI
    // For demo purposes, we'll use hardcoded data
    setTimeout(() => {
      // This is mock data - in a real app we'd fetch from the API
      const mockMoves: Move[] = [
        {
          name: "Thunderbolt",
          type: "Electric",
          power: 90,
          accuracy: 100,
          pp: 15,
          category: "Special",
          learnMethod: "Level 26",
        },
        {
          name: "Quick Attack",
          type: "Normal",
          power: 40,
          accuracy: 100,
          pp: 30,
          category: "Physical",
          learnMethod: "Level 10",
        },
        {
          name: "Thunder Wave",
          type: "Electric",
          power: null,
          accuracy: 90,
          pp: 20,
          category: "Status",
          learnMethod: "Level 18",
        },
        {
          name: "Iron Tail",
          type: "Steel",
          power: 100,
          accuracy: 75,
          pp: 15,
          category: "Physical",
          learnMethod: "TM23",
        },
        {
          name: "Volt Tackle",
          type: "Electric",
          power: 120,
          accuracy: 100,
          pp: 15,
          category: "Physical",
          learnMethod: "Egg Move",
        },
      ]

      setMoves(mockMoves)
      setIsLoading(false)
    }, 1000)
  }, [id])

  const typeColors: Record<string, string> = {
    Normal: "bg-gray-300 dark:bg-gray-400",
    Fire: "bg-orange-400 dark:bg-orange-500",
    Water: "bg-blue-400 dark:bg-blue-500",
    Electric: "bg-yellow-300 dark:bg-yellow-400",
    Grass: "bg-green-400 dark:bg-green-500",
    Ice: "bg-cyan-200 dark:bg-cyan-300",
    Fighting: "bg-red-600 dark:bg-red-700",
    Poison: "bg-purple-500 dark:bg-purple-600",
    Ground: "bg-amber-600 dark:bg-amber-700",
    Flying: "bg-indigo-200 dark:bg-indigo-300",
    Psychic: "bg-pink-400 dark:bg-pink-500",
    Bug: "bg-lime-400 dark:bg-lime-500",
    Rock: "bg-stone-500 dark:bg-stone-600",
    Ghost: "bg-violet-600 dark:bg-violet-700",
    Dragon: "bg-indigo-600 dark:bg-indigo-700",
    Dark: "bg-slate-700 dark:bg-slate-800",
    Steel: "bg-slate-300 dark:bg-slate-400",
    Fairy: "bg-pink-200 dark:bg-pink-300",
  }

  const categoryColors: Record<string, string> = {
    Physical: "bg-red-400 dark:bg-red-500",
    Special: "bg-blue-400 dark:bg-blue-500",
    Status: "bg-gray-400 dark:bg-gray-500",
  }

  return (
    <Card className="bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700 mt-8">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Moves</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 dark:border-slate-700">
                  <TableHead className="text-gray-900 dark:text-white">Move</TableHead>
                  <TableHead className="text-gray-900 dark:text-white">Type</TableHead>
                  <TableHead className="text-gray-900 dark:text-white">Category</TableHead>
                  <TableHead className="text-gray-900 dark:text-white">Power</TableHead>
                  <TableHead className="text-gray-900 dark:text-white">Accuracy</TableHead>
                  <TableHead className="text-gray-900 dark:text-white">PP</TableHead>
                  <TableHead className="text-gray-900 dark:text-white">Learn Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {moves.map((move, index) => (
                  <motion.tr
                    key={index}
                    className="border-gray-200 dark:border-slate-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TableCell className="font-medium text-gray-900 dark:text-white">{move.name}</TableCell>
                    <TableCell>
                      <span
                        className={`${typeColors[move.type] || "bg-gray-400 dark:bg-gray-500"} dark:text-white text-xs px-2 py-1 rounded-full`}
                      >
                        {move.type}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`${categoryColors[move.category] || "bg-gray-400 dark:bg-gray-500"} dark:text-white text-xs px-2 py-1 rounded-full`}
                      >
                        {move.category}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{move.power || "—"}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{move.accuracy ? `${move.accuracy}%` : "—"}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{move.pp}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{move.learnMethod}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
