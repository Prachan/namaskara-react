import { useState } from "react";

const Memo = () => {
    const [isEnabled, setToggle] = useState(false);
    const [num, setNum] = useState("");
    const [res, setRes] = useState("");

    //const res = nPrime(100);
    console.log("Num",num);

    const handleClick = (val) => {
        console.log("Clicked...", val);
        setToggle(!isEnabled);

    }
    function handleNumber (e) {
        const res = nPrime(e.target.value);
        console.log("res",res)

        setNum(e.target.value);
        setRes(res)
    }
    return (
        <div>
            <div className={isEnabled ?"containerMemo": "themechange"}> 
            <button onClick={()=> handleClick("India")}>Toogle</button>
                 <input type="number" value={num} onChange={(e)=> handleNumber(e)}></input>
                <h1>useMemo - {res}</h1>
            </div>
        </div>
    )
}


function nPrime(n) {
    let count = 0;
    let num = 2;

    while (count < n) {
        let isPrime = true;
        
        // Check if num is prime
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        // If num is prime, increment count
        if (isPrime) {
            count++;
        }

        // If count hasn't reached n, check the next number
        if (count < n) {
            num++;
        }
    }

    return num;
}

export default Memo;