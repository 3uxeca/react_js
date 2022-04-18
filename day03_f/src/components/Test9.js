import React, { useState } from 'react';

const Test9 = () => {
    const [ isChk , setIsChk ] = useState(true)

    const changeInput = (e)  => {
        const { checked  }  = e.target 
        setIsChk( checked )
    }
    return (
        <div style={{margin:20, border:'1px solid #999', padding:20 , color: isChk ? 'tomato':'' }}>
            <input type="checkbox" onChange={changeInput} checked={isChk} />
            오늘은 토요일 입니다.
        </div>
    );
};

export default Test9;