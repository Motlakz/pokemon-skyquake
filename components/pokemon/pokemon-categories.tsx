"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PokemonCategories() {
  const categories = [
    {
      name: "Fire Types",
      description: "Powerful fire-type Pokémon with blazing abilities",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      color: "from-orange-600 to-red-600",
      link: "/types/fire",
    },
    {
      name: "Water Types",
      description: "Fluid water-type Pokémon that rule the seas",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      color: "from-blue-600 to-cyan-600",
      link: "/types/water",
    },
    {
      name: "Grass Types",
      description: "Nature-loving grass-type Pokémon with plant powers",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      color: "from-green-600 to-emerald-600",
      link: "/types/grass",
    },
    {
      name: "Electric Types",
      description: "Shocking electric-type Pokémon with lightning speed",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "from-yellow-500 to-amber-500",
      link: "/types/electric",
    },
    {
      name: "Psychic Types",
      description: "Mysterious psychic-type Pokémon with mental powers",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      color: "from-pink-600 to-fuchsia-600",
      link: "/types/psychic",
    },
    {
      name: "Dragon Types",
      description: "Mighty dragon-type Pokémon with ancient strength",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
      color: "from-indigo-600 to-purple-600",
      link: "/types/dragon",
    },
  ]

  const regions = [
    {
      name: "Kanto",
      description: "The classic region where it all began",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "from-red-600 to-blue-600",
      link: "/region/kanto",
    },
    {
      name: "Johto",
      description: "A region rich in tradition and history",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
      color: "from-indigo-600 to-purple-600",
      link: "/region/johto",
    },
    {
      name: "Hoenn",
      description: "A region with diverse natural environments",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
      color: "from-green-600 to-blue-600",
      link: "/region/hoenn",
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
    <section className="py-16 bg-indigo-50/50 dark:bg-indigo-950/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Explore the Pokémon World</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover Pokémon grouped by their elemental types and regions
          </p>
        </motion.div>

        <div className="glass dark:glass-dark rounded-lg p-6 mb-12">
          <Tabs defaultValue="types" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="types">By Type</TabsTrigger>
              <TabsTrigger value="regions">By Region</TabsTrigger>
            </TabsList>
            <TabsContent value="types">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {categories.map((category, index) => (
                  <motion.div key={index} variants={item}>
                    <Link href={category.link}>
                      <Card className="overflow-hidden h-full bg-transparent border-0 shadow-xl">
                        <CardContent className="p-0 h-full">
                          <div className={`bg-gradient-to-br ${category.color} p-6 h-full flex flex-col`}>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                              <p className="text-white/80">{category.description}</p>
                            </div>
                            <div className="flex justify-end">
                              <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Image
                                  src={category.image || "/placeholder.svg"}
                                  alt={category.name}
                                  width={100}
                                  height={100}
                                  className="drop-shadow-lg"
                                />
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="regions">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {regions.map((region, index) => (
                  <motion.div key={index} variants={item}>
                    <Link href={region.link}>
                      <Card className="overflow-hidden h-full bg-transparent border-0 shadow-xl">
                        <CardContent className="p-0 h-full">
                          <div className={`bg-gradient-to-br ${region.color} p-6 h-full flex flex-col`}>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2">{region.name}</h3>
                              <p className="text-white/80">{region.description}</p>
                            </div>
                            <div className="flex justify-end">
                              <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Image
                                  src={region.image || "/placeholder.svg"}
                                  alt={region.name}
                                  width={100}
                                  height={100}
                                  className="drop-shadow-lg"
                                />
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

