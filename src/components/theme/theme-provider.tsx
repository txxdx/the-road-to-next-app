'use client';

import { ThemeProvider as BaseThemeProvider } from 'next-themes';

type ThemeProviderProps = {
	children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	console.log('ThemeProvider');

	return (<BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
		{children}
		</BaseThemeProvider>)
};

export { ThemeProvider };
