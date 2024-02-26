import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function GlobalLayout({ children }) {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark p-3">
        <Container>
          <Navbar.Brand className="text-light" href="#">
            Movies hunter
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div>{children}</div>
    </div>
  );
}
