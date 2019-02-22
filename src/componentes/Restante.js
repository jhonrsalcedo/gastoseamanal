import React, {Component} from 'react';
import {revisarPresupuesto} from './helper';

class Restante extends Component{
    render(){
        const presupuesto = this.props.presuspueto;
        const restante = this.props.restante;
        return(
            <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante: $ {this.props.restante}
            </div>
        )
    }
}

export default Restante;
