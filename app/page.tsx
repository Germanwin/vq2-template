import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { CharacterCard } from "@/components/character-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"
  }
  return num.toString()
}

const characters = [
  {
    id: "1",
    name: "Lila",
    age: 21,
    description: "Gothic-punk college student with a geeky side. She's impossible to miss with her bright blue hair.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    stats: {
      likes: 1200,
      messages: 304,
    },
  },
  {
    id: "2",
    name: "Savannah",
    age: 19,
    description: "A freshman college cheerleader with a bright personality and infectious enthusiasm.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    isNew: true,
    stats: {
      likes: 856,
      messages: 123,
    },
  },
  {
    id: "3",
    name: "Zack",
    age: 25,
    description: "Tech-savvy software engineer with a passion for AI and virtual reality.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    stats: {
      likes: 1500,
      messages: 420,
    },
  },
  {
    id: "4",
    name: "Elena",
    age: 28,
    description: "Ambitious lawyer with a sharp mind and a taste for high-stakes cases.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    stats: {
      likes: 2100,
      messages: 567,
    },
  },
  {
    id: "5",
    name: "Kai",
    age: 23,
    description: "Free-spirited artist and environmental activist with a talent for street art.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    isNew: true,
    stats: {
      likes: 980,
      messages: 201,
    },
  },
  {
    id: "6",
    name: "Olivia",
    age: 31,
    description: "Charismatic TV host with a knack for getting the best out of her interview subjects.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    stats: {
      likes: 3200,
      messages: 789,
    },
  },
  {
    id: "7",
    name: "Marcus",
    age: 27,
    description: "Ex-military turned private security consultant with a mysterious past.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    stats: {
      likes: 1800,
      messages: 456,
    },
  },
  {
    id: "8",
    name: "Yuki",
    age: 22,
    description: "Aspiring J-pop idol with a bubbly personality and a passion for kawaii fashion.",
    imageUrl: "/placeholder.svg?height=400&width=300",
    stats: {
      likes: 2500,
      messages: 678,
    },
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <section className="mb-8 sm:mb-12">
            <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rj04aUJ8c8sHtPNcXBrUkJTPA5dwoT.png"
                alt="Nify Banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Welcome to Nify</h1>
                  <p className="text-lg sm:text-xl text-gray-200">
                    Chat with AI-powered characters and bring your imagination to life
                  </p>
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white/50" />
                <div className="w-2 h-2 rounded-full bg-white/50" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-pink-500">Explore</span> Nify Characters
              </h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  {...character}
                  stats={{
                    likes: formatNumber(character.stats.likes),
                    messages: formatNumber(character.stats.messages),
                  }}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

