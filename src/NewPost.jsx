import React from 'react'

const NewPost = ({
  handleSubmit, postTitle, SetPostTitle, postBody, setPostBody
}) => {
  return (
    <main className='NewPost'>
        <h2>NewPost</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input  type="text" 
                  id="postTitle" 
                  required
                  value={postTitle}
                  placeholder='Title'
                  onChange={(e)=> SetPostTitle(e.target.value)}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea id="postBody"
                    required
                    value={postBody}
                    placeholder='Post'
                    onChange={(e)=>setPostBody(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost