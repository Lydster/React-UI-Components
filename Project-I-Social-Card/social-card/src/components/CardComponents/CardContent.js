import React from 'react';
import './Card.css';

function CardContent() {
    return (
    <div className='card-content'>
    <a className="allContentBottom" href='https://www.reactjs.org'>
        <h2>Get started with React</h2>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        </a>
        <a href="reactjs.org">reactjs.org</a>
    </div>
     
    )
}

export default CardContent;