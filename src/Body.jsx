import React from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";

function Body() {
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
