"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, Trophy, ExternalLink, Gamepad2, Gift, Calendar } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export function CommunityFeatures() {
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
    {
      icon: <Gamepad2 className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
      title: "Battle Leagues",
      description: "Join competitive battle leagues with rankings, seasons, and special prizes for top performers.",
      link: "/community/leagues",
      users: [
        { name: "Red", image: "/placeholder.svg" },
        { name: "Blue", image: "/placeholder.svg" },
        { name: "Green", image: "/placeholder.svg" },
      ],
    },
    {
      icon: <Gift className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
      title: "Giveaways",
      description: "Participate in regular giveaways for rare Pokémon, items, and even real-world merchandise.",
      link: "/community/giveaways",
      users: [
        { name: "Prof. Oak", image: "/placeholder.svg" },
        { name: "Prof. Elm", image: "/placeholder.svg" },
        { name: "Prof. Birch", image: "/placeholder.svg" },
      ],
    },
    {
      icon: <Calendar className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
      title: "Events Calendar",
      description: "Stay updated with our events calendar featuring community days, special raids, and more.",
      link: "/community/events",
      users: [
        { name: "Lillie", image: "/placeholder.svg" },
        { name: "Gladion", image: "/placeholder.svg" },
        { name: "Hau", image: "/placeholder.svg" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Community Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover all the ways you can connect with fellow Pokémon trainers and enhance your Pokémon journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={feature.link}>
                <Card className="h-full glass dark:bg-slate-800 border-0 hover:shadow-xl hover:shadow-indigo-500/20 transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{feature.description}</p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {feature.users.map((user, i) => (
                            <HoverCard key={i}>
                              <HoverCardTrigger asChild>
                                <Avatar className="border-2 border-background cursor-pointer">
                                  <AvatarImage src={user.image} />
                                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-60">
                                <div className="flex justify-between space-x-4">
                                  <Avatar>
                                    <AvatarImage src={user.image} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">{user.name}</h4>
                                    <p className="text-sm text-muted-foreground">Active community member</p>
                                  </div>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          ))}
                        </div>
                        <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                          Join Now <ExternalLink className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

