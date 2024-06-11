import { useEffect, useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const getTopRatedRestaurants = () => {
    const filteredList = restaurantList.filter(
      (res) => res?.info.avgRating > 4.2
    );
    setFilteredList(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const searchRestaurants = () => {
    const filteredRestaurants = restaurantList.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredRestaurants);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <div className="filter">
          <div>
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button onClick={searchRestaurants}>Search</button>
          </div>
          <button onClick={getTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredList.length === 0 && <div>No Restaurants Found</div>}
          {filteredList.map((res) => (
            <RestaurantCard resData={res} key={res?.info?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
