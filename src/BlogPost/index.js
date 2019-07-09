import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

function BlogPost({ title, author, body, index, handleDeletePost }) {
  return (
    <li>
      <h3>{title}</h3>
      <h5>By: {author}</h5>
      <h6>{body}</h6>
      <Button
        index={index}
        handleDeletePost={handleDeletePost}
        type={'Delete'}
      />
    </li>
  )
}

export default BlogPost

BlogPost.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  index: PropTypes.number,
  handleDeletePost: PropTypes.func
}
