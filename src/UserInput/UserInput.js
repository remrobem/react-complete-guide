import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type='text' onChange={props.changed} value={props.userName} style={props.style} />
        </div>
    )
}

export default userInput;