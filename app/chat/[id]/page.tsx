"use client"

import { useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { SideBar } from "@/components/side-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Phone, ImageIcon, MoreVertical, Send, AlertCircle, Menu, MessageSquare, X } from "lucide-react"
import Image from "next/image"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface CharacterProfile {
  name: string
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

const characterProfile: CharacterProfile = {
  name: "Adriana Romano",
  description:
    "Italian waitress with blonde hair and light blue eyes, works in a Parisian Italian restaurant. Cold and commanding, she thrives on dominating and controlling others for her benefit.",
  images: ["/placeholder.svg", "/placeholder.svg"],
  stats: {
    age: 29,
    body: "Fit",
    ethnicity: "Italian",
    language: "English",
    relationship: "N/A",
    occupation: "Waitress",
  },
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim() === "") return

    setIsLoading(true)
    setError(null)

    const newMessage: Message = { role: "user", content: input }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInput("")

    try {
      const response = await fetch(`/api/chat/${params.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch response")
      }

      const data = await response.json()
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: data.content }])
    } catch (error) {
      console.error("Error:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-background">
      <NavBar />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideBar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <header className="h-14 border-b border-border flex items-center px-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center flex-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="Character avatar" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <span className="ml-2 font-semibold">{characterProfile.name}</span>
            </div>
            <div className="flex items-center space-x-2">
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

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 max-w-3xl mx-auto">
              {messages.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-pink-500/20" />
                  <p>Start a conversation with {characterProfile.name}</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
                      }`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={message.role === "user" ? "/placeholder.svg" : "/placeholder.svg"}
                          alt={`${message.role} avatar`}
                        />
                        <AvatarFallback>{message.role === "user" ? "U" : "AR"}</AvatarFallback>
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
                ))
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2 max-w-3xl mx-auto">
              <Input
                placeholder="Write a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-pink-500 hover:bg-pink-600" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Character Profile Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-80 bg-background border-l border-border transform ${
            isProfileOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-200 ease-in-out overflow-y-auto z-30`}
        >
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-4 right-4 z-10"
            onClick={() => setIsProfileOpen(false)}
          >
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
          <div className="p-6 pt-20">
            <div className="relative h-80 mb-6">
              <Image src="/placeholder.svg" alt={characterProfile.name} fill className="object-cover rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{characterProfile.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{characterProfile.description}</p>
            <div className="flex space-x-2 mb-6">
              <Button className="flex-1 bg-green-500 hover:bg-green-600">Call Me</Button>
              <Button className="flex-1 bg-pink-500 hover:bg-pink-600">Generate Image</Button>
            </div>
            <Separator className="my-6" />
            <h3 className="font-semibold mb-4">About me:</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(characterProfile.stats).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase">{key}</p>
                  <p className="text-sm font-medium">{value.toString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

