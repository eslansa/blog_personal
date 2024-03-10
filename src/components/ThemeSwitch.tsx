'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa';
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
    <button className=' rounded-2xl p-1 hover:bg-red-400 ' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24}/>}
    </button>
    </div>
  )
}

export default ThemeSwitch
