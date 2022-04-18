import React from 'react';

const Test12Ani = ({ani, onAni}) => {
    return (
        <div>
            <h2>Ani 컴포넌트</h2>
            <label>동물:</label>
            <input type="text" value={ani} onChange={onAni} />
            <span style={{marginLeft:15}}>{ani}</span>
        </div>
    );
};

export default Test12Ani;