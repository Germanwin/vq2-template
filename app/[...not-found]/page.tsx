import { ComingSoon } from "@/components/coming-soon"
import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <ComingSoon
            title="Page Not Found"
            description="The page you're looking for doesn't exist or is still under construction. Please check back later!"
          />
        </main>
      </div>
    </div>
  )
}

