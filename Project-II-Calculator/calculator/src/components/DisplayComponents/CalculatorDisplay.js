import React from 'react';
import './Display.css';



const DisplayObj = {
    numbers: [0,1,2,3,4,5,6,7,8,9],
    operators: ['+', '-', '*', '/', '=']
}

const CalculatorDisplay = props => {
    return (
       <div className='display'>0</div> 
    );
}


export default CalculatorDisplay;