"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, Trophy, ExternalLink } from "lucide-react"
import Link from "next/link"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CommunitySection() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
      title: "Discord Community",
      description:
        "Join our active Discord server to chat with other trainers, share strategies, and participate in events.",
      link: "https://discord.gg/pokemon",
      users: [
        { name: "Ash K.", image: "/placeholder.svg" },
        { name: "Misty W.", image: "/placeholder.svg" },
        { name: "Brock H.", image: "/placeholder.svg" },
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
      title: "Trading Forums",
      description:
        "Find trading partners, exchange friend codes, and complete your Pokédex with help from the community.",
      link: "/community/trading",
      users: [
        { name: "Gary O.", image: "/placeholder.svg" },
        { name: "May M.", image: "/placeholder.svg" },
        { name: "Dawn B.", image: "/placeholder.svg" },
      ],
    },
    {
      icon: <Trophy className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
      title: "Tournaments",
      description: "Participate in regular online tournaments and test your skills against other trainers.",
      link: "/community/tournaments",
      users: [
        { name: "Lance D.", image: "/placeholder.svg" },
        { name: "Cynthia S.", image: "/placeholder.svg" },
        { name: "Steven S.", image: "/placeholder.svg" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/10 dark:bg-indigo-400/5"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50">Join Our Community</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Connect with fellow Pokémon trainers, share your experiences, and participate in events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={feature.link}>
                <Card className="h-full bg-white/50 dark:bg-slate-800 backdrop-blur-xl border border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/10 transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{feature.description}</p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {feature.users.map((user, i) => (
                            <HoverCard key={i}>
                              <HoverCardTrigger asChild>
                                <Avatar className="border-2 border-white dark:border-slate-800 cursor-pointer">
                                  <AvatarImage src={user.image} />
                                  <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                                    {user.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-60 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <div className="flex justify-between space-x-4">
                                  <Avatar>
                                    <AvatarImage src={user.image} />
                                    <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                                      {user.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{user.name}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Active community member</p>
                                  </div>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:text-indigo-300 dark:hover:bg-indigo-950/50 p-0 flex items-center"
                        >
                          Join Now <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="https://discord.gg/pokemon" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 dark:from-indigo-500 dark:to-cyan-400 dark:hover:from-indigo-600 dark:hover:to-cyan-500 text-white shadow-lg dark:shadow-indigo-500/20"
            >
              Join Our Discord Community
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
