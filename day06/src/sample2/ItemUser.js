import React from 'react';

const ItemUser = ({user, onDel }) => {
    const {id, name ,addr } = user 
    return (
        <tr>       
           <td>{name}</td> 
           <td>{addr}</td> 
           <td>
               <button>수정</button>
               <button onClick={ ()  => onDel(id) }>삭제</button>
           </td> 
        </tr>
    );
};

export default ItemUser;