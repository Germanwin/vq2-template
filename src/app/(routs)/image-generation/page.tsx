import { ComingSoon } from "@/components/coming-soon"
import { Generator } from "@/components/pages/image-generation/generator"

export default function GenerateImagePage() {
	return (
		<div className="min-h-screen flex flex-row bg-background">
			<div className="h-screen w-3/5 p-10">
				<Generator />
			</div>
			<div className="h-screen w-2/5"></div>
		</div>
	)
}
