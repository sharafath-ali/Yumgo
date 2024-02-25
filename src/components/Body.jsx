import React, { useEffect, useState } from "react";
import "../Body.css";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";


function Body() {
  const [resCardData, setresCardData] = useState()
  const [filteredResCardData, setFilteredResCardData] = useState([])
  const [isLoading ,setLoading]= useState()

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    setLoading(true)
    const data = 
      await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0153848&lng=76.3420206&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
    let Data = await data.json();
    console.log()
    setresCardData(Data.data.cards[4].card.card.gridElements.infoWithStyle
      .
      restaurants);
    setLoading(false)
  };

  if (isLoading) {
    return <ShimmerUi />
  }

  return (
    <div>
      <div className="Search"><input ></input>search</div>
      <div className="res-container">
        {resCardData?.map((e) => {
          return <RestaurantCard e={e}/>;
        })}
      </div>
    </div>
  );
}

export default Body;
