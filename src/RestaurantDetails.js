import React from 'react'
import { useState, useEffect} from "react";
import { data, useParams } from 'react-router';
import useRestuarant from './utils/useRestuarant';
import { useDispatch } from 'react-redux';
//import {addItem} from "./utils/cart";
import { addItem, clearCart } from './utils/cart';


function RestaurantDetails() {
    const {resId} = useParams();
  // const [allDetails, setAllDetails] = useState(null)
    const dispatch = useDispatch();

    const allDetails = useRestuarant(resId);

    const handleAdd = (value)=> {
      console.log("Item===", value)
      dispatch(addItem(value));
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

//console.log(itemCards);
function handleClear() {
  dispatch(clearCart());
}

  return (
    <div>RestaurantDetails:
        <h4>{name} ---: {cuisines.join(",")} : {costForTwoMessage}</h4>
        <ul>
            {itemCards.map((item) => (
                <li>{item.card.info.category}
                <button onClick={()=> handleAdd(item.card.info.category)}>Add +</button>
                </li>

            ))}
        </ul>
        <h4>Clear Cart:
          <button onClick={handleClear}>Clear</button>
        </h4>
    </div>

  )
}

export default RestaurantDetails