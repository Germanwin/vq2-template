import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { ComingSoon } from "@/components/coming-soon"

export default function MyAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideBar />
        <main className="flex-1 overflow-auto">
          <ComingSoon
            title="My AI Coming Soon"
            description="Exciting AI features are on the way. Soon you'll be able to manage and interact with your personalized AI companions!"
          />
        </main>
      </div>
    </div>
  )
}

