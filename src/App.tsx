import React from "react";
import { useState, useEffect, useContext, useMemo } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import { AuthContext } from "./context/Authcontext";
import Login from "./pages/login/Login";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import ConfirmEmail from "./routes/ConfirmEmail";
import AuthUserActions from "./routes/AuthUserAction";
import AuthActions from "./component/AuthActions";
import "./App.css";
import { Container } from "react-bootstrap";
import {NewPost} from "./component/NewPost";
import useLocalStorage from "./useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import { PostList } from "./component/PostList";
import { EditPost } from "./component/EditPost";
import { Post } from "./component/Post";
import { PostLayout } from "./component/PostLayout";
import RequireAuth from "./component/Require-auth";

export type Post ={
  id: string
} & PostData

export type PostData ={
  title: string
  markdown: string
  tags:Tag[]
}

export type Tag = {
  id:string
  label: string
}

export type RawPost ={
  id: string
} & RawPostData

export type RawPostData ={
  title: string
  markdown: string
  tagIds:string[]
}

export default function App() {
  const [posts, setPosts] =useLocalStorage<RawPost[]>('POSTS',[])
  const [tags, setTags] =useLocalStorage<Tag[]>('TAGS',[])
  const { currentUser } = useContext(AuthContext);

  const postsWithTags = useMemo(() =>{
    return posts.map(post =>{
      return {...post, tags:tags.filter(tag => post.tagIds.includes(tag.id))}
    })
  }, [posts,tags])

  function onCreatePost({tags, ...data}: PostData){
    setPosts(prevPosts =>{
      return [...prevPosts, {...data, id: uuidV4(), tagIds:tags.map(tag => tag.id)},]
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function onUpdatePost(id: string, { tags, ...data }: PostData) {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === id) {
          return { ...post, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return post
        }
      })
    })
  }

  function onDeletePost(id: string) {
    setPosts(prevPosts => {
      return prevPosts.filter(post => post.id !== id)
    })
  }

   function updateTag(id: string, label: string) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag
        }
      })
    })
  }

  function deleteTag(id: string) {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })
  }

  const navigate = useNavigate();
  console.log("User:", !!currentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser]);
  return (
    <Container className="my-4">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>}
        /> */}
      <Route path="/postlist" element={currentUser ? <RequireAuth><PostList availableTags={tags} posts={postsWithTags}
      onUpdateTag={updateTag} onDeleteTag={deleteTag}
      /></RequireAuth> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
      <Route
        path="auth/action"
        element={
          <AuthActions>
            <AuthUserActions />
          </AuthActions>
        }
      />
      <Route path="/new" element={<NewPost onSubmit={onCreatePost} onAddTag={addTag} availableTags={tags}/>}/>
      <Route path="/:id" element={<PostLayout posts={postsWithTags}/>}>
      <Route index element={<Post onDelete={onDeletePost}/>}/>
        <Route path="edit" element={<EditPost onSubmit={onUpdatePost} onAddTag={addTag} availableTags={tags}/>}/>
      </Route>
      <Route path="*" element={<Navigate to ="/"/>}/>
    </Routes>
    </Container>
  );
}
