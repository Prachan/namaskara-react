import React from 'react'
import { useState, useEffect} from "react";
import { data, useParams } from 'react-router';

const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=";

function RestaurantDetails() {
    const {resId} = useParams();
   const [allDetails, setAllDetails] = useState(null)


 useEffect(()=> {
    fetchRestro();
 },[]);

 const fetchRestro = async ()=> {
    console.log("Restro");
    const responsedata = await fetch(MENU_API+resId)
    const formatData = await responsedata.json();
    console.log("ResDataItems=", formatData)
    setAllDetails(formatData.data)
 }

 if(allDetails==null){
    return (
        <><h1>No Items</h1></>
    )
 }
 const { name, cuisines, costForTwoMessage } =
 allDetails?.cards[2]?.card?.card?.info;

 const { itemCards } =
 allDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

console.log(itemCards);
  return (
    <div>RestaurantDetails:
        <h4>{name} ---: {cuisines.join(",")} : {costForTwoMessage}</h4>
        <ul>
            {itemCards.map((item) => (
                <li>{item.card.info.category}</li>
            ))}
        </ul>
    </div>

  )
}

export default RestaurantDetails