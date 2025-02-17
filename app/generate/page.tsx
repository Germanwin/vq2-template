import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { ComingSoon } from "@/components/coming-soon"

export default function GenerateImagePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideBar />
        <main className="flex-1 overflow-auto">
          <ComingSoon
            title="Generate Image Coming Soon"
            description="Our AI-powered image generation feature is almost ready. Check back soon to create stunning visuals!"
          />
        </main>
      </div>
    </div>
  )
}

