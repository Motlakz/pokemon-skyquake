import Link from "next/link"
import { Github, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pokémon Skyquake</h3>
            <p className="text-muted-foreground text-sm">
              Your ultimate resource for everything Pokémon. Explore, learn, and connect with trainers worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pokedex"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Pokédex
                </Link>
              </li>
              <li>
                <Link
                  href="/region"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Region
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Games
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://discord.gg/pokemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="/community/forums"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="/community/events"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/community/tournaments"
                  className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                >
                  Tournaments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest Pokémon news and updates.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit" variant="outline">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Pokémon Skyquake. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Pokémon and its trademarks are &copy; of Nintendo, Game Freak, and Creatures Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

