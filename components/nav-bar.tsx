"use client"

import Link from "next/link"
import { Users, Film, User } from "lucide-react"
import { PremiumModal } from "./premium-modal"

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Nify</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-6">
            <Link href="/" className="flex items-center space-x-2 text-pink-500">
              <Users className="h-4 w-4" />
              <span>Girls</span>
            </Link>
            <Link href="/anime" className="flex items-center space-x-2">
              <Film className="h-4 w-4" />
              <span>Anime</span>
            </Link>
            <Link href="/guys" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Guys</span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <PremiumModal />
        </div>
      </div>
    </header>
  )
}

