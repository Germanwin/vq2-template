import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "AI Character Chat",
	description: "Chat with AI-generated characters",
	generator: "v0.dev",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-row w-full">
					<SideBar />
					<div className="w-full">{children}</div>
				</div>
			</body>
		</html>
	)
}

import "./globals.css"
import { SideBar } from "@/components/layout/side-bar"
