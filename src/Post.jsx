import React from 'react'

const Post = ({post}) => {
  return (
    <article className='post'>
        <h2>{post.title}</h2>
        <p className='postTime'>{post.datetime}</p>
        <p className='postBody'>{
            (post.body).length <= 25 
            ? post.body
            : `${(post.body).slice(0,25)}...`
        }</p>
    </article>
  )
}

export default Post