"use client"

import { Badge } from "@/components/ui/badge"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CommunityHero() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-indigo-50 to-white dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/pokeball-pattern.svg')] bg-repeat opacity-5"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/10 dark:bg-indigo-500/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-bold mb-6">Join Our Pokémon Community</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with millions of Pokémon trainers worldwide. Share strategies, participate in events, trade
              Pokémon, and make new friends on your journey to become a Pokémon Master!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="https://discord.gg/pokemon" target="_blank" rel="noopener noreferrer">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </Button>
              </Link>

              <Link href="/community/forums">
                <Button
                  variant="outline"
                  className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950 dark:hover:text-indigo-300"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Browse Forums
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-slate-800 flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold">10,000+</span> trainers already joined
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden glass dark:glass-dark border-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Pokémon Community"
                width={600}
                height={400}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <Badge className="mb-2 bg-indigo-500 text-white border-0 self-start">Live Now</Badge>
                <h3 className="text-xl font-bold text-white mb-2">Global Trading Event</h3>
                <p className="text-white/80 mb-4">Join trainers from around the world in our monthly trading event!</p>
                <Button size="sm" className="self-start bg-white text-indigo-600 hover:bg-gray-100">
                  Join Event <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

