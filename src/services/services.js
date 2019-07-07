const url = 'http://localhost:3001/api/posts'

module.exports = {
  index,
  create,
  deleteOne
}

function index() {
  return fetch(url).then(res => res.json())
}

function create(post) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(post)
  }
  return fetch(url, options).then(res => res.json())
}

function deleteOne(post) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(post)
  }
  return fetch(url, options).then(res => res.json())
}
