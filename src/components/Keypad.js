// Code Keypad Component Here

import React  from 'react'


export default class Keypad extends React.Component{
    handleKeyUp=()=>{
       return console.log('Entering password...')
    }
render(){
return(
  <div> <input type='password' onKeyUp={this.handleKeyUp}></input></div> 
)
}

}