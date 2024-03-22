'use server'
import { client } from "../../sanity/lib/client";

export default async function getPost(slug: string) {
    const query = `
    *[_type == "post" && slug.current == "${slug}"] [0] {
      title,
      slug,
      publishedAt,
      excerpt,
      _id,
      body,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    `;
  
    const post = await client.fetch(query)
    return post;
  }
  