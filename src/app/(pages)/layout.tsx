import "@/assets/globals.scss";
import type { Metadata } from "next";
import { magistral } from '@/fonts'
import TheSidebar from "@/components/TheSidebar";
import TheFooter from "@/components/TheFooter";

export const metadata: Metadata = {
	title: "Начало",
	description: "Дорогу осилит идущий",
	icons: {
		icon: '/images/favicon.ico',
	},
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<body className={magistral.className}>
				<TheSidebar/>
				<div className="main">{children}</div>
				<TheFooter/>
			</body>
		</html>
	);
}