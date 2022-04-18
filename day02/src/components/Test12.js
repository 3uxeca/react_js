import React, { useState } from 'react';

const Test12 = () => {
    const [ visible , setVisible ] = useState(false)

    const css1 = { padding: 20, fontSize: 20}
    const css2 = { width:400, height:150, margin:10, background:'tomato' }

    const onShow = ()  => {
        setVisible( true )
    }
    const onHide = ()  => {
        setVisible( false )
    }
    const onToggle = ()  => {
        setVisible( !visible )
    }

    return (
        <div>
            <p>
                <button style={css1} onClick={onShow}>보이기</button>
                <button style={css1} onClick={onHide}>숨기기</button>
                <button style={css1} onClick={onToggle}>                    
                    {
                        visible ? '숨기기' : '보이기'
                    }
                </button>
            </p>
            <hr />

            {
                visible === true ?  <div style={ css2 } /> : null
            }        
            <hr/>
            {
                visible && <div style={ css2 } />
            }
           
        </div>
    );
};

export default Test12;