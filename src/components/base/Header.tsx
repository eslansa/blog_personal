import Link from 'next/link'
import React from 'react'

interface Props {
    title: string,
    tags?: boolean
}

const Header = ({title = '', tags = false}: Props) => {
 return (
    <header className='py-14 px-4 mb-12 text-center border-b dark:border-red-900'>
        <h2 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>{title}</h2>
        {tags && (
           <Link href="/tag">
          <div className='text-xs mt-2 hover:text-red-500 border dark:border-gray-90 rounded-md px-2 py-1 shadow-sm max-w-xs mx-auto'>
           Temas
          </div>
          </Link>
        )}
    </header>
 )
}

export default Header
