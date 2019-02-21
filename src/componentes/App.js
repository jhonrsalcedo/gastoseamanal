import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from './helper';

class App extends Component {
//pasando los datos principales al componente principal
  //agregar nuevo gasto al state
  constructor(props){
    super(props);
    this.state={
      presupuesto: '',
      restante:'',
      gastos:{}
    }
  }
// se recomienda que para los componentDidMount etc... no tenerlos cargados y por lo tanto crear un metodos que este los llame 
componentDidMount(){
  this.obtenerPresupuesto();
}

obtenerPresupuesto = () => {
  let presupuesto = prompt('Cual es el presupuesto?');
  // console.log(presupueto)
  let resultado = validarPresupuesto(presupuesto);
  if (resultado) {
    console.log("valido")
    this.setState({
      presupuesto: presupuesto,
      restante: presupuesto
    })
  }else{
    this.obtenerPresupuesto();
  }
}


  // Agregar un nuevo gasto al state
  agregarGastoFuncionListado = gasto =>{
    // tomar una copia del state 
    const copiaGasto = {...this.state.gastos}

    // console.log('Se agrego el gasto ' + gastoNuevo);
    // console.log(copiaGasto)

   // agregar al gasto al objeto del state
   copiaGasto[`gasto${Date.now()}`] = gasto;
    
    // console.log(copiaGasto);

    //restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGastoValue);

    //ponerlo en state
    this.setState({
      gastos: copiaGasto
    })

  }

//Restar del presupuesto cuando un gasto se crea
restarPresupuesto = cantidad => {
  //pasar string cantidad a number
  let restar = Number(cantidad);

  let restante = this.state.restante;
  restante -= restar;

  console.log(restante);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-8 offset-md-2">
       <Header 
        titulo="Gastos Semanal"
       />
       
       <div className="row jumbotron">
        <div className="col-md-6">
        <Formulario
            agregarGasto = {this.agregarGastoFuncionListado}
        />
        
        </div>
        <div className="col-md-6">
     <Listado
      gastos={this.state.gastos}
     />
     <ControlPresupuesto
      presupuesto={this.state.presupuesto}
      restante={this.state.restante}
     />
        <div/>
        
        </div>
       
       </div>

       
       </div>
       
       </div>
      </div>
    );
  }
}

export default App;
