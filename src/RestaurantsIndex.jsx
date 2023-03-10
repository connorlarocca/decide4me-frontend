export function RestaurantsIndex(props) {
  console.log(props);
  return (
    <div id="restaurants-index">
      <h1 className="text-center">All Restaurants</h1>
      <div className="restaurants row">
        {props.restaurants.map((restaurant) => (
          <div className="col-4" key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <div>
              <img
                src={restaurant.image_url}
                className="card-img-top rounded mx-auto d-block"
                alt=""
              />
            </div>
            {/* <div className="d-grid gap-2 mx-auto"> */}
            <button
              className="btn btn-info"
              onClick={() => props.onSelectRestaurant(restaurant)}
            >
              MORE INFO
            </button>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}
