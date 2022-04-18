
import { useEffect } from 'react';
const Message = ({ show, msg , setShow }) => {
    useEffect( () => {
        const timer  = setTimeout( () => {
            setShow( false )
        }, 2000 )

        return() => {
            clearTimeout( timer )
        }
    },[msg])

    return (
        <>
            <div className={`message ${show ? 'on':''}`}>
                {msg}
            </div>   
        </>
    );
};

export default Message;