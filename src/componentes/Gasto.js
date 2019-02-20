import React, {Component} from 'react';


class Gasto extends Component{
    
    render(){
        const {cantidadGastoValue, nombreGastoValue} = this.props.gasto;
        return(
        <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
        {nombreGastoValue}
          <span className="badge badge-primary badge-pill badge-info">{cantidadGastoValue} </span>
        </li>
      </ul>



        )
    }
}

export default Gasto;