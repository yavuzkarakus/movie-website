import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Input } from "./ui/input";
import Genres from "./Genres";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img
        src={logo}
        alt="logo"
        className="md:h-14 sm:h-9 h-9 hover:opacity-80 cursor-pointer"
      />
      <div className="flex gap-3 items-center">
        <form action="">
          <Input
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
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
