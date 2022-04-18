import React, { useEffect } from 'react';

const Test10Sub = ({msg , isShow , setIsShow }) => {
    //3초후에 사라지기  : setTimeout , useEffect 
    useEffect( ()  => {
        const timer  = setTimeout( () => {
            setIsShow( false )
        } , 3000)
        return() => {
            clearTimeout( timer )
        }
    },[ isShow ])
    
    return (
        <>
            {
             isShow &&  <div style={{ background:'pink' , padding:'15px 30px', margin:20, fontSize:20}}>
             메세지 :  { msg }
         </div>   
            }
        </>
    );
};

export default Test10Sub;