import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const {data} = await response.json();
    setMovie(JSON.stringify(data));
  };
  useEffect(() => {
    getMovie();
  }, [movie]);
  return <div>{movie}</div>;
}

export default Detail;
