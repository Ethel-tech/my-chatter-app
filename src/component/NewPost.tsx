import React from 'react'
import {PostForm} from './PostForm'
import { type } from 'os'
import { PostData, Tag } from '../App'

type NewPostProps ={
  onSubmit: (data: PostData) => void
  onAddTag:(tag: Tag) => void
  availableTags: Tag[]
}

export function NewPost({onSubmit, onAddTag, availableTags}: NewPostProps) {
  return (
    <>
    <div>NewPost</div>
    <PostForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  )
}
