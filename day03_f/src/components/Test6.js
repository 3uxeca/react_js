import React, { useRef } from 'react';

const Test6 = () => {
    const idRef = useRef(null)
    const pwRef = useRef(null)

    const onData = ()  => {
        const data = {
            id: idRef.current.value , 
            pw: pwRef.current.value , 
        }
        console.log( data )
    }

    return (
        <div>
            {/* 수업용 */}
            <button onClick={ onData }>확인</button>
            <p>
                <input type="text" ref={idRef} />
                <input type="text" ref={pwRef} />
            </p>
        </div>
    );
};

export default Test6;