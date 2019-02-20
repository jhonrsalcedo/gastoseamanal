import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';


class App extends Component {
//pasando los datos principales al componente principal
  //agregar nuevo gasto al state
  constructor(props){
    super(props);
    this.state={
      presupuestoListado: '',
      restanteListado:'',
      gastos:{}
    }
  }

  // Agregar un nuevo gasto al state
  agregarGastoFuncionListado = gasto =>{
    // tomar una copia del state 
    const copiaGasto = {...this.state.gastos}

    // console.log('Se agrego el gasto ' + gastoNuevo);
    // console.log(gastosCopia)

   // agregar al gasto al objeto del state
   copiaGasto[`gasto${Date.now()}`] = gasto;
    
    // console.log(gastosCopia);

    //ponerlo en state
    this.setState({
      gastos: copiaGasto
    })
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
