import { useState, useEffect } from "react";

const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=";


const useRestuarant = (resId) => {
 const [res,setAllDetails] = useState(null);
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
 return res;
}

export default useRestuarant;