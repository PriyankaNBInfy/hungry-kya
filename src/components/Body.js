import { useContext, useEffect, useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard, { withOffer } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CARDS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/ThemeContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { theme } = useContext(ThemeContext);
  const RestaurantCardWithOffer = withOffer(RestaurantCard);

  const getTopRatedRestaurants = () => {
    const filteredListValue = restaurantList.filter(
      (res) => res?.info.avgRating > 4.2
    );
    setFilteredList(filteredListValue);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARDS_API);

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

  return (
    <div className="pt-24 px-[5%]">
      {/* <div> */}
      <div className="flex flex-wrap justify-between p-4 pl-16 pr-20">
        <div className="flex">
          <input
            className="border border-solid"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            data-testid="searchInput"
          />
          <button
            className="px-4 bg-gray-300 rounded mr-8"
            onClick={searchRestaurants}
          >
            Search
          </button>
          <div>{theme}</div>
        </div>
        {/* <div className="search"> */}
        <button
          className="px-4 bg-gray-300 rounded"
          onClick={getTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
        {/* </div> */}
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredList?.length === 0 && <div>No Restaurants Found</div>}
        {filteredList?.map((res) => (
          <Link key={res?.info?.id} to={"/restaurant/" + res?.info?.id}>
            {res?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithOffer resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Body;
