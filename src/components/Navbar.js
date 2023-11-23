import React from 'react';
import log from "../assets/log.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand fw-bold fst-italic text-warning mx-5" href="#">
            {/* <img src={log} alt="food" width="70" height="40" /> */}
            MyRestaurant
          </a>
        <div className="container-fluid ">
          <div className="collapse navbar-collapse fs-5" id="navbarText">
            <ul className="navbar-nav me-auto px-5 fw-semibold  mx-5 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Reviews
                </a>
              </li>
            </ul>
            <span className="navbar-text">
        <button class="btn btn-outline-warning fs-5 mx-2" type="submit">login in</button>
        <button class="btn btn-outline-warning fs-5 mx-2" type="submit">sign up</button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
