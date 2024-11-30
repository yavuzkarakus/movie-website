import { Route, Routes } from "react-router";
import MovieList from "../components/MovieList";
import TvShowList from "../components/TvShowList";
import SearchList from "../components/SearchList";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/movies" element={<MovieList />} />
      <Route path="/tvshows" element={<TvShowList />} />
      <Route path="/search/:searchName/" element={<SearchList />} />
    </Routes>
  );
};

export default Allroutes;
