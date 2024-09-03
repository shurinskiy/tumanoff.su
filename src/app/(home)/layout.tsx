import "@/assets/globals.scss";
import type { Metadata } from "next";
import { magistral } from '@/fonts'
import TheSidebar from "@/components/TheSidebar";

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
			<body className={`${magistral.className} home`}>
				<TheSidebar home />
				{children}
			</body>
		</html>
	);
}