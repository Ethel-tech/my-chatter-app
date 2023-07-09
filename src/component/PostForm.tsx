import { type } from 'os';
import React from 'react'
import { useRef, FormEvent, useState } from "react";
import { Form, Stack,Row,Col, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import CreatableReactSelect from "react-select/creatable"
import { PostData, Tag } from '../App';
import { v4 as uuidV4 } from "uuid"

type PostFormProps ={
  onSubmit: (data: PostData) => void
  onAddTag:(tag: Tag) => void
  availableTags: Tag[]
} & Partial<PostData>

export function PostForm({onSubmit, onAddTag, availableTags, title="", markdown="", tags=[]}: PostFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectTags, setSelectTags] = useState<Tag[]>(tags)
  const navigate = useNavigate()
  
  function handleSubmit(e: FormEvent){
    e.preventDefault()
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectTags
    })
    navigate('..')
  }
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} required defaultValue={title}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='tags'>
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect 
                onCreateOption={label => {
                  const newTag = { id: uuidV4(), label }
                  onAddTag(newTag)
                  setSelectTags(prev => [...prev, newTag])
                }}
                value={selectTags.map(tag =>{
                  return {label: tag.label, value:tag.id}
                })}
                options={availableTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                onChange={tags =>{
                  setSelectTags(tags.map(tag =>{
                    return {label:tag.label, id: tag.value}
                  }))
                }}
                isMulti/>
              </Form.Group>
            </Col>
            </Row> 
            <Form.Group controlId='markdown'>
              <Form.Label>Body</Form.Label>
              <Form.Control defaultValue={markdown} ref={markdownRef} required as="textarea" rows={15}/>
            </Form.Group> 
            <Stack direction='horizontal' gap={3} className='justify-content-end'>
              <Button type='submit' variant='primary'>
                Save
              </Button>
              <Link to="..">
              <Button type='button' variant='outline-secondary'>
                Cancel
              </Button>
              </Link>
            </Stack>
        </Stack>
    </Form>
    
    </>
  )
}
