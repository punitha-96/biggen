import React from "react";
import "./Header.css"; // Import CSS for styling

function Header() {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <div className="logo">
          <img src="pexels-magda-ehlers-pexels-1337388.jpg" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <button>
            <a href="#">SignIn</a>
          </button>
          <button>
            <a href="#">SignUp</a>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
