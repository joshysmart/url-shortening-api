import React, { Component } from "react";

class Header extends Component {
 constructor() {
  super()
  this.handleClick = this.handleClick.bind(this)
 }

 handleClick() {
  const nav = document.querySelector('nav');
  nav.classList.toggle("nav-open")
  console.log(nav)
 }

 render() {
  return (
   <header className="header">
    <div className="logo"><img src="./images/logo.svg" alt="" /></div>
    <div className="menu" onClick={this.handleClick}><div className="burger"></div></div>

    <nav className="nav">
     <ul>
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#resources">Resources</a></li>
     </ul>
     <div className="account">
      <button className="log-in">Login</button>
      <button className="sign-up">Sign Up</button>
     </div>
    </nav>
   </header>
  )
 }
}

export default Header;