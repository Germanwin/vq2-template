import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Character {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  type: "girls" | "anime" | "guys"
}

const characters: Character[] = [
  {
    id: "1",
    name: "Lila",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "Hey! Want to talk about the latest tech trends?",
    timestamp: "2m ago",
    type: "girls",
  },
  {
    id: "2",
    name: "Savannah",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "That's so cool! I'd love to hear more about it.",
    timestamp: "1h ago",
    type: "girls",
  },
  {
    id: "3",
    name: "Sakura",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "Did you see the new magical girl transformation?",
    timestamp: "3h ago",
    type: "anime",
  },
  {
    id: "4",
    name: "Zack",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "Have you tried the new VR game I mentioned?",
    timestamp: "1d ago",
    type: "guys",
  },
  {
    id: "5",
    name: "Hiroshi",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "The mecha battle yesterday was intense!",
    timestamp: "2d ago",
    type: "anime",
  },
]

interface ChatListProps {
  selectedChatId: string | null
  onSelectChat: (chatId: string) => void
}

export function ChatList({ selectedChatId, onSelectChat }: ChatListProps) {
  return (
    <div className="w-full max-w-xs flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Chats</h2>
      </div>
      <Tabs defaultValue="all" className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-4 gap-4 px-4 py-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="girls">Girls</TabsTrigger>
          <TabsTrigger value="anime">Anime</TabsTrigger>
          <TabsTrigger value="guys">Guys</TabsTrigger>
        </TabsList>
        <ScrollArea className="flex-1">
          <TabsContent value="all" className="m-0">
            <ChatItems characters={characters} selectedChatId={selectedChatId} onSelectChat={onSelectChat} />
          </TabsContent>
          <TabsContent value="girls" className="m-0">
            <ChatItems
              characters={characters.filter((char) => char.type === "girls")}
              selectedChatId={selectedChatId}
              onSelectChat={onSelectChat}
            />
          </TabsContent>
          <TabsContent value="anime" className="m-0">
            <ChatItems
              characters={characters.filter((char) => char.type === "anime")}
              selectedChatId={selectedChatId}
              onSelectChat={onSelectChat}
            />
          </TabsContent>
          <TabsContent value="guys" className="m-0">
            <ChatItems
              characters={characters.filter((char) => char.type === "guys")}
              selectedChatId={selectedChatId}
              onSelectChat={onSelectChat}
            />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}

interface ChatItemsProps {
  characters: Character[]
  selectedChatId: string | null
  onSelectChat: (chatId: string) => void
}

function ChatItems({ characters, selectedChatId, onSelectChat }: ChatItemsProps) {
  return (
    <div className="p-2 space-y-2">
      {characters.map((character) => (
        <Button
          key={character.id}
          variant="ghost"
          className={cn("w-full justify-start px-2", selectedChatId === character.id && "bg-secondary")}
          onClick={() => onSelectChat(character.id)}
        >
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={character.avatar} alt={character.name} />
            <AvatarFallback>{character.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left">
            <div className="flex justify-between items-center">
              <span className="font-medium">{character.name}</span>
              <span className="text-xs text-muted-foreground">{character.timestamp}</span>
            </div>
            <p className="text-sm text-muted-foreground truncate">{character.lastMessage}</p>
          </div>
        </Button>
      ))}
    </div>
  )
}

