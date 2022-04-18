import React from 'react';

const Test2 = () => {
    //{키:값} , {속성:값} , {'font-size':'20px'} , font-size => fontSize , background-color=>backgroundColor
    const css1 = {
        backgroundColor : 'pink' ,
        padding : 15 ,
        border: '1px solid #000'
    }
    const css2 = { backgroundColor:'tomato',fontSize:25,margin:15,width:400, height:80, lineHeight:'80px', textAlign:'center', color:'#fff'}

    const css3 = { backgroundColor:'lime'}
    return (
        <>
            <p style={css1}>오늘은 토요일 입니다.</p>
            <p style={css2}>오늘은 토요일 입니다.</p>
            <p style={css3}>오늘은 토요일 입니다.</p>
            <p style={{backgroundColor:'hotpink', padding:10, margin:15, textIndent:20, color:'yellow'}}>오늘은 토요일 입니다.</p>
            <p>오늘은 토요일 입니다.</p>
        </>
    );
};

export default Test2;