import React from 'react';
import { BiAlarmAdd, BiBellOff} from "react-icons/bi";
import Numeral from "numeral";
import moment from 'moment'

const Test2 = () => {
    return (
        <div>
            <p style={{fontSize:50, color:'tomato'}}>
                <BiAlarmAdd />
            </p>
            <p style={{fontSize:50, color:'skyblue'}}>
                <BiBellOff />
            </p>
            <h2> {Numeral(25000).format(0,0) } </h2>
            <h2> {Numeral(452000).format(0,0) } </h2>
            <h2> { moment('20220305').format('YYYY.MM.DD')   } </h2>
        </div>
    );
};

export default Test2;