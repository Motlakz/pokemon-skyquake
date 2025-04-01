"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../theme-toggle"
import SkyQuakeLogo from "../skyquake-logo"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pokédex", href: "/pokedex" },
    { name: "Region", href: "/region" },
    { name: "Community", href: "/community" },
  ]

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all duration-300",
        scrolled ? "bg-white/80 dark:bg-slate-900/80" : "bg-transparent",
        "border-b border-indigo-200/70 dark:border-indigo-800/50"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <SkyQuakeLogo />
            <div className="hidden md:block ml-6">
              <div className="flex space-x-1">
                
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium border transition-all",
                      pathname === item.href 
                        ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700" 
                        : "text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100/80 dark:hover:bg-indigo-800/30 hover:text-indigo-900 dark:hover:text-indigo-100 border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100/80 dark:hover:bg-indigo-800/30 hover:text-indigo-900 dark:hover:text-indigo-100 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
                    Explore
                  </button>
                  <div className="absolute left-0 mt-2 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg ring-1 ring-indigo-200 dark:ring-indigo-800 overflow-hidden">
                      <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <div className="row-span-3">
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md border border-indigo-400 hover:shadow-lg transition-shadow"
                            href="/pokedex"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">Pokédex</div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore the complete Pokédex with detailed information on every Pokémon
                            </p>
                          </Link>
                        </div>
                        <div>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/50 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                            href="/region"
                          >
                            <div className="text-sm font-medium leading-none text-indigo-700 dark:text-indigo-300">Regions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                              Discover the different regions in the Pokémon world
                            </p>
                          </Link>
                        </div>
                        <div>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-900/50 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                            href="/community"
                          >
                            <div className="text-sm font-medium leading-none text-indigo-700 dark:text-indigo-300">Community</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                              Join our community of Pokémon trainers
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Search Pokémon..." 
                className="pl-10 w-[200px] lg:w-[300px] border-indigo-200 dark:border-indigo-800 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400" 
              />
            </div>
            <ModeToggle />
          </div>
          <div className="flex md:hidden">
            <ModeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              className="ml-2 rounded-full border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/50"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              ) : (
                <Menu className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 border-t border-indigo-200 dark:border-indigo-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium border transition-all",
                  pathname === item.href
                    ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700"
                    : "text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100/80 dark:hover:bg-indigo-800/30 hover:text-indigo-900 dark:hover:text-indigo-100 border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search Pokémon..." 
                  className="pl-10 w-full border-indigo-200 dark:border-indigo-800 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400" 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
