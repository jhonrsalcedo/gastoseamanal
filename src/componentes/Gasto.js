import React, {Component} from 'react';

class Gasto extends Component{
    render(){
        const {cantidadGasto, nombreGasto} = this.props.gasto;
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