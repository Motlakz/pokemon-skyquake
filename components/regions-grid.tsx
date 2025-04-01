"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export function RegionsGrid() {
  const regions = [
    {
      name: "Kanto",
      description: "The classic region where it all began, featuring the original 151 Pokémon.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "from-red-600 to-blue-600",
      cities: ["Pallet Town", "Viridian City", "Pewter City", "Cerulean City"],
      gyms: 8,
      generation: "Generation I",
    },
    {
      name: "Johto",
      description: "A region rich in tradition and history, located west of Kanto.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
      color: "from-indigo-600 to-purple-600",
      cities: ["New Bark Town", "Cherrygrove City", "Violet City", "Azalea Town"],
      gyms: 8,
      generation: "Generation II",
    },
    {
      name: "Hoenn",
      description: "A region with diverse natural environments, surrounded by water.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
      color: "from-green-600 to-blue-600",
      cities: ["Littleroot Town", "Oldale Town", "Petalburg City", "Rustboro City"],
      gyms: 8,
      generation: "Generation III",
    },
    {
      name: "Sinnoh",
      description: "A mountainous region with a cold climate in the north.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
      color: "from-blue-600 to-cyan-600",
      cities: ["Twinleaf Town", "Sandgem Town", "Jubilife City", "Oreburgh City"],
      gyms: 8,
      generation: "Generation IV",
    },
    {
      name: "Unova",
      description: "A region far from the previous ones, with many new Pokémon.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png",
      color: "from-gray-600 to-slate-800",
      cities: ["Nuvema Town", "Accumula Town", "Striaton City", "Nacrene City"],
      gyms: 8,
      generation: "Generation V",
    },
    {
      name: "Kalos",
      description: "A region inspired by France, known for Mega Evolution.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
      color: "from-pink-600 to-blue-600",
      cities: ["Vaniville Town", "Aquacorde Town", "Santalune City", "Lumiose City"],
      gyms: 8,
      generation: "Generation VI",
    },
    {
      name: "Alola",
      description: "A tropical region consisting of four islands and one artificial island.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
      color: "from-yellow-500 to-orange-600",
      cities: ["Iki Town", "Hau'oli City", "Heahea City", "Paniola Town"],
      trials: 7,
      generation: "Generation VII",
    },
    {
      name: "Galar",
      description: "A region inspired by Great Britain, known for Dynamax and Gigantamax.",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png",
      color: "from-red-600 to-indigo-600",
      cities: ["Postwick", "Wedgehurst", "Motostoke", "Turffield"],
      gyms: 8,
      generation: "Generation VIII",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={container} initial="hidden" animate="show">
      {regions.map((region) => (
        <motion.div key={region.name} variants={item}>
          <Link href={`/regions/${region.name.toLowerCase()}`}>
            <Card className="h-full hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${region.color} p-6 text-white`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2 bg-white/20 border-0 text-white">{region.generation}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{region.name} Region</h3>
                      <p className="text-white/90 mb-4">{region.description}</p>

                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Notable Locations:</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {region.cities.map((city) => (
                          <Badge
                            key={city}
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white text-xs"
                          >
                            {city}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-sm">
                        {region.gyms && <span>{region.gyms} Gyms</span>}
                        {region.trials && <span>{region.trials} Trials</span>}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Image
                        src={region.image || "/placeholder.svg"}
                        alt={region.name}
                        width={100}
                        height={100}
                        className="drop-shadow-lg"
                      />
                    </div>
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

