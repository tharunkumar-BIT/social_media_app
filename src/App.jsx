import {Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Post";
import PostLayout from "./PostLayout";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/posts";

function App() {

  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts');
        setPosts(response.data);
      }
      catch(err){
        if(err.response){
          console.log(err.response.data);     
          console.log(err.response.status);     
          console.log(err.response.headers);     
        }
        else{
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPosts();
  }, [])

  useEffect(()=>{
    const filteredResults = posts.filter((post)=> (
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.title).toLowerCase()).includes(search.toLowerCase)));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy PP');
    const newPost = { id, title: postTitle, datetime, body: postBody};
    try{
      const response = await api.post('/posts', newPost);
    const allPosts = [...posts, response.data];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
    }
    catch{
      if(err.response){
        console.log(err.response.data);     
        console.log(err.response.status);     
        console.log(err.response.headers);     
      }
      else{
        console.log(`Error: ${err.message}`);
      }
    }
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }


  return(
    <div className="App"> 
      <Header title="Social Media"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element = {<Home posts = {searchResults}/>}/>
        <Route path="post">
          <Route index element = {<NewPost 
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          />}/>
          <Route path=":id" element={<PostPage posts = {posts} handleDelete = {handleDelete}/>}/>
        </Route>
        <Route path="about" element = {<About />}/>
        <Route path="*" element = {<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
