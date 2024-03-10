import { Post } from '@/utils/interface';
import { Lilita_One, VT323 } from 'next/font/google';
import Link from 'next/link'
import React from 'react'

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] })
const dateFont = VT323({ weight: "400", subsets: ["latin"] })

const PostComponent = ({ post }: Props) => {
  return (
    <div className=" mb-4 p-4 border border-gray-900 rounded-md shadow-sm shadow-red-950 hover:shadow-md hover:bg-red-500 hover:text-white hover:dark:bg-gray-950">
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${font.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
        <p className={`${dateFont.className} my-2 text-red-800`}>{new Date(post?.publishedAt).toDateString()}</p>
        <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
      </Link>

      {/* Tags */}

      <div>
        {post?.tags?.map((tag, index) => (
          <span key={tag?._id || index} className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 mt-2 hover:text-red-500 dark:border-gray-90 px-2 py-1 shadow-sm max-w-xs mx-auto'>
            {tag?.name}
          </span>
        ))}
      </div>


    </div>
  )
}

export default PostComponent
