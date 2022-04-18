import React, { useRef, useState } from 'react';

const Test5 = () => {
    const no = useRef(1)
    const textRef = useRef(null)

    const [ data , setData ] = useState([])
    const [ form , setForm ] = useState({
        text :'' , 
        age :'' 
    })
    const { text , age } = form 

    const changeInput = (e) => {
        const { value , name } = e.target 
        setForm({
            ...form ,
            [name] : value 
        })
    }
    const onAdd  = ( e )  => {
        e.preventDefault() 

        //공백처리 
        /*
        if( text.length === 0 || age.length === 0 ){
            return 
        }
        */
       if( !text || !age ) return 

        setData([
            ...data ,
            {
                id: no.current++ ,
                text  ,
                age 
            }
        ])
        setForm({
            text:'' ,
            age:''
        })
        textRef.current.focus() 
    }


    return (
        <div>
            <form onSubmit={ onAdd }>
                <input type="text" name="text" value={text} onChange={ changeInput }  ref={ textRef } />
                <input type="text" name="age" value={age} onChange={changeInput} />
                <button type="submit" >추가</button>
            </form>
            <hr/>
                <ul>
                    {
                        // id, name , age 
                        data.map( item => <li key={item.id}>
                            {item.id} / {item.text} / {item.age }
                        </li>)
                    }
                </ul>
            
        </div>
    );
};

export default Test5;