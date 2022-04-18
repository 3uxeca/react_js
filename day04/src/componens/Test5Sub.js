import React from 'react';

const Test5Sub = ({ onDel , onAdd , onMod }) => {
    return (
        <div>
            <p>
                <button onClick={() => onDel(3) }>삭제</button>
                <button onClick={() => onAdd('유재석') }>추가</button>
                <button onClick={() => onMod(5) }>수정</button>
            </p>
        </div>
    );
};

export default Test5Sub;