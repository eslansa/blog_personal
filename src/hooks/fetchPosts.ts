import { client } from "../../sanity/lib/client";

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