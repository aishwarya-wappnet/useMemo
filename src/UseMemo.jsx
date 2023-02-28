import React, { useState, useRef, useMemo } from "react";

const UseMemo = () => {

    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setMyNum(myNum + 1);
    }

    const countNumber = (num) => {
        console.log(num);
        for(let i = 0; i <= 1000000000; i++) {} // causes delay
        return num;
    }

    const checkData = useMemo(() => {
        return countNumber(myNum);
    }, [myNum]);

    return (
        <>
        <h1>UseMemo</h1>
        <button onClick={ getValue } style={{ backgroundColor: "red" }}>Counter</button>
        <p>My new number: { checkData }</p>
        {/* There is a delay onClick of the below button because we have used state for the button and whenever the state is changed the component is re-rendered and countNumber is called*/}
        <button onClick={ () => setShow(!show) }>{ show ? "You clicked me" : "Click me plz" }</button>
        </>
    )
}

export default UseMemo;