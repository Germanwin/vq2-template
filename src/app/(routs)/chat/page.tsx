"use client"

import { useState } from "react"
import { ChatList } from "@/components/chat-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { MessageSquare, Send, Phone, ImageIcon, MoreVertical, ChevronRight, AlertCircle } from "lucide-react"
import Image from "next/image"
import { useChat } from "ai/react"

interface Character {
  id: string
  name: string
  avatar: string
  description: string
  images: string[]
  stats: {
    age: number
    body: string
    ethnicity: string
    language: string
    relationship: string
    occupation: string
  }
}

const characters: Character[] = [
  {
    id: "1",
    name: "Lila",
    avatar: "/placeholder.svg?height=32&width=32",
    description: "Gothic-punk college student with a geeky side. She's impossible to miss with her bright blue hair.",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    stats: {
      age: 21,
      body: "Slim",
      ethnicity: "Caucasian",
      language: "English",
      relationship: "Single",
      occupation: "Student",
    },
  },
  {
    id: "2",
    name: "Savannah",
    avatar: "/placeholder.svg?height=32&width=32",
    description: "A freshman college cheerleader with a bright personality and infectious enthusiasm.",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    stats: {
      age: 19,
      body: "Athletic",
      ethnicity: "African American",
      language: "English",
      relationship: "Single",
      occupation: "Student",
    },
  },
  // Add more characters here...
]

export default function ChatPage() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const selectedCharacter = characters.find((char) => char.id === selectedChatId)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: selectedChatId ? `/api/chat/${selectedChatId}` : undefined,
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedChatId) {
      handleSubmit(e)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-[calc(100vh-3.5rem)]">
        <div className="flex flex-1 overflow-hidden">
          <ChatList selectedChatId={selectedChatId} onSelectChat={setSelectedChatId} />
          <div className="flex-1 flex flex-col">
            {selectedCharacter ? (
              <>
                <header className="h-14 border-b border-border flex items-center px-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={selectedCharacter.avatar} alt={selectedCharacter.name} />
                    <AvatarFallback>{selectedCharacter.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{selectedCharacter.name}</span>
                  <div className="ml-auto flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>
                </header>
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex items-start space-x-2 max-w-[80%] ${
                            message.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                          }`}
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={message.role === "user" ? "/placeholder.svg" : selectedCharacter.avatar}
                            />
                            <AvatarFallback>{message.role === "user" ? "U" : selectedCharacter.name[0]}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`rounded-lg px-4 py-2 ${
                              message.role === "user" ? "bg-pink-500 text-white" : "bg-secondary"
                            }`}
                          >
                            {message.content}
                          </div>
                        </div>
                      </div>
                    ))}
                    {error && (
                      <div className="flex justify-center">
                        <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center space-x-2">
                          <AlertCircle className="h-4 w-4" />
                          <span>An error occurred. Please try again later.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                <div className="border-t border-border p-4">
                  <form onSubmit={onSubmit} className="flex space-x-2 max-w-3xl mx-auto">
                    <Input
                      placeholder={`Message ${selectedCharacter.name}...`}
                      value={input}
                      onChange={handleInputChange}
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" className="bg-pink-500 hover:bg-pink-600" disabled={isLoading}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="bg-pink-500/20 rounded-full p-3 inline-block">
                    <MessageSquare className="w-6 h-6 text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-bold">Select a character to start chatting</h2>
                  <p className="text-muted-foreground">
                    Choose a character from the list on the left to begin your conversation.
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* Character Profile Sidebar */}
          {selectedCharacter && (
            <div
              className={`fixed inset-y-0 right-0 w-80 bg-background border-l border-border transform ${
                isProfileOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-200 ease-in-out overflow-y-auto z-30`}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4"
                onClick={() => setIsProfileOpen(false)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="p-6 pt-16">
                <div className="relative h-80 mb-6">
                  <Image
                    src={selectedCharacter.images[0] || "/placeholder.svg"}
                    alt={selectedCharacter.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedCharacter.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{selectedCharacter.description}</p>
                <div className="flex space-x-2 mb-6">
                  <Button className="flex-1 bg-green-500 hover:bg-green-600">Call Me</Button>
                  <Button className="flex-1 bg-pink-500 hover:bg-pink-600">Generate Image</Button>
                </div>
                <Separator className="my-6" />
                <h3 className="font-semibold mb-4">About me:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(selectedCharacter.stats).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase">{key}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

