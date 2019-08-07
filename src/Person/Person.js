import React from 'react';
import './Person.css';

// this is a stateless component 
// uses function, not class
// best practice is to use stateless as much as possible

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )

};

export default person;
