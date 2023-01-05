import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink.jsx";

export function Header() {
  const [isUserSignupVisible, setIsUserSignupVisible] = useState(false);
  const [isUserLoginVisible, setIsUserLoginVisible] = useState(false);
  const [isRestaurantSignupVisible, setIsRestaurantSignupVisible] =
    useState(false);
  const [isRestaurantLoginVisible, setIsRestaurantLoginVisible] =
    useState(false);

  const handleUserSignupShow = () => {
    setIsUserSignupVisible = true;
  };

  const handleUserLoginShow = () => {
    setIsUserLoginVisible = true;
  };

  const handleRestaurantSignupShow = () => {
    setIsRestaurantSignupVisible = true;
  };

  const handleRestaurantLoginShow = () => {
    setIsRestaurantLoginVisible = true;
  };

  const generateRandomId = () => {
    const randomId = Math.floor(Math.random() * restaurants.length);
    setRandomId(randomId);
    const newLink = `http://localhost:3000/restaurants/${randomId}`;
  };
  // const handleLogout = () => {
  //   event.preventDefault();
  //   delete axios.defaults.headers.common["Authorization"];
  //   localStorage.removeItem("jwt");
  //   window.location.href = "/";
  // };

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-primary bg-info">
          <a class="navbar-brand" href="#">
            DECIDE4ME
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              |
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              |
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <a onClick={handleUserSignupShow} href="/user_signup">
                      Signup
                    </a>
                  </li>
                  |
                  <li className="nav-item">
                    <a onClick={handleUserLoginShow} href="/user_login">
                      Login
                    </a>
                  </li>
                  {/* |
                  <li className="nav-item">
                    <a
                      onClick={handleRestaurantSignupShow}
                      href="/restaurant_login"
                    >
                      Restaurant Portal
                    </a>
                  </li> */}
                  {/* |
                  <li className="nav-item">
                    <a
                      onClick={handleRestaurantLoginShow}
                      href="/restaurant_login"
                    >
                      Restaurant Login
                    </a>
                  </li> */}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}