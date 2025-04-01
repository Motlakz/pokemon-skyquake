"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export function CommunityEvents() {
  const events = [
    {
      title: "Global Trading Day",
      description: "Connect with trainers worldwide to trade Pokémon and complete your Pokédex.",
      date: "April 15, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Online - Discord",
      attendees: 1243,
      badge: "Popular",
      badgeColor: "bg-orange-500",
    },
    {
      title: "Championship Tournament",
      description: "Test your skills in our monthly championship tournament with prizes for top performers.",
      date: "April 22, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Online - Battle Stadium",
      attendees: 856,
      badge: "Competitive",
      badgeColor: "bg-indigo-600",
    },
    {
      title: "Shiny Hunting Challenge",
      description: "Join our community shiny hunting event with tips, tricks, and prizes for participants.",
      date: "May 1, 2025",
      time: "All Day",
      location: "In-Game",
      attendees: 2105,
      badge: "New",
      badgeColor: "bg-green-500",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join these exciting community events and connect with fellow trainers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass dark:bg-slate-800 border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className={`${event.badgeColor} text-white border-0`}>{event.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-6">{event.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Register Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/community/events">
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950 dark:hover:text-indigo-300"
            >
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

