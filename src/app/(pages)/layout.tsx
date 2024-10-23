import type { Metadata } from "next";
import { magistral } from '@/fonts'

import TheSidebar from "@/components/TheSidebar";
import TheCloud from '@/components/TheCloud';
import TheSearch from '@/components/TheSearch';
import TheFooter from "@/components/TheFooter";
import sidebarStyles from '@/components/TheSidebar/style.module.scss';
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
		<html lang="en">
			<body className={magistral.className}>
				<TheSidebar>
					<TheSearch cls={sidebarStyles.sidebar__search}/>
					<TheCloud cls={sidebarStyles.sidebar__cloud}/>
				</TheSidebar>
				<div className="main">{children}</div>
				<TheFooter/>
			</body>
		</html>
	);
}