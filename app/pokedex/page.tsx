import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { PokemonFilters } from "@/components/pokemon/pokemon-filters"
import { PokemonGrid } from "@/components/pokemon/pokemon-grid"
import { Suspense } from "react"


export default function PokedexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Pokédex</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the complete Pokédex with detailed information on every Pokémon
          </p>
        </div>

        <PokemonFilters />

        <Suspense fallback={<div className="text-center py-20 text-white">Loading Pokémon...</div>}>
          <PokemonGrid />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
