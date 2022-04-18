import React from 'react';
import Test7Sub from './Test7Sub';

const Test7 = () => {
    return (
        <div>
            <Test7Sub 
                name="강호동"
                age = { 20 }
                addr = "서울"
                tel ="010-1111-2222"
                done = { true }
                color = "tomato"
                bgColor = "lime"
            />
            <hr/>
            <Test7Sub 
                name ="김철수"
                addr = "제주"
                color ="skyblue"
                bgColor="tomato"
            />
            <hr/>
            <Test7Sub bgColor="yellow" />
        </div>
    );
};

export default Test7;