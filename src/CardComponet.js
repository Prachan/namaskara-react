import { useContext } from "react";
import userDetails from "./utils/userDetails";

const CardComponet = (props) => {
    const {restaurantList} = props;
  //  console.log("restaurantList",restaurantList);
   const data = useContext(userDetails);
  // const {sname, setName} =data;
   console.log("In card", data)
    const {name,deliveryTime,costForTwo,cuisines,cloudinaryImageId,avgRating} = restaurantList.info;
    return (
       <div className="cardsContainer">
          <h4 class="textName">{name}</h4>
          <img className= "resImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"  + cloudinaryImageId}/>
          <h6 class="textName cusines">Cusines : {cuisines.join(",")}</h6>
          <h6 class="textName">Cost for 2: {costForTwo}</h6>
          <h6 class="textName">Rating:{avgRating} </h6>
          <h6 class="textName">Delivery Time:{deliveryTime} </h6>
          <h6 class="textName">User: {data.name}</h6>
       </div>
    )
 }

 export default CardComponet;