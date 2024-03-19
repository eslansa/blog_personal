import { client } from "@/../sanity/lib/client";
import PostList from "@/components/AnimatedPostComponent";
import { Post } from "@/utils/interface";

export const runtime = 'edge'; // 'nodejs' (default) | 'edge'

async function getPosts() {
  const query = `
    *[_type == "post"] {
      _id, // Add the _id field to uniquely identify each post
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
  const posts: Post[] = await getPosts();

  return (
    <div>
      <PostList posts={posts.map(post => ({ ...post, key: post._id }))} />
    </div>
  );
}
