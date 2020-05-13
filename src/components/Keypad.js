// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

  // create callback for event handler
  passwordInputHandler = () => console.log('Entering password...');
  

  render() {
    return (
      <div>
        <input onKeyUp={this.passwordInputHandler} type={"password"} placeholder={'Enter Password'}></input>
      </div>
    )
  }
}

// 1. In the `components/Keypad.js` file, create a `Keypad` React component.
// 2. In that component, render an `input` with the right type.
// 3. On that `input`, add an event handler that listens for the `keyUp` event.
// 4. When that event fires, use `console.log` to print out the text `'Entering password...'`.
