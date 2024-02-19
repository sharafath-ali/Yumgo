import React, { useEffect , useState } from "react";
import "../Body.css";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";


function Body() {
  const [resCardData, setresCardData] = useState([])

  useEffect(() => {
    const fetch2 = async () => {
      const Data = (
        await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0153848&lng=76.3420206&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
      ).json();
    };
    
  }, []);
  
  if(!resCardData.length)
  {
    return <ShimmerUi/>
  }

  return (
    <div>
      <div className="Search">search</div>
      <div className="res-container">
        {[1, 2, 3, 5, 8, 6, 90, 88, 9].map(() => {
          return <RestaurantCard />;
        })}
      </div>
    </div>
  );
}

export default Body;
