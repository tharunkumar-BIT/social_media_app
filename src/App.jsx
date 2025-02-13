import {Link, Route, Routes } from "react-router-dom";
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
import { useState } from "react";

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Made a video about Tesla Q1 results"
    },
    {
      id: 2,
      title: "My 2nd post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "I attended a blockchain event"
    },
    {
      id: 3,
      title: "My 3rd post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "I am learning React"
    },
    {
      id: 4,
      title: "My 4th post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Going to sleep"
    }
  ])

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  return(
    <div className="App"> 
      <Header title="Social Media"/>
      <Nav search={search} setSearch={setSearch}/>
      <Home posts = {posts}/>
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App
