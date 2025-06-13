import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AllProviders from 'components/AllProviders';

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
			<body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
				<AllProviders>
					{/* Simple, clean layout like the target */}
					<main className="max-w-2xl mx-auto px-6 py-12">{children}</main>
				</AllProviders>
			</body>
		</html>
	);
}