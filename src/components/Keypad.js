// Code Keypad Component Here

import React, { Component } from "react";

export default class CodeKeypad extends Component {
    
    
   thing = () => console.log('Entering password...')
   
    
    
    render(){
        return (
        
        <input 
        onKeyUp={this.thing}
        type="password">
        </input>
        
        )
    }
}