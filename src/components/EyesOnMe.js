// // Code EyesOnMe Component Here
import React, {Component} from 'React'

class ChromeBoisDomain extends Component {

  focus = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <div>
        <button onFocus={this.focus} onBlur={this.blur} >

        </button>
      </div>
    )
  }

}

export default ChromeBoisDomain