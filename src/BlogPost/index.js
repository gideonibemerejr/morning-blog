import React from 'react'

function BlogPost({ title, author, body, index, handleDeletePost }) {
  return (
    <li>
      <h3>{title}</h3>
      <h5>By: {author}</h5>
      <h6>{body}</h6>
      <button
        onClick={() => {
          handleDeletePost(index)
        }}
      >
        Delete
      </button>
    </li>
  )
}

export default BlogPost
