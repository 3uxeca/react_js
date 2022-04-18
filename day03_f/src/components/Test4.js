import React from 'react';

const Test4 = () => {
    //event , evt , e 
    const test = ( e )  => {
        console.log(e.currentTarget)
        console.log(e.target)
        //currentTarget 이벤트대상
        //target 가리키는 대상 
    }

    return (
        <div>
            <button style={{padding:30}} onClick={test}>
                <span>확인</span>
                <b>클릭클릭</b>
            </button>
        </div>
    );
};

export default Test4;