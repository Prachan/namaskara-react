import { styleLogo } from "./constants";
import { Link } from "react-router";
import { useSelector } from "react-redux";


const HeaderComponent = () => {
   const selector = useSelector((store) => store.cart.items);
   console.log("selector==",selector)
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
                <li> <Link to="/contact"> Contact us </Link></li>
                <li><Link to="/home"> Home</Link></li>
                <li><Link to="/memo">Memo</Link></li>
                <li>Profile</li>
                <li><Link to="/cart">Cart - {selector.length}</Link></li>
             </ul>
          </div>
       </div>
    )
 }
 export default HeaderComponent;