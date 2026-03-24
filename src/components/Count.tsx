import { useState } from "react";


   type CountProps = {
    number: number
}



export default function Count (props: CountProps) {
    const [count, setCount] = useState<number>(props.number); 

    const increaseCount = () => {
        setCount(prev => prev +1);
    };
    const decreaseCount = () => {
        setCount(prev => prev -1);
    };

    return (
        <>
        
        <p>{count}</p>
        <button onClick={increaseCount}>increase count</button>
        <button onClick={decreaseCount}>decrease count</button>

        </>
    )
}