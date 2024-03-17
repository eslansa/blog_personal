import {client } from "@/../sanity/lib/client"
import Header from "@/components/Header";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/utils/interface";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

async function getPosts(){
  const query = `
*[_type == "post"] {
  title,
  slug,
  _createdAt,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
  }
} | order(_createdAt desc)
`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts()

  return (
    <div>
      <Header title="Artículos" tags />
      <div>
    {posts?.length > 0 && posts?.map((post) =>(
      <PostComponent key={post._id} post={post} />
    ))}
      </div>
    </div>
  );
}
