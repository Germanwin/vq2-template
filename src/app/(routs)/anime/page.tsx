
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

const animeCharacters = [
	{
		id: "a1",
		name: "Sakura",
		age: 17,
		description:
			"A cheerful and determined high school student with magical girl powers.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2500,
			messages: 720,
		},
	},
	{
		id: "a2",
		name: "Hiroshi",
		age: 19,
		description:
			"A skilled mecha pilot with a mysterious past and a strong sense of justice.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		isNew: true,
		stats: {
			likes: 1800,
			messages: 450,
		},
	},
	{
		id: "a3",
		name: "Yuki",
		age: 16,
		description:
			"A shy bookworm who discovers she has the power to enter the worlds of books she reads.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 3200,
			messages: 890,
		},
	},
	{
		id: "a4",
		name: "Kenji",
		age: 21,
		description:
			"A genius hacker and otaku who gets caught up in a global conspiracy.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2100,
			messages: 560,
		},
	},
	{
		id: "a5",
		name: "Akira",
		age: 18,
		description:
			"A hot-headed delinquent with a heart of gold and supernatural fighting abilities.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		isNew: true,
		stats: {
			likes: 2800,
			messages: 710,
		},
	},
	{
		id: "a6",
		name: "Miyuki",
		age: 15,
		description:
			"A prodigy violinist who can manipulate emotions through her music.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 1900,
			messages: 480,
		},
	},
	{
		id: "a7",
		name: "Takeshi",
		age: 23,
		description:
			"A stoic samurai from the Edo period who finds himself transported to modern-day Tokyo.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 2300,
			messages: 620,
		},
	},
	{
		id: "a8",
		name: "Hana",
		age: 14,
		description:
			"A bubbly idol singer with the secret ability to communicate with plants.",
		imageUrl: "/placeholder.svg?height=400&width=300",
		stats: {
			likes: 3500,
			messages: 950,
		},
	},
]

export default function AnimePage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="flex">
				<main className="flex-1 p-4 sm:p-6 lg:p-8">
					<section className="mb-8 sm:mb-12">
						<div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
							<Image
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rj04aUJ8c8sHtPNcXBrUkJTPA5dwoT.png"
								alt="Anime Characters Banner"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center space-y-6">
									<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
										Anime Characters
									</h1>
									<p className="text-lg sm:text-xl text-gray-200">
										Explore and chat with your favorite anime personalities
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
								<span className="text-pink-500">Anime</span> Characters
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
							{animeCharacters.map((character) => (
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
