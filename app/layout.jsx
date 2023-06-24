import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["300", "500"] })

export const metadata = {
	title: "‹Home›no⁞dis⚞MEOW⚟",
	charset: "utf-8",
	viewport: "width=device-width, initial-scale=1",
	colorScheme: "light dark",
	description:
		"Heed thy divine cautionary tail! For thy foo hath proven so eloquently bar",
}

export default function RootLayout({ children }) {
	return (
		<html id="__approot" className={inter.className} lang="en">
			<body>{children}</body>
		</html>
	)
}
