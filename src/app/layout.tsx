import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ignite Tailwind",
	description: "Stunnint dashboard build with tailwind css",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="antialiased">
			<head>
				<link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
			</head>
			<body className={inter.className}>
				<div className="lg:grid min-h-screen lg:grid-cols-app">
					<Sidebar />
					<main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8 max-w-[100vw]">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
