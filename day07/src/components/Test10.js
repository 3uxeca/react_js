import styled from 'styled-components'
import { useState } from 'react';

const Container = styled.div`
    border:1px solid #000; padding:25px; margin:20px auto;
    width: ${ props => props.w} ;
    h2 {
        font-size:40px ; text-align: center ;
    }
`
const Button = styled.button`
    font-size:50px; margin:5px; padding:0 30px 25px; border:none; cursor: pointer;

    &.up::after { content:"📤"}
    &.down::after { content:"📥"}

    &:hover {
        background:tomato; 
    }

    &:disabled {
        filter: grayscale(100%) ;
        background:#666;
        cursor: not-allowed;
    }
`


const Test10 = () => {
    const [ count , setCount ] = useState( 1 )
    const [ max ] = useState( 10 )
    const [ min ] = useState( 0 )

    const increment = ()  => {
        setCount( count > max ?  max : count + 1  )
    }
    const decrement = ()  => {
        setCount( count < min ? min : count - 1 )
    }

    return (
        <Container w="300px">
            <h2> 카운트 : { count } </h2>        
            <Button className="down" onClick={ decrement } disabled={ count === min }>   </Button>
            <Button className="up" onClick={ increment } disabled={ count === max }>   </Button>
        </Container>
    );
};

export default Test10;