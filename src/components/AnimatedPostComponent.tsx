'use client'
import React from 'react';
import PostComponent from "@/components/PostComponent";
import { Post } from "@/utils/interface";
import { motion } from 'framer-motion';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {posts?.length > 0 && posts?.map((post) => (
          <PostComponent key={post._id} post={post} />
        ))}
      </motion.div>
    </div>
  );
};

export default PostList;
