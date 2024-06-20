import { IMAGE_URL } from "../utils/constants";

export const withOffer = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } =
      props?.resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute mt-44 pl-4 font-extrabold text-white">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="w-64 h-96 p-2 rounded-lg hover:p-3 bg-slate-300 m-2"
    >
      <img
        className="rounded-lg w-56 h-48"
        alt="food-image"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <div className="pl-4">
        <h4 className="font-bold">{name}</h4>
        <h5 className="font-semibold">{cuisines.join(", ")}</h5>
        <h5>Rating: {avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>Delivery in {sla?.slaString}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
