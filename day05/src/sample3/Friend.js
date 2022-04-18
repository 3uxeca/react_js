import React, { useRef, useState } from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import dataList from '../assets/api/friendData';
import './style.css'

const Friend = () => {
    const no = useRef( dataList.length + 1 )
    const [data , setData] = useState( dataList )
    const [ isChk , setIsChk ] = useState( false )

    //삭제
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ))
    }
    const onRemove = ()  => {
        setData([])
    }
    const onRestore = () =>{
        setData(dataList)
    }

    //추가 
    const onAdd  = ( form )  => {
        form.id = no.current++ 
        setData([
            ...data ,
            form 
        ])
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원: {data.length} </h1>

             <p className="chk">
                 <input type="checkbox" checked={isChk} onChange={ e => setIsChk( e.target.checked )} />
                 {
                     isChk ? '추가 비활성':'추가 활성'
                 }
             </p>
             <FriendList  data={data} onDel={onDel} /> 
             <p className="btn">
                 <button onClick={ onRemove }>모두삭제</button>
                 <button onClick={ onRestore }>초기복구</button>
             </p>

             {
                 isChk && <FriendInput onAdd={onAdd} />                
             }

        </div>
    );
};

export default Friend;