import React, { useState } from 'react';
import './Test2.css'

const Test2 = () => {
    const [ isClass , setIsClass ] = useState( false )

    const onAdd = ()  => {
        setIsClass( true )
    }
    const onRemove = ()  => {
        setIsClass( false )
    }
    const onToggle = ()  => {
        setIsClass( !isClass )
    }
    
    return (
        <div className="wrap">
            <p className="test on">오늘은 토요일입니다.</p>
            <p className="on">오늘은 토요일입니다.</p>
            <p className="on1">오늘은 토요일입니다.</p>
            <hr/>
            <h2>사용자가 만들기</h2>
            <p className={`test ${isClass ? 'on':''}`}>오늘은 토요일입니다.</p>
            <p className={isClass === true ? 'on':''}>오늘은 토요일입니다.</p>
            <p className={isClass ? 'on1':''}>오늘은 토요일입니다.</p>
            <div>
                <button onClick={onAdd}>addClass</button>
                <button onClick={onRemove}>removeClass</button>
                <button onClick={onToggle}>toggleClass</button>
            </div>
        </div>
    );
};

export default Test2;