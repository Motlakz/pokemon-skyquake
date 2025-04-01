import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { RegionsGrid } from "@/components/regions-grid"

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <section className="relative py-16 bg-gradient-to-b from-white via-cyan-50 to-white dark:from-slate-900 dark:via-cyan-950/30 dark:to-slate-900">
          <div className="absolute inset-0 z-0 bg-[url('/pokeball-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Pokémon Regions</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the diverse regions of the Pokémon world, each with unique landscapes, Pokémon, and adventures
              </p>
            </div>

            <RegionsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

