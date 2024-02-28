import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="p-5">
      <Container>
        <Form.Label htmlFor="inputPassword5">Search for movies</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          value={search}
          aria-describedby="passwordHelpBlock"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log("asfa", e.target.value);
          }}
        />
        {search.length > 0 ? (
          <a
            className="mt-5 bg-primary text-light rounded text-decoration-none"
            href={"/result?page=1&query=" + search}
          >
            Search
          </a>
        ) : (
          <Button className="py-2 mt-2">Search</Button>
        )}
      </Container>
    </div>
  );
}
