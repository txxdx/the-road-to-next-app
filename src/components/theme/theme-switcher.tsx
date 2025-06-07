'use client';

import { LucideMoon, LucideSun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export const ThemeSwitcher = () => {
	const { setTheme, theme } = useTheme();

	return (
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark')}
      >
        <LucideSun 
          className="
            w-4 h-4 rotate-0 scale-100 transition-all 
            dark:-rotate-90 dark:scale-0" />
        <LucideMoon 
          className="
            absolute w-4 h-4 rotate-90 scale-0 transition-transform
            dark:rotate-0 dark:scale-100" />

        <span className="sr-only">Toggle theme</span>
      </Button>
	)
}