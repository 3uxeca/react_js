import React, { useState } from 'react';
import Test9Sub from './Test9Sub';

const Test9 = () => {
    const  [ isShow  , setIsShow ] = useState( false )
    return (
        <div>
            <button onClick={ ()  => setIsShow( !isShow )}> 
                { isShow ? "숨기기" : "보이기"}
            </button>
            <hr />
            { isShow && <Test9Sub /> }
        </div>
    );
};

export default Test9;