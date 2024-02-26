import React, { useEffect, useState } from "react";
import { getMoviesBysearch } from "../../controller";
import CardComopnent from "../../components/card";
import { Container } from "react-bootstrap";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get("page");
  const query = queryParams.get("query");
  console.log(page);
  useEffect(() => {
    setLoading(true);
    getMoviesBysearch(page, query)
      .then(({ data }) => {
        setMovies(data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(movies);
  return (
    <>
      <div>
        <p style={{ fontSize: 25 }}>Search results: {query}</p>
        <a href="/">Home </a>
      </div>
      {loading ? (
        "loading.."
      ) : movies.length > 0 ? (
        <div>
          <Container fluid className="d-flex flex-wrap  justify-content-center">
            {movies.map((item) => (
              <CardComopnent item={item} />
            ))}
          </Container>
        </div>
      ) : (
        "No data"
      )}
    </>
  );
}
