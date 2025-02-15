import { useState, useMemo, useCallback, useRef } from "react";

const Memo = () => {
    const [isEnabled, setToggle] = useState(false);
    const [num, setNum] = useState("");
   const [res1, setRes] = useState(0);

    //const res = nPrime(num);
    //useMemo -caheces value and useCallback cacheds the funtion
    let x =0;
    const y = useRef(0);
    console.log(y);
   const res = useMemo(()=> nPrime(num),[num])
   // console.log("Result",res);

    const handleClick = () => {
        setToggle(!isEnabled);
        setRes(res1+1);
    }

    const handleNumber = useCallback((e)=> {
        setNum(e.target.value);
    },[num])
    return (
        <div>
            <div className={isEnabled ?"containerMemo": "themechange"}> 
            <button onClick={()=> handleClick("India")}>Toogle</button>
                 <input type="number" value={num} onChange={(e)=> handleNumber(e)}></input>
                <h1>useMemo - {res}</h1>
                
            </div>
            <div>
                <h3>useRef compare- 
                   <li> via state - {res1} </li> 
                   <button onClick={() =>
                    {
                        y.current = y.current+1;
                        console.log("val of y", y.current)
                    } 
                   }>Incrememt Ref</button>
                    <li>via ref - {y.current}</li>
                    <button onClick={()=> 
                        { 
                            x = x+1;
                            console.log("Value of x",x)}
                        }>Increment Normal</button>
                    <li>Normal: {x}</li>
                    </h3>
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