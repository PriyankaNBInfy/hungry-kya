import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantDetail = () => {
  const { id } = useParams();

  const resDetails = useRestaurantData(id);

  if (!resDetails) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resDetails?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

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
