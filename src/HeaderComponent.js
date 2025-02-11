import { styleLogo } from "./constants";

const HeaderComponent = () => {
    return (
       <div className="header">
          <div className="foodApp">
             <img style={styleLogo}
             alt="Logo"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jwxmZBKwVFeeo6Zc7qpn62zWvPe08pUQFQ&s"/>
             <h3 style={{padding:"1rem"}}>Somato</h3>
          </div>
          <div className="options">
             <ul>
                <li>Home</li>
                <li>Delivery</li>
                <li>Profile</li>
                <li>Cart</li>
             </ul>
          </div>
       </div>
    )
 }
 export default HeaderComponent;