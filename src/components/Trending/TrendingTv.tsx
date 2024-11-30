import useTrendingList from "../../hooks/useTrending";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import TvShowCard from "../TvShowCard";

const TrendingTv = () => {
  const { trendingData } = useTrendingList("tv");
  const [expand, setExpand] = useState(false);

  return (
    <div className="p-3 mb-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h2 className="text-4xl font-semibold p-5 py-8">Trending Tv Shows</h2>
        <span className="text-4xl text-gray-500">
          <MdOutlineExpandMore />
        </span>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
        {expand &&
          trendingData?.map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowCard tvShowResult={tvshow} />
            </div>
          ))}
        {!expand &&
          trendingData?.slice(0, 10).map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowCard tvShowResult={tvshow} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingTv;
