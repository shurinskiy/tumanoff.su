import type { Metadata } from "next";
import { magistral } from '@/fonts'

import Provider from './providers'
import TheSidebar from "@/components/TheSidebar";
import TheFooter from "@/components/TheFooter";
import "@/assets/globals.scss";

export const metadata: Metadata = {
	title: "Начало",
	description: "Дорогу осилит идущий",
	icons: {
		icon: '/images/favicon.ico',
	},
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
	return (
		<Provider>
			<html lang="en">
				<body className={magistral.className}>
					<TheSidebar/>
					<div className="main">{children}</div>
					<TheFooter/>
				</body>
			</html>
		</Provider>
	);
}