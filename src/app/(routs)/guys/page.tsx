
import { CharacterCard } from "@/components/pages/explore/character-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

function formatNumber(num: number): string {
	if (num >= 1000) {
		return (num / 1000).toFixed(1) + "k"
	}
	return num.toString()
}

const guyCharacters = [
	{
		id: "g1",
		name: "Alex",
		age: 28,
		description:
			"Charismatic entrepreneur with a passion for technology and innovation.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 3100,
			messages: 820,
		},
	},
	{
		id: "g2",
		name: "Marcus",
		age: 32,
		description:
			"Ex-military turned private security consultant with a mysterious past.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		isNew: true,
		stats: {
			likes: 2700,
			messages: 690,
		},
	},
	{
		id: "g3",
		name: "Liam",
		age: 24,
		description:
			"Aspiring musician with a soulful voice and a talent for songwriting.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2900,
			messages: 750,
		},
	},
	{
		id: "g4",
		name: "Ethan",
		age: 30,
		description:
			"Brilliant scientist working on groundbreaking research in artificial intelligence.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2400,
			messages: 580,
		},
	},
	{
		id: "g5",
		name: "Jace",
		age: 26,
		description:
			"Professional surfer with a laid-back attitude and a love for adventure.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		isNew: true,
		stats: {
			likes: 3300,
			messages: 840,
		},
	},
	{
		id: "g6",
		name: "Noah",
		age: 29,
		description:
			"Dedicated environmentalist working to protect endangered species.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2200,
			messages: 510,
		},
	},
	{
		id: "g7",
		name: "Zain",
		age: 31,
		description:
			"Michelin-starred chef known for his innovative fusion cuisine.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2600,
			messages: 670,
		},
	},
	{
		id: "g8",
		name: "Finn",
		age: 27,
		description:
			"Charming bartender with a knack for mixing creative cocktails and giving advice.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 3000,
			messages: 780,
		},
	},
]

export default function GuysPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="flex">
				<main className="flex-1 p-4 sm:p-6 lg:p-8">
					<section className="mb-8 sm:mb-12">
						<div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
							<Image
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rj04aUJ8c8sHtPNcXBrUkJTPA5dwoT.png"
								alt="Guy Characters Banner"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center space-y-6">
									<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
										Guy Characters
									</h1>
									<p className="text-lg sm:text-xl text-gray-200">
										Discover and interact with intriguing male personalities
									</p>
									<Button
										size="lg"
										className="bg-pink-500 hover:bg-pink-600 text-white px-8"
									>
										Start Chatting
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
								<span className="text-pink-500">Guy</span> Characters
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
							{guyCharacters.map((character) => (
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
