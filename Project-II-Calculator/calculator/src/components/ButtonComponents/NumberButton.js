import React from 'react';
import './Button.css';

const NumberButton = props => {
   return (
    <div className={`${props.styleName}` }>
      <div>{props.number}</div>
    </div>
   );
}

export default NumberButton;