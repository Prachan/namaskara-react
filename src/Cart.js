
import { useSelector } from "react-redux";
const Cart = () => {
    const selector = useSelector((store)=> store.cart.items);
    console.log("In cart Nav",selector)
    return (
        <div>Items:
            <div>
                { selector.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </div>
        </div>
    )
}

export default Cart;