import React, { createContext, useState } from "react";

export const GenresContext = createContext<{
  genres: number | null;
  setGenres: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  genres: null,
  setGenres: () => {},
});

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState<number | null>(null);
  const value = { genres, setGenres };

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
};
