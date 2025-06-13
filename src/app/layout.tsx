import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AllProviders from 'components/AllProviders';
import ThemeToggle from 'components/ui/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gaurav Khatri | Project Manager',
	description: 'Portfolio site for Gaurav Khatri, a PM who bridges business and tech.',
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
	openGraph: {
		title: 'Gaurav Khatri | PM Portfolio',
		description: 'Explore projects, skills, and experience of Gaurav Khatri.',
		url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
		siteName: 'Gaurav Khatri Portfolio',
		images: [
			{
				url: '/assets/thumbnail/thumbnail.png',
				width: 800,
				height: 600,
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} bg-red-500 text-gray-900 dark:bg-black dark:text-gray-100`}>
				<AllProviders>
					<div className="p-4 flex justify-end">
						<ThemeToggle />
					</div>
					<main className="max-w-3xl mx-auto px-4 border border-red-500">{children}</main>
				</AllProviders>
			</body>
		</html>
	);
}
