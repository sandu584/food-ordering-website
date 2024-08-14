import React, { useEffect } from "react";
import CountRestaurant from "./CountRestaurant";
import Restaurant from "./Restaurant";
import {
  getRestaurants,
  sortByRatings,
  sortByReviews,
  toggleVegOnly,
} from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

const Home = () => {
  const dispatch = useDispatch();

  // 26 - 07 - 2024
  const {
    loading: reataurantsLoading,
    error: restaurantsError,
    restaurants,
    showVegOnly,
  } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleSortByReview = () => {
    dispatch(sortByReviews());
  };

  const handleSortByRating = () => {
    dispatch(sortByRatings());
  };

  const handleToggleVegOnly = () => {
    dispatch(toggleVegOnly());
  };

  return (
    <>
      <CountRestaurant />
      {/* if-else, for loops are not supported in React */}
      {/* if something written between tags in react then it is called as children */}
      {reataurantsLoading ? (
        <Loader />
      ) : restaurantsError ? (
        <Message varient="danger">{restaurantsError}</Message>
      ) : (
        <>
          <section>
            <div className="sort">
              <button className="sort_veg p-3" onClick={handleToggleVegOnly}>
                {showVegOnly ? "Show All" : "Pure Veg"}
              </button>
              <button className="sort_rev p-3" onClick={handleSortByReview}>
                Sort By Review
              </button>
              <button className="sort_rate p-3" onClick={handleSortByRating}>
                Sort By Rating
              </button>
            </div>
            <div className="row mt-4">
              {restaurants ? (
                restaurants.map((restaurant) =>
                  !showVegOnly || (showVegOnly && restaurant.isVeg) ? (
                    <Restaurant key={restaurant._id} restaurant={restaurant} />
                  ) : null
                )
              ) : (
                <Message varient="info">No Restaurant Found</Message>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
