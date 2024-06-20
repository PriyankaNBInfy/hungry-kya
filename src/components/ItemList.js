import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div className="border-b-2 flex justify-between py-4">
      <div className="mr-4">
        <p className="text-left  font-semibold">{item?.card?.info?.name}</p>
        <p className="text-sm font-bold text-slate-700">
          {"💲"}
          {item?.card?.info?.defaultPrice / 100 ||
            item?.card?.info?.price / 100}
        </p>
        {item?.card?.info?.ratings?.aggregatedRating?.rating && (
          <p className="text-xs font-semibold text-slate-700">
            {"⭐"} {item?.card?.info?.ratings?.aggregatedRating?.rating}
          </p>
        )}

        <p className="text-xs text-justify mt-2">
          {item?.card?.info?.description}
        </p>
      </div>
      <div>
        {item?.card?.info?.imageId && (
          <div className="w-32">
            <button
              onClick={() => handleAddItem(item)}
              className="absolute rounded bg-white text-slate-800 text-xs px-5 ml-8 mt-[75px] border font-semibold"
            >
              ADD
            </button>
            <img
              className="rounded-lg"
              src={IMAGE_URL + item?.card?.info?.imageId}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
