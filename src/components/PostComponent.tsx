import Link from 'next/link'
import React from 'react'

interface Props {
    post: Post;
}

const PostComponent = ({ post} : Props) => {
  return (
    <div>
      <Link href={`/pos`}>

      </Link>
    </div>
  )
}

export default PostComponent
