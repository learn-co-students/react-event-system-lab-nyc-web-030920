// // Code EyesOnMe Component Here
import React, {Component} from 'React'

class ChromeBoisDomain extends Component {

  handleFocus = () => {
    console.log('Good!')
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} >

        </button>
      </div>
    )
  }

}

export default ChromeBoisDomain