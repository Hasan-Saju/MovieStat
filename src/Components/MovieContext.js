import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
  const [store, setStore] = useState({
    detail: null,
    allMovieList: [],
  });
  const [searchString, setSearchString] = useState("");
  const [allMovieList, setAllMovieList] = useState([]);

  return (
    <MovieContext.Provider
      value={[
        store,
        setStore,
        searchString,
        setSearchString,
        allMovieList,
        setAllMovieList,
      ]}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
