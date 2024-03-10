import Link from 'next/link';
import React from 'react';

import { Lilita_One } from 'next/font/google';
import ThemeSwitch from './ThemeSwitch';
import { BiSolidDetail } from 'react-icons/bi';

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
    return (
        <div className='mx-auto max-w-5xl px-6'>
            <div className='flex justify-between items-center h-16 w-full space-x-4'>
                <Link href='/'>
                    <div className='group '>
                        <div className={`${font.className} text-4xl py-2`}>
                            <span className='text-black group-hover:text-red-500 dark:text-amber-50'>eslan</span>
                            <span className='text-red-500 group-hover:text-black group-hover:dark:text-amber-50'>sa</span>
                        </div>
                    </div>


                </Link>
                <div className="py-2">
                    <ThemeSwitch />
                </div>
                <div className='flex space-x-4 items-center'>
                    <div className={`${font.className} text-3xl dark:text-amber-50 py-2`}>
                        <Link href='/blog'>
                            <span className='hover:text-red-500'>Blog</span>
                        </Link>
                    </div>
                    <div className='py-2 hover:text-red-500'>
                        <a href='https://drive.google.com/file/d/1Vrleigq1aDQf9GG-_3zfHdXTf6_V8cdE/view' target="_blank" rel="noopener noreferrer">
                            <span className=''><BiSolidDetail size={29} /></span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;

