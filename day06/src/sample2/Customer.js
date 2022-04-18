import React, { useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import './style.css'
import ListUser from './ListUser';

const userData = [
    {id:1 , name:'김태리', addr:'서울'},
    {id:2 , name:'남주혁', addr:'제주'},
    {id:3 , name:'보나', addr:'부산'},
    {id:4 , name:'최현욱', addr:'울산'},
    {id:5 , name:'김혜은', addr:'경기'},
]

const Customer = () => {
    const [ users , setUsers ] = useState( userData )
    const [ isEdit , setIsEdit ] = useState( false )
    const no = useRef( userData.length  + 1 )

    //삭제 
    const onDel  = ( id )  => {
        setUsers( users.filter( user => user.id !== id ))
    }

    return (
        <div className="Customer">
            {
                isEdit ? <EditUser />
                         :
                         <AddUser />
            }           
            <ListUser users={users} onDel={onDel} />
        </div>
    );
};

export default Customer;