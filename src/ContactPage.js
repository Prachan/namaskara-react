import { useContext } from "react";
import userDetails from "./utils/userDetails";


const ContactPage = () => {
    const data = useContext(userDetails);
    console.log(data)
    const {sname, setName} =data;
    return (
        <div>
            <h4>Please contact @pcs {data.name}</h4>
        </div>
    )
}

export default ContactPage;