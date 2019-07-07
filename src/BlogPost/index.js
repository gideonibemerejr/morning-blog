import React from 'react'
import Button from '../Button'

function BlogPost({ title, author, body, index, handleDeletePost }) {
  return (
    <li>
      <h3>{title}</h3>
      <h5>By: {author}</h5>
      <h6>{body}</h6>
      <Button
        type={'Delete'}
        index={index}
        handleDeletePost={handleDeletePost}
      />
    </li>
  )
}

export default BlogPost
