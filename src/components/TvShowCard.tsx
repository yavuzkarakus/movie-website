import { TvShow } from "../hooks/useTvShowList";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router";

interface ITvShowCardProps {
  tvShowResult: TvShow;
}

const TvShowCard: React.FC<ITvShowCardProps> = ({ tvShowResult }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="border-0"
      onClick={() => {
        navigate(`/player/tv/${tvShowResult.id}`);
      }}
    >
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h2 className="mt-3">
            {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
          </h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;
