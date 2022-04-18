import React, { useRef, useState } from 'react';

const Test2 = () => {
    const idRef = useRef()

    const [ form , setForm ] = useState({
        userid :'' ,
        userpw :'' ,
        useremail :''
    })
    const { userid , userpw, useremail } = form 

    const handleChange = (e) => {
        const { value, name } = e.target 
        setForm({
            ...form ,
            [name] : value 
        })
    } 
    const onReset = () => {
       setForm({
           userid:'' ,
           userpw:'' ,
           useremail:'' 
       })
       idRef.current.focus()
    }
    return (
        <div>    
            <input type="text" onChange={ handleChange } name="userid" value={userid} ref={idRef} />
            <input type="text" onChange={ handleChange } name="userpw" value={userpw} />
            <input type="text" onChange={ handleChange } name="useremail" value={useremail} />
            <button onClick={onReset}>초기화</button>
            <hr />
            <h3>
                아이디 : { userid } /
                비번 : { userpw} /
                이메일  { useremail }  
            </h3>
        </div>
    );
};

export default Test2;