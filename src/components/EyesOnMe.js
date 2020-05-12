import React from 'react';
export default class EyesOnMe extends React.Component {

    render(){
        let focus= "Good!"
        let blur= "Hey! Eyes on me!"
        return(
            <button onFocus={()=>this.log(focus)} onBlur={()=>this.log(blur)}>Button</button>
        )
    }

    log= (print) =>{
        console.log(print)
    }
}