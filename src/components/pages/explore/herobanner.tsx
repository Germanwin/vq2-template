import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export const Herobanner = () => {
	return (
		<section className="mb-6 w-full">
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
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
							Welcome to Nify
						</h1>
						<p className="text-lg sm:text-xl text-gray-200">
							Chat with AI-powered characters and bring your imagination to life
						</p>
						<Button
							size="lg"
							className="bg-pink-500 hover:bg-pink-600 text-white px-8"
						>
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
	)
}
