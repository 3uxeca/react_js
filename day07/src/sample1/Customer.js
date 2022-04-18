import React, { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import './style.css'
import ListUser from './ListUser';
import Message from './Message';

const userData = [
    {id:1 , name:'김태리', addr:'서울'},
    {id:2 , name:'남주혁', addr:'제주'},
    {id:3 , name:'보나', addr:'부산'},
    {id:4 , name:'최현욱', addr:'울산'},
    {id:5 , name:'김혜은', addr:'경기'},
]

const Customer = () => {
    const [ users , setUsers ] = useState( 
        () => JSON.parse( localStorage.getItem('users')) || userData 
    )

    const [ isEdit , setIsEdit ] = useState( false )
    const [ current , setCurrent ] = useState({}) 
    const [ show , setShow ] = useState( false )
    const [ msg  , setMsg  ] = useState('')

    const no = useRef( userData.length  + 1 )

  
    useEffect( () => {
        localStorage.setItem('users' , JSON.stringify( users ))
    }, [users])


    //삭제 
    const onDel  = ( id )  => {
        setUsers( users.filter( user => user.id !== id ))
        setShow( true )
        setMsg( '출연진을 삭제했습니다. ')
    }
    //추가 
    const onAdd = ( form )  => {
        form.id = no.current++
        setUsers([ ...users , form ])
    }

    //수정상태 
    const onEdit  = ( user )  => {
        setIsEdit( true )
        setCurrent( user  )

        setShow( true )
        setMsg( '출연진을 수정하겠습니까?')
    }

    //갱신 
    const onUpdate  = ( data )  => {
        setIsEdit( false )
        setUsers( users.map( user => user.id === data.id ? data : user ))
        setShow( true )
        setMsg( '출연진을 수정했습니다.')
    }
    return (
        <div className="Customer">
            <Message  show={show } msg={msg} setShow={ setShow } />

            {
                isEdit ? <EditUser current={current} onUpdate={onUpdate}  setIsEdit={setIsEdit} />
                         :
                         <AddUser onAdd={onAdd} />
            }           
            <ListUser users={users} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;