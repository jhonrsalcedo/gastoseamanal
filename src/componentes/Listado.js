import React, {Component} from 'react';
// import Gasto from './Gasto';

class Listado extends Component{
    render(){
        return(
            <div>
                <h4 className="text-center">Listado</h4>
                   {console.log(this.props.gastos)}
                </div>
        )

    }
}

export default Listado;