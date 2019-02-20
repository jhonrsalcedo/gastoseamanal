import React, {Component} from 'react';


class Gasto extends Component{
    
    render(){
        const {cantidadGastoValue, nombreGastoValue} = this.props.gasto;
        return(
         <li>
             {nombreGastoValue} {cantidadGastoValue} 
         </li>
        )
    }
}

export default Gasto;