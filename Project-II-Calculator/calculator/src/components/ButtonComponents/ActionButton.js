import React from 'react';
import './Button.css';



const ActionButton = props => {
    console.log(JSON.stringify(props))
    return (
        <div className={`${props.styleName}` }>
        {props.action}
        </div>
    );
}

export default ActionButton;