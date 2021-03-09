import React, { useState } from 'react'
import generateBackground from '../../../utils/backgroundGenerator'

const Post = ({post}) => {
  const [background, setBackground] = useState(generateBackground());

  const formatDateTime = (datetime) => {
    let time = new Date(datetime);
    return time.toLocaleString();
  };

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <h5>{formatDateTime(post.created_at)}</h5>
      <div className="fakeimg" style={background}></div>
      <p>{post.content}</p>
    </div>
  )
}

export default Post;
