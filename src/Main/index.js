import React, { Component } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'
//import { index, create } from '../services/services'
export default class Main extends Component {
  state = {
    isPosting: false,
    posts: []
  }
  handleGet
  handleClick = e => {
    this.setState({
      isPosting: !this.state.isPosting
    })
  }

  // async handleAddPost(post) {
  //   await create({
  //     title: post.title[0],
  //     author: post.author[0],
  //     body: post.body[0]
  //   })
  // }

  handleDeletePost = postIdx => {
    // ! we cant mutate state directly
    // TODO: we need to remove the object from state
    // * Here we create a new array from filtering out the post in our state.posts array that matches the index of the post we clicked
    const newStateArray = this.state.posts.filter(
      (elem, idx) => idx !== postIdx
    )

    this.setState({ posts: newStateArray })
  }
  // handleClick = e => {
  //   this.state.name === 'Gideon'
  //     ? this.setState({ name: 'Not Gideon' })
  //     : this.setState({ name: 'Gideon' })
  // }

  // async handleGetPosts() {
  //   const posts = await index()
  //   this.setState({ posts })
  // }

  async componentDidMount() {
    
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <BlogPost
          handleDeletePost={this.handleDeletePost}
          {...post}
          key={post._id}
          index={index}
        />
      )
    })

    return (
      <>
        <header>
          <h1>Party Blog</h1>
        </header>
        <section>
          <Button handleClick={this.handleClick} type={'Toggle'} />
          {!!this.state.isPosting ? (
            <Form handleAddPost={this.handleAddPost} />
          ) : null}
          <ul>{posts}</ul>
        </section>
      </>
    )
  }
}
