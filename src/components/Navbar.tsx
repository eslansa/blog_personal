import Link from 'next/link';
import React from 'react';

import { Lilita_One } from 'next/font/google';
import ThemeSwitch from './ThemeSwitch';

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
 return (
    <div className='mx-auto max-w-5xl px-6'>
        <div className='flex justify-between items-center h-16 w-full'>
            <Link href='/'>
                <div className={`${font.className} text-3xl dark:text-amber-50`}>
                    eslan 
                    <span className=' text-red-500'>sa</span>
                </div>
            </Link>
            <div className={`${font.className} text-3xl dark:text-amber-50`}>
               <Link href='/blog'> 
               <span className='text-red-500'>Blog</span>
               </Link>
            </div>
            <div className={`${font.className} text-3xl dark:text-amber-50`}>
               <Link href='/#'> 
               <span className='text-red-500'>CV</span>
               </Link>
            </div>
            <div>
                <ThemeSwitch />
            </div>
        </div>
    </div>
 )
}

export default Navbar;
