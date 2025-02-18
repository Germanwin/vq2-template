import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"

interface CharacterCardProps {
  id: string
  name: string
  age: number
  description: string
  imageUrl: string
  isNew?: boolean
  stats: {
    likes: string
    messages: string
  }
}

export function CharacterCard({ id, name, age, description, imageUrl, isNew, stats }: CharacterCardProps) {
  return (
    <Link href={`/chat/${id}`}>
      <Card className="group relative overflow-hidden rounded-xl bg-card card-hover">
        <CardContent className="p-0">
          <div className="aspect-[3/4] relative">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {isNew && <Badge className="absolute top-3 right-3 bg-pink-500 hover:bg-pink-600">New</Badge>}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            <div className="absolute bottom-0 w-full p-3 sm:p-4 space-y-1 sm:space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {name} <span className="text-xs sm:text-sm font-normal text-gray-300">{age}</span>
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">{description}</p>
              <div className="flex items-center justify-between mt-1 sm:mt-2">
                <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{stats.likes}</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{stats.messages}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

