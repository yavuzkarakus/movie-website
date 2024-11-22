import useMovieList from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movieLists } = useMovieList();
  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">Movies</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
        {movieLists?.map((movieList) => (
          <div key={movieList.id}>
            <MovieCard movieResult={movieList} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
