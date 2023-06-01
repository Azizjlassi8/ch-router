import React from 'react'
import { Card, Button} from 'react-bootstrap'
import MovieRating from '../Rating/Rating'
import { Link } from 'react-router-dom'

const Moviecard = ({ movie }) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating isMovieRating={true} movieRating={movie.rate} />
        <br />
        <Link to={`/movie/${movie.id}`}>
            <Button>Description</Button>
        </Link>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard;
