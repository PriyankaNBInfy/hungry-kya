import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
  const [resDetails, setResDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(`${DETAILS_API}${id}`);
    const jsonData = await data.json();
    setResDetails(jsonData);
  };

  if (!resDetails) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resDetails?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name} -{" "}
            {item?.card?.info?.defaultPrice || item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetail;
