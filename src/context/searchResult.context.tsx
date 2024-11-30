import { createContext, useState } from "react";

interface ISearchResultContextType {
  searchText: string;
  setSearchText: (value: string) => void;
  searchData: any;
  setSearchData: (data: any) => void;
}

export const SearchResultContext = createContext<ISearchResultContextType>({
  searchText: "",
  setSearchText: () => {},
  searchData: [],
  setSearchData: () => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState();

  const value = { searchText, searchData, setSearchText, setSearchData };

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};
