import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    // TODO: form goes here and we need the following inputs: title author body
    title: '',
    author: '',
    body: ''
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: [e.currentTarget.value]
    })
  }
  handleSubmit = e => {
    const { handleAddPost } = this.props
    e.preventDefault()
    handleAddPost(this.state)
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
          <input
            onChange={this.handleChange}
            name="title"
            type="text"
            value={this.state.title}
          />
        </div>

        <div>
          <label>Author</label>
          <input
            onChange={this.handleChange}
            name="author"
            type="text"
            value={this.state.author}
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            onChange={this.handleChange}
            name="body"
            value={this.state.post}
          />
        </div>
        <input name="" type="submit" />
      </form>
    )
  }
}
