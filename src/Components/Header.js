import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./welcome.css";
const Header = () => {
  return (
    <div>
      <div className='navbar'>
        <a className='navli' href='/'>
          MovieStat
        </a>
        <a className='navli' href='/sortByRatings'>
          Sort Movies
        </a>
      </div>
    </div>
  );
};

export default Header;
