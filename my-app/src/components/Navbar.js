import React from "react"
import Logo from "../images/react-logo.png"
import "../style.css"

export default function Navbar(){
  return(
    <nav>
      <img src={Logo} tag="React Logo" alt="React Logo" className="nav--icon"></img>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}