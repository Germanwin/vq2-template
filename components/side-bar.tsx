"use client"

import { Button } from "@/components/ui/button"
import { Compass, MessageSquare, FolderHeart, ImageIcon, UserPlus, User, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { PremiumModal } from "./premium-modal"

export function SideBar() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { href: "/", icon: Compass, label: "Explore" },
    { href: "/chat", icon: MessageSquare, label: "Chat" },
    { href: "/collections", icon: FolderHeart, label: "Collection", comingSoon: true },
    { href: "/generate", icon: ImageIcon, label: "Generate Image", comingSoon: true },
    { href: "/create", icon: UserPlus, label: "Create Character", comingSoon: true },
    { href: "/my-ai", icon: User, label: "My AI", comingSoon: true },
  ]

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between md:h-[calc(100vh-3.5rem)] w-64 bg-background border-r border-border z-30`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setIsSidebarOpen(false)}
      >
        <X className="h-6 w-6" />
      </Button>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                  {item.comingSoon && (
                    <span className="ml-auto text-xs bg-pink-500 text-white px-2 py-1 rounded-full">Soon</span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <PremiumModal />
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  )
}

