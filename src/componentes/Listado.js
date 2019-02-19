import React, {Component} from 'react';
import Gasto from './Gasto';

class Listado extends Component{
    render(){
        return(
            <div>
                <h4 className="text-center">Listado</h4>
                {/* para interar en un objeto usamos map*/}
                  {console.log(this.props.gastoListado)}
                  <Gasto 
                    gasto={this.props.gastoListado}
                  />
                </div>
        )

    }
}

export default Listado;