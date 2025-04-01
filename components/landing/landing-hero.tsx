"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles, Zap, Star, Shield } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function LandingHero() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 items-center">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/50 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-300 mb-4">
              <Zap className="mr-1 h-3 w-3" />
              New Generation Released
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="block">Discover the</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
              World of Pokémon
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-700 dark:text-slate-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Embark on an epic journey through regions filled with amazing creatures. Catch, train, and battle with your
            favorite Pokémon. Join millions of trainers worldwide!
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/pokedex">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white shadow-lg group"
              >
                Explore Pokédex
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="https://discord.gg/pokemon" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950 dark:hover:text-orange-300 shadow-lg"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Join Community
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">800+ Pokémon</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-indigo-500 mr-2" />
              <span className="text-sm font-medium">18 Types</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-sm font-medium">Daily Updates</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100 via-cyan-100 to-orange-100 dark:from-indigo-900/20 dark:via-cyan-900/20 dark:to-orange-900/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pokeball-pattern.svg')] bg-repeat opacity-10 dark:opacity-5"></div>
            </div>

            {/* Adjusted positioning for Pikachu */}
            <motion.div
              className="absolute top-[5%] left-[5%] w-[180px] h-[180px]"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                alt="Pikachu"
                width={180}
                height={180}
                className="drop-shadow-[0_0_15px_rgba(255,165,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,165,0,0.3)]"
              />
            </motion.div>

            {/* Adjusted positioning for Charizard */}
            <motion.div
              className="absolute bottom-[5%] right-[5%] w-[160px] h-[160px]"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                alt="Charizard"
                width={160}
                height={160}
                className="drop-shadow-[0_0_15px_rgba(255,100,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(255,100,0,0.3)]"
              />
            </motion.div>

            {/* Adjusted positioning for Mewtwo */}
            <motion.div
              className="absolute top-[30%] right-[25%] w-[140px] h-[140px]"
              animate={{
                y: [0, 10, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                alt="Mewtwo"
                width={140}
                height={140}
                className="drop-shadow-[0_0_15px_rgba(79,70,229,0.5)] dark:drop-shadow-[0_0_15px_rgba(79,70,229,0.3)]"
              />
            </motion.div>
          </div>

          <Card className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass dark:glass-dark border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="flex -space-x-4">
                <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                  alt="Bulbasaur"
                  width={40}
                  height={40}
                  className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 border-2 border-white dark:border-slate-800"
                />
                <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                  alt="Charmander"
                  width={40}
                  height={40}
                  className="rounded-full bg-red-100 dark:bg-red-900/30 border-2 border-white dark:border-slate-800"
                />
                <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
                  alt="Squirtle"
                  width={40}
                  height={40}
                  className="rounded-full bg-blue-100 dark:bg-blue-900/30 border-2 border-white dark:border-slate-800"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Choose your starter!</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Begin your journey today</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
