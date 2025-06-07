import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'The Road Next',
	description: 'My Road to Next application...',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider>
				<Header />
				<main
					className="
						py-24 px-8 min-h-screen flex-1 
						overflow-y-auto overflow-x-hidden 
						bg-secondary/20 flex flex-col
						"
				>
					{children}
				</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
