import CardComponet from "./CardComponet";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const BodyComponent = () => {
  const [allRestaurants,setRestautrant] = useState([]);
  const [filterRestaurants,searchRestautrant] = useState([]);
  const [searchText, updateText] = useState('');

  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const resJson = await response.json();
      console.log("Data===", resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const allRes = resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestautrant(allRes);
      searchRestautrant(allRes);
  }

  if(allRestaurants.length === 0) {
    return (
      <div>
        <h4>No data</h4>
      </div>
    )
  }

   return (
   <div className="body">
      <div className ="con">
        <div className="toprated">
          <button onClick={()=> {
            const filterdata = allRestaurants.filter((restaurant) => restaurant.info.avgRating > 4);
            searchRestautrant(filterdata);
          }}>Top Rated</button>
        </div>
        <div>
          <input type="text" value={searchText} onChange={(e)=> {
              updateText(e.target.value);
          }}></input>
          <button onClick={ ()=> {
            const filterData = allRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText));
            searchRestautrant(filterData);
          }}>Search</button>
        </div>
        <div>

        </div>
      
      </div>
      <div className="container">
         {  
            filterRestaurants.map((restaurant) => (
               <Link to={"/rest/" + restaurant.info.id}  key = {restaurant.info.id}> <CardComponet restaurantList = {restaurant}
              /></Link>
            ))
         }
      </div>
   </div>
   );
}

export default BodyComponent;