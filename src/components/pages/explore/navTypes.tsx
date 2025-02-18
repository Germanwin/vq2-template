import { Film, User, Users } from "lucide-react"
import Link from "next/link"

export const NavTypes = () => {
	return (
		<nav className="hidden md:flex items-center space-x-6 ml-6">
			<Link href="/" className="flex items-center space-x-2 text-pink-500">
				<Users className="h-4 w-4" />
				<span>Girls</span>
			</Link>
			<Link href="/" className="flex items-center space-x-2">
				<Film className="h-4 w-4" />
				<span>Anime</span>
			</Link>
			<Link href="/" className="flex items-center space-x-2">
				<User className="h-4 w-4" />
				<span>Guys</span>
			</Link>
		</nav>
	)
}
