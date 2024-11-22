import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface MovieResult {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}

const useMovieList = () => {
  const [movieLists, setMovieLists] = useState<MovieResult[]>();

  const fetchMovieList = async () => {
    try {
      const res = await apiClient.get("/discover/movie");
      setMovieLists(res.data.results);
      //   console.log(res.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return { movieLists };
};

export default useMovieList;
