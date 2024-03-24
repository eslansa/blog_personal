import Header from '@/components/base/Header'
import React from 'react'
import { Post } from '@/utils/types/interface';
import PostList from '@/components/ui/AnimatedPostComponent';
import getPostsByTag from '@/hooks/fetchTags';


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
