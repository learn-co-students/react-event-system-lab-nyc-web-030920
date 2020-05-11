// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{

    render(){
        return(
            <div>
                <input type="password" onKeyUp={(e) => {console.log("Entering password...")}}>

                </input>
            </div>
        ) 
    }
}