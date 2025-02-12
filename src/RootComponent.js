import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import { Outlet } from 'react-router';

const RootComponent = () => (
    <div className="app">
          <HeaderComponent />
          <Outlet/>
    </div>
 )
 
 export default RootComponent;