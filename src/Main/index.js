import React, { Component } from 'react'
import Form from '../Form'
import BlogPost from '../BlogPost'
import Button from '../Button'

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

  handleAddPost = ({ title, author, body }) => {
    console.log(title, author, body)
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title, author, body })
    }

    async function createPost() {
      try {
        const sendPost = await fetch('http://localhost:8000/api/posts', options)
        const postResult = await sendPost.json()
        return await postResult
      } catch (error) {
        console.log('line 31', error)
      }
    }

    createPost().then(result =>
      this.setState({
        posts: [{ result }, ...this.state.posts]
      })
    )
  }

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

  componentDidMount() {
    getPosts().then(results => this.setState({ posts: results }))
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

async function getPosts() {
  try {
    const fetchPosts = await fetch('http://localhost:8000/api/posts')
    const data = fetchPosts.json()
    return await data
  } catch (error) {
    console.log('line 80', error)
  }
}
