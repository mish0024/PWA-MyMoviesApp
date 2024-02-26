import React, { useEffect, useState } from "react";
import { getMoviesByid } from "../../controller";

import { useParams } from "react-router-dom";
import SinglePageMovie from "../../components/SinglePageMovie";
export default function SingleMovie() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    setLoading(true);
    getMoviesByid(slug)
      .then(({ data }) => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    "Loading..."
  ) : movies ? (
    <SinglePageMovie movies={movies} />
  ) : (
    "No data found"
  );
}
