import React from 'react'
import { useState, useEffect} from "react";
import { data, useParams } from 'react-router';
import useRestuarant from './utils/useRestuarant';


function RestaurantDetails() {
    const {resId} = useParams();
  // const [allDetails, setAllDetails] = useState(null)

    const allDetails = useRestuarant(resId);

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