import { useParams } from "react-router";

const Player = () => {
  const { type, playerId } = useParams();

  const isMovie = type === "movie";
  const isTvShow = type === "tv";

  const url = isMovie
    ? `https://vidsrc.xyz/embed/movie/${playerId}`
    : isTvShow
    ? `https://vidsrc.xyz/embed/tv/${playerId}`
    : null;

  if (!url) {
    return <div>Invalid content type specified.</div>;
  }

  return (
    <div>
      <iframe
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={url}
      ></iframe>
    </div>
  );
};

export default Player;
