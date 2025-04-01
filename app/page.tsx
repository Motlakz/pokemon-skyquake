import { LandingHero } from "@/components/landing/landing-hero"
import { FeaturedPokemon } from "@/components/pokemon/featured-pokemon"
import { PokemonCategories } from "@/components/pokemon/pokemon-categories"
import { CommunitySection } from "@/components/community/community-section"
import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import PokemonLogo from "@/components/pokemon/pokemon-logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-indigo-50 dark:from-slate-900 dark:via-orange-950/30 dark:to-indigo-950/30 energy-bg dark:energy-bg-dark">
          <div className="absolute inset-0 z-0 bg-[url('/pokeball-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <PokemonLogo />
              <LandingHero />
            </div>
          </div>
        </section>

        <FeaturedPokemon />
        <PokemonCategories />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}

