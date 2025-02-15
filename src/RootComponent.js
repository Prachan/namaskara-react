import HeaderComponent from './HeaderComponent';
import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import userDetails from './utils/userDetails';
import appStore from './utils/appStore';

const RootComponent = () => {
      const [uName,setName]= useState("");
      useEffect(()=> {
            setName("Thalapathi")
      },[]);
      return (
            
            <div className="app">
                  <Provider store={appStore}>
                  <userDetails.Provider value = {{name: uName, setName}}>
                        <HeaderComponent />
                        <Outlet/>
                  </userDetails.Provider>
                  </Provider>
            </div>
         );
}
 
 export default RootComponent;