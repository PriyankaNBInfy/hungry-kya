import { useEffect, useState } from "react";
import { DETAILS_API } from "./constants";

const useRestaurantData = (id) => {
  const [resDetails, setResDetails] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(`${DETAILS_API}${id}`);
    const jsonData = await data.json();
    setResDetails(jsonData);
  };

  return resDetails;
};

export default useRestaurantData;
