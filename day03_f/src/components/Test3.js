import React, { useState } from 'react';

const Test3 = () => {
    const datalist = [
        {id:1 , name:'유재석', age:20, addr:'서울', done:false },
        {id:2 , name:'최우식', age:22, addr:'제주', done:true },
        {id:3 , name:'김다미', age:10, addr:'강원', done:false },
        {id:4 , name:'김다솔', age:30, addr:'울산', done:false },
        {id:5 , name:'송혜교', age:32, addr:'경기', done:true },
    ]

    const [ data , setData ] = useState( datalist )
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>이름</td>
                        <td>나이</td>
                        <td>주소</td>
                        <td>참여여부</td>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        data.map( (item, index ) => <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.addr}</td>
                        <td>{item.done ? '참여':'미참여'}</td>
                    </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default Test3;