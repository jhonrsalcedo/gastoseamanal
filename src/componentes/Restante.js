import React, {Component} from 'react';

class Restante extends Component{

    render(){
        return(
            <div className="alert alert-dismissible alert-danger">Restante: $ {this.props.restante}</div>
        )
    }
}

export default Restante;
