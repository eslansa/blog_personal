import Header from '@/components/Header'
import React from 'react'
import { client } from '../../../../../sanity/lib/client'
import { Post } from '@/utils/interface';
import PostComponent from '@/components/PostComponent';

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
  console.log(params, "params")
  return (
    <div>
      <Header title={`${params?.slug}`} tags />
      <div>
        {posts?.length > 0 && posts?.map((post) => 
        <PostComponent key={post?._id} post={post} />
        )}
      </div>
    </div>
  )
}

export default page
