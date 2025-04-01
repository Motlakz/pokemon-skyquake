import { Suspense } from "react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PokemonDetail } from "@/components/pokemon/pokemon-detail"
import { PokemonEvolutions } from "@/components/pokemon/pokemon-evolutions"
import { PokemonMoves } from "@/components/pokemon/pokemon-moves"
import { PokemonStats } from "@/components/pokemon/pokemon-stats"
import { Skeleton } from "@/components/ui/skeleton"

export default function PokemonDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-purple-100 to-slate-200 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Suspense
          fallback={
            <div className="grid gap-8">
              <div className="dark:bg-slate-800/50 bg-slate-100/50 border border-slate-100 dark:border-slate-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <Skeleton className="h-64 w-64 rounded-lg bg-slate-200 dark:bg-slate-700/50" />
                  <div className="flex-1 space-y-4">
                    <Skeleton className="h-10 w-1/3 bg-slate-200 dark:bg-slate-700" />
                    <Skeleton className="h-6 w-1/4 bg-slate-200 dark:bg-slate-700" />
                    <Skeleton className="h-24 w-full bg-slate-200 dark:bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <PokemonDetail id={params.id} />
        </Suspense>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Suspense fallback={<Skeleton className="h-64 w-full dark:bg-slate-800/50 bg-slate-300/50 rounded-lg" />}>
            <PokemonStats id={params.id} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-64 w-full dark:bg-slate-800/50 bg-slate-300/50 rounded-lg" />}>
            <PokemonEvolutions id={params.id} />
          </Suspense>
        </div>

        <Suspense fallback={<Skeleton className="h-64 w-full dark:bg-slate-800/50 bg-slate-300/50 rounded-lg mt-8" />}>
          <PokemonMoves id={params.id} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

