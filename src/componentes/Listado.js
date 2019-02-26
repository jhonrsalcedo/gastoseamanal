import React, {Component} from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

class Listado extends Component{
    render(){
        return(
            <div>
                <h4 className="text-center">Listado</h4>
                {/* para interar en un objeto usamos map*/}
                  {Object.keys(this.props.gastos).map(key =>(
                      
                      <Gasto 
                      key={key}
                      gasto={this.props.gastos[key]}
                      />
                     
                  ) )}
               <br></br>
                </div>
        )

    }
}
Listado.propTypes ={
    gastos: PropTypes.object.isRequired
}
export default Listado;