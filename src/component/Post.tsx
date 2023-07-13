import React, { useState, useEffect } from "react"
import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { usePost } from "./PostLayout"
import ReactMarkdown from "react-markdown"
import { ThumbUp } from "@mui/icons-material";
import './poststyles.css'


type PostProps = {
  onDelete: (id: string) => void
}


export function Post({  onDelete }: PostProps) {
  const post = usePost()
  const navigate = useNavigate()
  const key = 'like';
  const [like, setLike] = useState(() =>{
    const persistedLike = window.localStorage.getItem(key)
    return persistedLike !== null ? JSON.parse(persistedLike) : 0
  });
    const [isLiked, setIsLiked] = useState(false)

useEffect(() =>{
  window.localStorage.setItem(key, JSON.stringify(like))
}, [like])

    const likeHandler = () =>{
        setLike(isLiked ? like - 1: like + 1)
        setIsLiked(!isLiked)
    };
  

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{post.title}</h1>
          {post.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {post.tags.map(tag => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${post.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(post.id)
                navigate("/profile")
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to="/post-list">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown className="contentMarkdown">{post.markdown}</ReactMarkdown>
      <div className="likeDiv">
      <ThumbUp
    htmlColor="blue"
    className="likeIcon"
    onClick={likeHandler}
    />
    <span className="likespan">{like}</span>
    </div>
    </>
  )
}