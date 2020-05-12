import React from 'react';
export default class Keypad extends React.Component {

    render(){

        return(
            <input type="password" onKeyUp = {this.log}/>
        )
    }

    log= ()=>{
console.log("Entering password...")
    }

}