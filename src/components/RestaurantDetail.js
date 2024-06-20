import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurantData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetail = () => {
  const { id } = useParams();

  const resDetails = useRestaurantData(id);
  const [showIndex, setShowIndex] = useState();

  if (!resDetails) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resDetails?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    resDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const cards = itemCards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="pt-24 text-center m-auto">
      <h1 className="font-extrabold">{name}</h1>
      <p className="font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {cards.map((item, index) => (
          <RestaurantCategory
            key={item?.card?.card?.title}
            info={item?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
