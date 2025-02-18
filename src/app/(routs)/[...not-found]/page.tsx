import { ComingSoon } from "@/components/coming-soon"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
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

