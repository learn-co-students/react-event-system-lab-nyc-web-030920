// Code Keypad Component Here

import React from 'react';

//1. create a Keypad React component
class Keypad extends React.Component
{
    // When that event fires, use console.log to print out the text 'Entering password...'.
    handleKeyUp = () => console.log('Entering password...')
    
    
    //2. In that component, render an input with the right type.
    render()
    {
        return(
            <div>
            {/* 3. On that input, add an event handler that listens for the keyUp event. */}
                <input type='password' onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default Keypad;