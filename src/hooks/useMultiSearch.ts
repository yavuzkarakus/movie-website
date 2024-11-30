import { useContext, useEffect } from "react";
import apiClient from "../services/api-client";
import { SearchResultContext } from "../context/searchResult.context";

const useMultiSearch = (input: String) => {
  const { setSearchData } = useContext(SearchResultContext);
  const fetchSearch = async () => {
    try {
      const res = await apiClient.get("/search/multi", {
        params: {
          query: input,
        },
      });
      if (setSearchData) {
        setSearchData(res.data.results);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  useEffect(() => {
    fetchSearch();
  }, [input]);
};

export default useMultiSearch;
