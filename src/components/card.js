import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function CardComopnent({ item }) {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img
        variant="top"
        style={{ height: "50vh" }}
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>

        <a variant="primary" href={`/result/${item?.id}`}>
          View more
        </a>
      </Card.Body>
    </Card>
  );
}
