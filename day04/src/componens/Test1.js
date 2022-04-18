import React, { useState } from 'react';

const Test1 = () => {
    const [userid , setUserid] = useState('')
    const [userpw , setUserpw] = useState('')

    const handleChange1  = (e)  => {
        setUserid( e.target.value )
    }
    const handleChange2  = (e)  => {
        const { value } = e.target 
        setUserpw( value )
    }

    return (
        <div>
            <input type="text" onChange={ handleChange1 } />
            <input type="text" onChange={ handleChange2 } />

            <button disabled={ userpw.length < 7}>확인</button>

            {/* {
                userpw.length > 6 ? <button>확인</button> : 
                <button disabled >확인</button>
            } */}
            
        </div>
    );
};

export default Test1;