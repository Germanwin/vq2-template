import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { ComingSoon } from "@/components/coming-soon"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideBar />
        <main className="flex-1 overflow-auto">
          <ComingSoon
            title="Collections Coming Soon"
            description="We're working hard to bring you a great collection experience. Stay tuned!"
          />
        </main>
      </div>
    </div>
  )
}

