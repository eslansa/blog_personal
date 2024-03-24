import { Post } from '@/utils/types/interface';
import { Lilita_One, VT323 } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaTag, FaBook, FaUser, FaTags, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa'; // Importa los iconos que necesites
import { FaPersonFalling } from 'react-icons/fa6';
import { GrPersonalComputer } from 'react-icons/gr';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

interface Props {
  post: Post;
}

const font = Lilita_One({ weight: "400", subsets: ["latin"] });
const dateFont = VT323({ weight: "400", subsets: ["latin"] });

const PostComponent = ({ post }: Props) => {
  const tagIcons: { [key: string]: JSX.Element } = {
    seo: <FaTags />,
    nextjs: <TbBrandNextjs />,
    react: <FaReact />,
    nodejs: <FaNodeJs />,
    javascript: <RiJavascriptFill />,
    css: <FaCss3Alt />,
    html: <FaHtml5 />,
    personal: <FaPersonFalling />,
    postgresql: <BiLogoPostgresql />,
    proyectos: <GrPersonalComputer />,
    };

  return (
    <div className="group mb-4 p-4 border border-gray-900 rounded-md shadow-sm shadow-red-950 hover:shadow-md hover:bg-red-500 hover:text-white hover:dark:bg-gray-950">
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${font.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
        <p className={`${dateFont.className} my-2 text-red-500 group-hover:text-white`}>{new Date(post?.publishedAt).toDateString()}</p>
        <p className='dark:text-gray-400 mb-4 line-clamp-2 '>{post?.excerpt}</p>
      </Link>

      {/* Tags */}
      <div>
        {post?.tags?.map((tag, index) => (
          <Link key={tag?._id} href={`/tag/${tag.slug.current}`} >
            <span key={tag?._id || index} className='inline-flex items-center p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 mt-2 text-red-500 group-hover:text-white px-2 py-1 shadow-sm max-w-xs mx-auto'>
              {tagIcons[tag?.name.toLowerCase()]} {/* Renderiza el icono según el nombre del tag */}
              <span className="ml-1">{tag?.name}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;
