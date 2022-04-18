import React from 'react';
// import 참조변수 from 'src에 있는경우 이미지경로'
import m0 from '../assets/img/m0.jpg'
import m1 from '../assets/img/m1.jpg'

const Test3 = () => {
    return (
        <div>
            <img src={m0} />
            <img src={m1} />
            <hr />
            {/* public - index.html 바라보기 */}
            <img src="./images/cat0.jpg" alt="" />
            <img src="./images/cat1.jpg" alt="" />
        </div>
    );
};

export default Test3;