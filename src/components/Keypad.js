// Code Keypad Component Here

import { Component } from "react";

export default class Keypad extends Component{

    handlesKeyUp = ()=>{
        console.log('Entering password...')
    }

    render(){
        <input onKeyUp={this.handlesKeyUp} type="password" />
    }


}