import React, { useState } from 'react'
import generateBackground from '../../../utils/backgroundGenerator'

const Post = ({post, isDetail}) => {
  const [background, setBackground] = useState(generateBackground());

  const formatDateTime = (datetime) => {
    let time = new Date(datetime);
    return time.toLocaleString();
  };

  return (
    <div className="card">
      {
        isDetail
        ? <h2 className="title">{post.title}</h2>
        : <a className="title" href={`/posts/${post.id}`}>{post.title}</a>
      }
      <h5>{formatDateTime(post.created_at)}</h5>
      <div className="fakeimg" style={background}></div>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;
