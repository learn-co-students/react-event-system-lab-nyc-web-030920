// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
    handleInputPw = () => {
        console.log("Entering password...")
    }
    
    render () {
        return (
            <div>
                <input onKeyUp={this.handleInputPw} type="password"></input>
            </div>
        )
    }
}

