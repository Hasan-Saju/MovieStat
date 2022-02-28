import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  //   const [search, setSearch] = useState();
  const [store, setStore, searchString, setSearchString] =
    useContext(MovieContext);
  let navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchString(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesubmit");
    console.log(searchString);
    // setSearchString(searchString);
    // setSearchString("");

    navigate("/searchedMovie");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='sidebar__searchContainer'>
          <input type='text' value={searchString} onChange={handleSearch} />

          <input className='submitButton' type='submit' value='Search' />
        </div>
      </form>
    </div>
  );
};

export default Form;
