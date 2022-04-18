import React, { useState } from 'react';
import Test12Ani from './Test12Ani';
import Test12Dis from './Test12Dis';
import Test12Name from './Test12Name';

const Test12 = () => {
    const [ name , setName ] = useState('아무개')
    const [ ani , setAni ] = useState('고양이')

    const onName = (e)  => {
        const { value } = e.target 
        setName( value )
    }
    const onAni = (e)  => {
        setAni( e.target.value )
    }

    return (
        <div>
            <Test12Name  name={name} onName={onName} />
            <hr/>
            <Test12Ani ani={ani} onAni={onAni} />
            <hr />
            <Test12Dis name={name} ani={ani} />
        </div>
    );
};

export default Test12;