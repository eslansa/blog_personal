import React from 'react'
import { Lilita_One } from 'next/font/google';
import ThemeSwitch from '../ui/ThemeSwitch';
import { BiSolidDetail } from 'react-icons/bi';
import NavMenu from './NavMenu';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import Toast from './Toast';

const font = Lilita_One({ weight: "400", subsets: ["latin"] });


export default async function Navbar() {
    const supabase = createServerComponentClient({ cookies });
    const session = await supabase.auth.getSession();

    return (
        <>
            <div className='mx-auto max-w-5xl px-6'>
                <div className='flex justify-between items-center h-16 w-full space-x-4'>
                    <a href='/' aria-label="Home">
                        <div className='group '>
                            <div className={`${font.className} text-4xl py-2`}>
                                <span className=' group-hover:text-red-500 dark:text-amber-50'>eslan</span>
                                <span className='text-red-500 group-hover:text-slate-800 group-hover:dark:text-amber-50'>sa</span>
                            </div>
                        </div>
                    </a>
                    <div className="py-2">
                        <ThemeSwitch />
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <div className={`${font.className} text-3xl dark:text-amber-50 py-2`}>
                            <a href='/blog' aria-label="Blog">
                                <span className='hover:text-red-500'>Blog</span>
                            </a>
                        </div>
                        <div className='py-2 hover:text-red-500'>
                            <a href='https://drive.google.com/file/d/1Vrleigq1aDQf9GG-_3zfHdXTf6_V8cdE/view' target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                                <BiSolidDetail size={29} />
                            </a>
                        </div>
                        <div className="md:flex justify-center items-center space-x-4">
                            <Toast />
                            <NavMenu session={session.data?.session} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
