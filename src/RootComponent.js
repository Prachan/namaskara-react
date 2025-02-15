import HeaderComponent from './HeaderComponent';
import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import userDetails from './utils/userDetails';

const RootComponent = () => {
      const [uName,setName]= useState("");
      useEffect(()=> {
            setName("Thalapathi")
      },[]);
      return (
            
            <div className="app">
                  <userDetails.Provider value = {{name: uName, setName}}>
                        <HeaderComponent />
                        <Outlet/>
                  </userDetails.Provider>
            </div>
         );
}
 
 export default RootComponent;