import React, { Component } from 'react'
import Form from '../Form'

export default class Main extends Component {
  state = {
    isPosting: true,
    posts: [
      {
        title: 'My Day',
        author: 'Gideon',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nisi repellat ipsa, cupiditate voluptate quae quam voluptatum dicta culpa qui reiciendis nostrum obcaecati mollitia similique fuga aliquid repellendus! Explicabo minima deleniti rem tenetur. Accusamus, perferendis tempore mollitia molestiae sit officiis praesentium facere at veniam tempora eaque hic! Cupiditate id illum quisquam, nobis quos dolorum esse recusandae ab voluptatum numquam impedit officiis distinctio nostrum. Quidem rerum et eligendi magni ad, minus laboriosam aspernatur sed earum laborum explicabo ducimus harum eveniet nisi soluta quis nam. Expedita quod quos modi commodi doloremque culpa, nesciunt in! Minus dolorem ducimus voluptatem recusandae quam excepturi ea?'
      },
      {
        title: 'My Day',
        author: 'Andrew',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nisi repellat ipsa, cupiditate voluptate quae quam voluptatum dicta culpa qui reiciendis nostrum obcaecati mollitia similique fuga aliquid repellendus! Explicabo minima deleniti rem tenetur. Accusamus, perferendis tempore mollitia molestiae sit officiis praesentium facere at veniam tempora eaque hic! Cupiditate id illum quisquam, nobis quos dolorum esse recusandae ab voluptatum numquam impedit officiis distinctio nostrum. Quidem rerum et eligendi magni ad, minus laboriosam aspernatur sed earum laborum explicabo ducimus harum eveniet nisi soluta quis nam. Expedita quod quos modi commodi doloremque culpa, nesciunt in! Minus dolorem ducimus voluptatem recusandae quam excepturi ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sapiente atque nostrum, officiis at possimus distinctio eaque esse ipsum aperiam pariatur maxime sequi optio voluptate quo, necessitatibus obcaecati nobis ducimus nemo sit in voluptatum est a.'
      }
    ]
  }
  handleClick = e => {
    this.setState({
      isPosting: !this.state.isPosting
    })
  }
  handleAddPost = ({ title, author, body }) => {
    this.setState({
      posts: [{ title, author, body }, ...this.state.posts]
    })
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

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <li key={index}>
          <h3>{post.title}</h3>
          <h5>By: {post.author}</h5>
          <h6>{post.body}</h6>
          <button
            onClick={() => {
              this.handleDeletePost(index)
            }}
          >
            Delete
          </button>
        </li>
      )
    })

    return (
      <>
        <header>
          <h1>Party Blog</h1>
        </header>
        <section>
          <button onClick={this.handleClick}>Toggle</button>
          {!!this.state.isPosting ? (
            <Form handleAddPost={this.handleAddPost} />
          ) : null}
          <ul>{posts}</ul>
        </section>
      </>
    )
  }
}
