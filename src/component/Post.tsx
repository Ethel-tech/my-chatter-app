import React from "react"
import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { usePost } from "./PostLayout"
import ReactMarkdown from "react-markdown"

type PostProps = {
  onDelete: (id: string) => void
}

export function Post({ onDelete }: PostProps) {
  const post = usePost()
  const navigate = useNavigate()

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
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{post.markdown}</ReactMarkdown>
    </>
  )
}