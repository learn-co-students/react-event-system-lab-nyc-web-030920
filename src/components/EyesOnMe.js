// Code EyesOnMe Component Here

import { Component } from "react";

export default class EyesOnMe extends Component {


    handlesFocus = ()=>{
        console.log('Good!')
    }

    handlesBlur = ()=>{
        console.log('Hey! Eyes on me!')
    }

    render(){

        <button onFocus={this.handlesFocus} onBlur={this.handlesBlur} ></button>
    }

}