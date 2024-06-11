import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="card">
      <img
        className="card-image"
        alt="pizza"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>Rating: {avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>Delivery in {sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
