import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: 'First Post', content: 'This is the first blog post.' },
        { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
        { id: 3, title: 'Third Post', content: 'This is the third blog post.' }
      ]
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Blog;
