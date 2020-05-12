// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
onFoc = () => console.log('Good!')
onBlurr = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <div>
                <button onFocus={this.onFoc} onBlur={this.onBlurr}></button>
            </div>
        );
    }
}

export default EyesOnMe;
