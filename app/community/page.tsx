import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { CommunityHero } from "@/components/community/community-hero"
import { CommunityFeatures } from "@/components/community/community-features"
import { CommunityEvents } from "@/components/community/community-events"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <CommunityHero />
        <CommunityFeatures />
        <CommunityEvents />
      </main>
      <Footer />
    </div>
  )
}

