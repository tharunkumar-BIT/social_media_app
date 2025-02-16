import {Link, useParams} from "react-router-dom";
import React from 'react'

const PostPage = ({posts, handleDelete}) => {

  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() == id);
  return (
    <main className="PostPage">
        <article className="post">
          {post && 
            <>
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
              <p className="postBody">{post.body}</p>
              <Link to={`/edit/${post.id}`}><button >Edit Post</button></Link>
              <button onClick={()=>handleDelete(post.id)}>Delete post</button>
            </>
          }
          {!post && 
            <>
              <h2>Post Not found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to='/'>Visit our Homepage</Link>
              </p>
            </>
          }
        </article>
    </main>
  )
}

export default PostPage