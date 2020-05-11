// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{
    render(){
        return (
            <div>
            <button 
            onFocus={(e) => {console.log("Good!")}}
            onBlur={(e) => {console.log("Hey! Eyes on me!")}}
            > Submit
            </button>
            </div>
        )
    }
}