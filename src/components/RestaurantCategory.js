import { useState } from "react";
import { IMAGE_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({ info, showItems, setShowIndex }) => {
  const toggleItems = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 m-auto">
      <div
        className="flex justify-between  bg-slate-100 shadow-lg rounded p-4"
        onClick={toggleItems}
      >
        <span className="font-semibold"> {info?.title}</span>
        <span>{"⬇️"}</span>
      </div>
      {showItems && (
        <div className="p-4 text-left">
          {info?.itemCards.map((item) => (
            <ItemList key={item?.card?.info?.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
