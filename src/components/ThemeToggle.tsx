'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="relative flex h-8 w-14 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            {/* The sliding circle */}
            <span
                className={`absolute left-1 top-1 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                    theme === 'dark' ? 'translate-x-6' : ''
                }`}
            />
            {/* Icons */}
            <FaSun
                className={`absolute left-2 top-1/2 -translate-y-1/2 transform text-yellow-500 transition-opacity duration-300 ${
                    theme === 'light' ? 'opacity-100' : 'opacity-40'
                }`}
                size={16}
            />
            <FaMoon
                className={`absolute right-2 top-1/2 -translate-y-1/2 transform text-indigo-500 transition-opacity duration-300 ${
                    theme === 'dark' ? 'opacity-100' : 'opacity-40'
                }`}
                size={16}
            />
        </button>
    );
};

export default ThemeToggle;
