import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./style.scss";
import { logout } from "../features/Session";
import { useDispatch } from "react-redux";
// import logo from "../images/logo.jpg";
import logo from '../images/gamer-logo.jpg';
import $ from "jquery";
export default function header() {
  $("#g").click(() => {
    alert("Clicked..");
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch=useDispatch();
  function Logout()
  {
    console.log("Logout Process...");
    document.getElementById('logout-btn').style.display="none";
        
        dispatch(logout({id:1,name:"Alien",password:"Alien",isLogin:0}));
  }
  function menu() {
    var x = document.getElementById("mobile-m");

    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("menu-icon").innerText = "menu";
    } else {
      x.style.display = "block";
      document.getElementById("menu-icon").innerText = "close";
    }
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="site logo" width="100px" height="70px" />
        </Link>
      </div>
      <nav className="site-navbar">
        <ul className="desktop-menu">
          <li id="g">
            <Link to="/games" className="hov">
              Games
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hov">
              Blogs
            </Link>
          </li>
          <li class="dropdown ">
            <Link to="/contact" class=" hov">
              Contact
            </Link>
            <ul class="dropdown-menu">
              <li>
                <Link to="/person">Gamers</Link>
              </li>
              <li>
                <Link to="/act2">action 2</Link>
              </li>
              <li>
                <Link to="/act3">action 3</Link>
              </li>
              <li>
                <Link to="/act4">action 4</Link>
              </li>
            </ul>
            
          </li>
          <li id="logout-btn">
              <Link className="hov" onClick={Logout}>
              <span class="material-symbols-outlined">
                logout
              </span>
                Log Out
              </Link>
            </li>
        </ul>
        <div className="menu-icon  hov" onClick={() => menu()}>
          <span class="material-symbols-outlined " id="menu-icon">
            menu
          </span>
        </div>
        <ul className="mobile-menu" id="mobile-m">
          <li>
            {" "}
            <Link to="/games" className="">
              Games
            </Link>
          </li>
          <li className="drop-btn">
            {" "}
            <Link to="/blogs" className="">
              Blogs
            </Link>
            <ul className="drop" style={{ flexDirection: "column" }}>
              <li>
                {" "}
                <Link to="/Link">Link</Link>
              </li>
            </ul>
          </li>
          <li className="drop-btn">
            {" "}
            <Link to="/contact" className="">
              Contact
            </Link>
            <ul className="drop" style={{ flexDirection: "column" }}>
              <li>
                {" "}
                <Link to="/person">Gamers</Link>
              </li>
              <li>
                {" "}
                <Link to="/action">Action</Link>
              </li>
              <li>
                {" "}
                <Link to="/action2">Action 2</Link>
              </li>
            </ul>
          </li>
          <li id="logout-btn">
              <Link className="hov" onClick={Logout}>
              <span class="material-symbols-outlined">
                logout
              </span>
                Log Out
              </Link>
            </li>
        </ul>
      
      </nav>
    </div>
  );
}
