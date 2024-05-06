'use client'
import React from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch = () => {
 const { theme, setTheme } = useTheme();

 // Determine the accessible name based on the current theme
 const change_mode = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

 return (
    <div>
      <button
        className='rounded-2xl p-1'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={change_mode}
      >
        {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24}/>}
      </button>
    </div>
 );
};

export default ThemeSwitch;
