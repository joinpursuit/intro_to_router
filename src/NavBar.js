import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  return(
    <>
      <nav>
        <Link to={"/about"}>About </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/pokemon"}>Pokemon </Link>
      </nav>
    </>
  )
}
