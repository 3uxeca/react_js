import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {
    const datalist = [
        {id:1, name:'김다미'},
        {id:2, name:'최우식'},
        {id:3, name:'김성철'},
        {id:4, name:'김진주'},
        {id:5, name:'김도윤'},
    ]
    const [data,setData] = useState( datalist )

    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ))
    }
    const onAdd = (name) => {
        // setData([...data, {id:6 , name:name }])
        setData([...data, {id:6 , name }])
    }
    const onMod = (id) => {
        setData( data.map( item => item.id === id ? {...item ,name:'강호동'} : item ))
    }

    return (
        <div>
            <ul>
                {data.map( (item, index) => <li key={item}>
                    { item.id } / { item.name }
                </li>)}
            </ul>
            <hr/>
            <Test5Sub  onDel={onDel} onAdd={onAdd} onMod={onMod} />
        </div>
    );
};

export default Test5;