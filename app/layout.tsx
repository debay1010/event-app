import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppings = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppings",
});

export const metadata: Metadata = {
	title: "Event-Owambe",
	description: "Showcase your Events for All",
	icons: { icon: "/assets/images/logo.svg" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={poppings.variable}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
