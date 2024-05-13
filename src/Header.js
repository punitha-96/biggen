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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <button>
              <a href="/signin">SignIn</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/signup">SignUp</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
