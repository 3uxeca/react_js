import React, { useState } from 'react';
import CoffeeList from './CoffeeList';
import Menu from './Menu';
import dataList from '../assets/api/coffeeData'
import './style.css'

// const menuList = ['all', 'coldbrew', 'espresso','frappuccino','fizzio']
// const data = ['all', 'coldbrew', 'espresso','frappuccino','fizzio']
const data = ['all', ...new Set( dataList.map( item => item.name ) )]
console.log( data )

const Main = () => {
    // const [ data , setData ] = useState( menuList )
    // const [ data ] = useState( menuList )

    const [ coffeeData  , setCoffeeData ] = useState( dataList )

    const onView = (name)  => {
        if( name === 'all'){
            setCoffeeData( dataList )
        }else{
            setCoffeeData( dataList.filter( item => item.name === name ))
        }       
    }

    return (
        <div className="wrap">
            <h1> STARBUCKS MENU </h1>
            <Menu data={data} onView={onView } />
            <CoffeeList coffeeData={coffeeData} />
        </div>
    );
};

export default Main;