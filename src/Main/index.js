import React, { Component } from 'react'

export default class Main extends Component {
  state = {
    post: [
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
    this.state.name === 'Gideon'
      ? this.setState({ name: 'Not Gideon' })
      : this.setState({ name: 'Gideon' })
  }

  render() {
    const posts = this.state.post.map((post, index) => {
      return (
        <li >
          <h3>{post.title}</h3>
          <h6>By: {post.author}</h6>
          <p>{post.body}</p>
        </li>
      )
    })

    return (
      <>
        <header>
          <h1>Party Blog</h1>
        </header>
        <section>
          <ul>{posts}</ul>
        </section>
      </>
    )
  }
}
