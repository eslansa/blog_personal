import PostList from "@/components/ui/AnimatedPostComponent";
import Header from "@/components/base/Header";
import getPosts from "@/hooks/fetchPosts";
import { Post } from "@/utils/types/interface";

export const runtime = 'edge'; // 'nodejs' (default) | 'edge'


export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <Header title="Artículos Recientes" tags />
      <PostList posts={posts.map(post => ({ ...post, key: post._id }))} />
    </div>
  );
}
