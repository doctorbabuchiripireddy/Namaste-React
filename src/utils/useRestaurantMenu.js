import { useEffect, useState } from "react";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("http://10.0.0.105:8087/api/restaurant/" + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantmenu;
