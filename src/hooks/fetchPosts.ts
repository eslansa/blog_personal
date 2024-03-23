'use server'
import { client } from "../../sanity/lib/client";

export default async function getPosts(){
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
  } | order(_createdAt desc) [0...5]
  `;
  
    const data = await client.fetch(query);
    return data;
  }