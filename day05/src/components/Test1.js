import React, { useState } from 'react';

const dataList  = [
    {id:1, name:'chk1', text:'연령(만 14세 이상) 확인(필수)', isChecked:false},
    {id:2, name:'chk2', text:'증권플러스 이용약관(필수)', isChecked:false},
    {id:3, name:'chk3', text:'개인정보 수집 및 이용에 대한 동의(필수)', isChecked:false},
    {id:4, name:'chk4', text:'이벤트 우대혜택 등의 안내(선택)', isChecked:false},
]

const Test1 = () => {
    const [ data , setData ] = useState( dataList )
    const changeInput = (e) => {
        const { name , checked  } = e.target 
        if( name === 'all') {
            setData( data.map( item => {
                return {
                    ...item ,
                    isChecked : checked
                }
            }) )
        }else {
             //선택한 name이 동일하면 isChecked의 true/false 갱신 (변경)
        setData( data.map( item => item.name === name ? 
            {...item , isChecked:checked }: item ))
        }
    }
    return (
        <div>
            <p>
                <input type="checkbox" name="all" 
                checked = { 
                    data.filter( item  => item.isChecked !== true ).length < 1 
                 }
                onChange={ changeInput } />
                <label>약관동의</label>
            </p>
            <hr/>
            
            {
                data.map( item  => <p key={item.id} >
                    <input type="checkbox" name={item.name} checked={item.isChecked } onChange={ changeInput } />
                    <label> {item.text} </label>
                </p>  )
            }
                       
        </div>
    );
};

export default Test1;