import React, {Component} from 'react';


class Presupuesto extends Component{
    render(){
        return(
            <div className="btn btn-info disabled">Presupuesto: $ {this.props.presupuesto}</div>
        )
    }
}
export default Presupuesto;