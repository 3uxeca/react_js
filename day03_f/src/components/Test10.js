import React, { useState } from 'react';

const Test10 = () => {
    const [ isChk , setIsChk ] = useState(false)
    const changeInput = (e)  => {
        const { checked } = e.target 
        setIsChk( checked )
    }

    return (
        <div>
            <input type="checkbox" onChange={ changeInput } checked={isChk} />
            
            {
                isChk ? '숨기기':'보이기'
            }
            
            {
                isChk === true ?  <div style={{width:200,height:100,background:'red',margin:10}}></div> : null 
            }
            <hr/>
            {
                isChk && <div style={{width:200,height:100,background:'red',margin:10}}></div>
            }
        </div>
    );
};

export default Test10;