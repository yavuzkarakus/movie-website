import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface IMovie {
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

const useTrendingList = (
  type: string
): {
  trendingData: IMovie[];
  setTrendingData: React.Dispatch<React.SetStateAction<IMovie[]>>;
} => {
  const [trendingData, setTrendingData] = useState<IMovie[]>([]);
  const fetchTrending = async () => {
    try {
      const res = await apiClient.get(`trending/${type}/day`);
      setTrendingData(res.data.results);
    } catch (error) {
      console.error("Error fetching trending list:", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [type]);

  return { trendingData, setTrendingData };
};

export default useTrendingList;
