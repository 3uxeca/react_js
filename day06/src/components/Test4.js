import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test4 = () => {
    const ref1  = useRef()

    useEffect( ()  => {
        //ref1.current.focus()
    },[])

    useLayoutEffect( ()  => {
       ref1.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={ref1} />
        </div>
    );
};

export default Test4;