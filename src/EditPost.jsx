import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle}) => {
  const {id} =useParams();
  const post = posts.find(post => (post.id).toString() === id);

  useEffect(()=> {
    if(post){
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [post, setEditBody, setEditTitle])

  return (
    <main className='NewPost'>
      {editTitle && 
        <>
          <h2>Edit post</h2>
          <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input  type="text" 
                    id="postTitle"
                    required
                    value={editTitle}
                    onChange={(e)=> setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea id="postBody"
                      required
                      value={editBody}
                      onChange={(e)=> setEditBody(e.target.value)}
            />
            <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }
      {!editTitle &&
        <>
          <h2>Post Not found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to='/'>HomePage</Link>
          </p>
        </>
      }
    </main>
  )
}

export default EditPost