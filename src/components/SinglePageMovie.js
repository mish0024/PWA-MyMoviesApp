import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
export default function SinglePageMovie({ movies }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <div className="d-flex justify-content-center">
              <Card.Img
                variant="top"
                style={{ height: "50vh", width: "40vw" }}
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              />
            </div>
            <Card.Body>
              <Card.Title>{movies.title}</Card.Title>
              <Card.Text>{movies.overview}</Card.Text>
              <Card.Text>Release Date: {movies.release_date}</Card.Text>
              <Card.Text>Runtime: {movies.runtime} minutes</Card.Text>
              <Card.Text>
                Genres: {movies.genres.map((genre) => genre.name).join(", ")}
              </Card.Text>
              <Card.Text>Tagline: {movies.tagline}</Card.Text>
              <Card.Text>
                Rating: {movies.vote_average} ({movies.vote_count} votes)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
