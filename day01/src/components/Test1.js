import React from 'react';

const Test1 = () => {
    return (
           <>
            <h1>JSX영역</h1>
            <p>한줄이상일때 , div, section ,article 등묶어야한다 </p>
            <p>React.Fragment = 비어있는영역태그 : 그룹형 </p>
            <input />
            <img />
            <br />
            <hr />

            // 한줄주석 
            /*
              여러줄 주석       
            */ 
            {/* 주석 */}
            <p
                //한줄 주석 
                /*
                    여러줄 주석 
                */
            >
                안녕하세요 
            </p>
          </>
        
    );
};

export default Test1;