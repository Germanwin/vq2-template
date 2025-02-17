import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { ComingSoon } from "@/components/coming-soon"

export default function CreateCharacterPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideBar />
        <main className="flex-1 overflow-auto">
          <ComingSoon
            title="Create Character Coming Soon"
            description="Get ready to bring your imagination to life! Our character creation feature is just around the corner."
          />
        </main>
      </div>
    </div>
  )
}

