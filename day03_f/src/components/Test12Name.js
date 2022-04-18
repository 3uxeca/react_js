import React from 'react';

const Test12Name = ({name, onName }) => {
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름:</label>
            <input type="text" value={name} onChange={onName}  />
            <span style={{marginLeft:15}}>{name}</span>
        </div>
    );
};

export default Test12Name;