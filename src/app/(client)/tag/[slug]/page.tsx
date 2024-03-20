import Header from '@/components/Header'
import React from 'react'
import { client } from '../../../../../sanity/lib/client'
import { Post } from '@/utils/interface';
import PostComponent from '@/components/PostComponent';
import PostList from '@/components/AnimatedPostComponent';

async function getPostsByTag(tag:string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

interface Params {
  params: {
    slug: string;
  }
}

const page = async ({params}: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);

  return (
    <div>
      <Header title={`${params?.slug}`} tags />
      <div>
      <PostList posts={posts.map(post => ({ ...post, key: post._id }))} />
      </div>
    </div>
  )
}

export default page
