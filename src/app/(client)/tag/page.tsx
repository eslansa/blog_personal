import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { Tag } from '@/utils/interface';
import Header from '@/components/Header';
import Link from 'next/link';

async function getAllTags() {
    const query = `
    *[_type == "tag"] {
        name,
        slug,
        _id,
    }
    `;
    const tags = client.fetch(query);
    return tags;
}

export const revalidate = 60;
const page = async () => {
  const tags: Tag[] = await getAllTags()
  console.log(tags, "tags")

  return (
    <div>
       <Header title="Tags" />
       <div>
        {tags?.length > 0 && tags?.map((tag) => {
          <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
            <div>
              {tag.name}
            </div>
          </Link>
        })}
       </div>
    </div>
  )
}

export default page
