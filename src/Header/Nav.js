import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

function Nav() {

  let activeStyle = {
    textDecoration: "underline",
    fontSize:"19px",
    color:"gold",
    fontWeight:"800" 
  };


  return (
    <div class="navmain">

<NavLink to="/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Home</p></NavLink>
        
        <NavLink to="Menu/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Menu</p></NavLink>

        <NavLink to="About/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> About</p></NavLink>

        <NavLink to="Contact/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text">Contact</p></NavLink>
      
    </div>
  )
}

export default Nav
