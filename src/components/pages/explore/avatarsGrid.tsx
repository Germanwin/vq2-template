import { CharacterCard } from "@/components/pages/explore/character-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { characters } from "./characters"
function formatNumber(num: number): string {
	if (num >= 1000) {
		return (num / 1000).toFixed(1) + "k"
	}
	return num.toString()
}
export const AvatarsGrid = () => {
	return (
		<section className="w-full">
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
	)
}
