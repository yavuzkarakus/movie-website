import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Input } from "./ui/input";
import Genres from "./Genres";
import React, { useContext } from "react";
import { SearchResultContext } from "../context/searchResult.context";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchText, setSearchText } = useContext(SearchResultContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchText(value);

    if (value.trim().length === 0) {
      navigate(`/movies`);
    } else {
      navigate(`/search/${e.target.value}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText.length === 0) {
      navigate(`/movies`);
    } else {
      navigate(`/search/${searchText}`);
    }
  };

  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img
        src={logo}
        alt="logo"
        className="md:h-14 sm:h-9 h-9 hover:opacity-80 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value={searchText}
            onChange={handleChange}
          />
        </form>
        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={"/movies"}>
              <h2>Movies</h2>
            </Link>
            <Link to={"/tvshows"}>
              <h2>TvShows</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
