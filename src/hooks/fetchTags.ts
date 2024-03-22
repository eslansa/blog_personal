'use server'
import { client } from "../../sanity/lib/client";

export default async function getPostsByTag(tag:string) {
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
  
