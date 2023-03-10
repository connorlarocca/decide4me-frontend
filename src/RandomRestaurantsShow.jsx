import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function RandomRestaurantsShow() {
  const [randomRestaurant, setRandomRestaurant] = useState([]);

  const handleShowRandomRestaurant = () => {
    console.log("handleShowRandomRestaurant");
    axios.get("http://localhost:3000/random.json").then((response) => {
      console.log(response.data);
      setRandomRestaurant(response.data);
    });
  };

  useEffect(handleShowRandomRestaurant, []);

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      <div>
        <h1>Restaurant Information</h1>
        <h2>{randomRestaurant.name}</h2>
        <p>Phone Number: {randomRestaurant.phone_number}</p>
        <p>Website: {randomRestaurant.website}</p>
        <img src={randomRestaurant.image_url} width="300px" height="auto" />
        <button type="submit">Add to Favorites</button>
        <li className="nav-item">
          <Link to="/">Return Home</Link>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center">
          Please log in to use the DECIDE4ME functionality!
        </h1>
        <li className="nav-item">
          <Link to="/">Return Home</Link>
        </li>
      </div>
    );
  }
}
