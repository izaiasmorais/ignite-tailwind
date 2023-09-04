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
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
			</head>
			<body className={inter.className}>
				<div className="min-h-screen grid grid-cols-app">
					<Sidebar />
					<main className="px-4 pb-12 pt-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
