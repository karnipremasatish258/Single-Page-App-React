import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import img1 from "../assets/logo.png";

export const Header = () => {
  return (
    <nav>
      {/* <img src={img1} alt="" /> */}
      <h1>TechyStar</h1>
      <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>   
      </main>
    </nav>
  )
}
