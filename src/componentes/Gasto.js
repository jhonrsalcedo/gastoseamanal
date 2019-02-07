import React, {Component} from 'react';


class Gasto extends Component{
    
    render(){
        console.log(this.props.gasto)
        const cantidadGasto = this.props.gasto.cantidadGastoRef;
        const  nombreGasto = this.props.gasto.nombreGastoRef;

        console.log(cantidadGasto);
        console.log(nombreGasto);
        return(
            <li>
                {nombreGasto}
                <span>{cantidadGasto}</span>


            </li>
        )
    }
}

export default Gasto;