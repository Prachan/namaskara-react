import CardComponet from "./CardComponet";
import { useState, useEffect } from "react";
import { resList } from "./mockData";

const BodyComponent = () => {
  const [allRestaurants,setRestautrant] = useState(resList);
  const [filterRestaurants,searchRestautrant] = useState(resList);
  const [searchText, updateText] = useState('');

  // useEffect(()=> {

  // },[])
   return (
   <div className="body">
      <div className ="con">
        <div className="toprated">
          <button onClick={()=> {
            const filterdata = allRestaurants.filter((restaurant) => restaurant.data.avgRating > 4);
            searchRestautrant(filterdata);
          }}>Top Rated</button>
        </div>
        <div>
          <input type="text" value={searchText} onChange={(e)=> {
              updateText(e.target.value);
          }}></input>
          <button onClick={ ()=> {
            const filterData = allRestaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText));
            searchRestautrant(filterData);
          }}>Search</button>
        </div>
        <div>

        </div>
      
      </div>
      <div className="container">
         {  
            filterRestaurants.map((restaurant) => (
               <CardComponet restaurantList = {restaurant}
               key = {restaurant.data.id}/>
            ))
         }
      </div>
   </div>
   );
}

export default BodyComponent;