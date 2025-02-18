
import { Herobanner } from "@/components/pages/explore/herobanner"
import { AvatarsGrid } from "@/components/pages/explore/avatarsGrid"
import { NavTypes } from "@/components/pages/explore/navTypes"

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<div className="flex">
				<main className="flex flex-col items-center w-full p-4 sm:p-6 lg:p-8">
					<Herobanner />

					<NavTypes />
					<AvatarsGrid />
				</main>
			</div>
		</div>
	)
}
