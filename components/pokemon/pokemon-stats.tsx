"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PokemonStat {
  name: string
  value: number
  color: string
  lightColor: string
}

// Define valid stat names
type StatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'

// Define the colors mapping type
type StatColors = {
  [K in StatName]: {
    dark: string
    light: string
  }
}

export function PokemonStats({ id }: { id: string }) {
  const [stats, setStats] = useState<PokemonStat[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        
        const statColors: StatColors = {
          'hp': { dark: "bg-red-500", light: "bg-red-400" },
          'attack': { dark: "bg-orange-500", light: "bg-orange-400" },
          'defense': { dark: "bg-yellow-500", light: "bg-yellow-400" },
          'special-attack': { dark: "bg-blue-500", light: "bg-blue-400" },
          'special-defense': { dark: "bg-green-500", light: "bg-green-400" },
          'speed': { dark: "bg-pink-500", light: "bg-pink-400" },
        }

        const formattedStats = data.stats.map((stat: { stat: { name: StatName }, base_stat: number }) => ({
          name: stat.stat.name === "special-attack" 
            ? "Sp. Attack" 
            : stat.stat.name === "special-defense"
            ? "Sp. Defense"
            : stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1),
          value: stat.base_stat,
          color: statColors[stat.stat.name].dark,
          lightColor: statColors[stat.stat.name].light,
        }))

        setStats(formattedStats)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching Pokemon stats:", error)
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [id])

  return (
    <Card className="bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Base Stats</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-5 w-20 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-5 w-10 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {stat.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {stat.value}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-slate-700 rounded overflow-hidden">
                  <motion.div
                    className={`h-full ${stat.lightColor} dark:${stat.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.value / 255) * 100}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.value < 50 && "Poor"}
                  {stat.value >= 50 && stat.value < 80 && "Average"}
                  {stat.value >= 80 && stat.value < 100 && "Good"}
                  {stat.value >= 100 && stat.value < 120 && "Great"}
                  {stat.value >= 120 && "Excellent"}
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total: {stats.reduce((acc, stat) => acc + stat.value, 0)}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
