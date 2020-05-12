// Code EyesOnMe Component Here
import React, { Component } from 'react';

// 1. In the components/EyesOnMe.js file, create a EyesOnMe React component.
class EyesOnMe extends Component{

    // 4. When the focus event fires, use console.log to print out the text 'Good!'.
    onFocus = () => {
        console.log('Good!')
    }

    // 5. When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
    onBlur = () => {console.log('Hey! Eyes on me!')}

    render()
    {
        return(
            <div>
            {/* 2. In that component, render a button. */}
            {/* 3. On that button, add event handlers that listens for the focus and blur events */}
                <button onFocus={this.onFocus} onBlur={this.onBlur} >Eyes on me, please! </button>
            </div>
        )
    }
}

export default EyesOnMe;