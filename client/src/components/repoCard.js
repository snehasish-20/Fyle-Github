import React from 'react'
import {Card} from 'react-bootstrap'

//Card component to display data about each repository
function RepoCard({repoInfo}) {
  return (
    <div id="repoCard">
    <Card id="card">
    <Card.Header as="h5">{repoInfo?.name}</Card.Header>
    <Card.Body>
      <Card.Title as="h6">{repoInfo?.full_name.substr(0,45)}...</Card.Title>
      <Card.Text>
      {repoInfo?.description?.substr(0,70)}...
      </Card.Text>
      <a href={repoInfo?.html_url} target="_blank" rel="noopener noreferrer">{repoInfo?.html_url.substr(0,45)}...</a>
    </Card.Body>
  </Card>
  </div>
  )
}

export default RepoCard