import React from 'react'
import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Post } from "../App"

type PostLayoutProps = {
  posts: Post[]
}

export function PostLayout({ posts }: PostLayoutProps) {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)

  if (post == null) return <Navigate to="/" replace />

  return <Outlet context={post} />
}

export function usePost() {
  return useOutletContext<Post>()
}