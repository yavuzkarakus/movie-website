import { MovieResult } from "../hooks/useMovies";
import { Card, CardContent } from "./ui/card";

interface IMovieCardProps {
  movieResult: MovieResult;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movieResult }) => {
  return (
    <Card className="border-0">
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h2 className="mt-3">
            {movieResult.title ? movieResult.title : movieResult.name}
          </h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
