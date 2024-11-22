import { Route, Routes } from "react-router";
import MovieList from "../components/MovieList";
import TvShowList from "../components/TvShowList";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/movies" element={<MovieList />} />
      <Route path="/tvshows" element={<TvShowList />} />
    </Routes>
  );
};

export default Allroutes;
