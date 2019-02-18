import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
// import Listado from './Listado';


class App extends Component {
//pasando los datos principales al componente principal
  //agregar nuevo gasto al state
  constructor(props){
    super(props);
    this.state={
      presupuestoListado: '',
      restanteListado:'',
      gastoListado:{}
    }
  }

  // Agregar un nuevo gasto al state
  agregarGastoFuncionListado = gastoNuevo =>{
    // tomar una copia del state 
    const gastosCopia = {...this.state.gastosListado}

    console.log('Se agrego el gasto ' + gastoNuevo);
    console.log(gastosCopia)

    // // agregar al gasto al objeto del state
    // gastos[`gastoListado${Date.now()}`] = gasto;
    
    // // console.log(gastos);

    // //ponerlo en state
    // this.setState({
    //   gastos
    // })
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
            agregarGasto= {this.agregarGastoFuncionListado}
        />
        
        </div>
        <div className="col-md-6">
     {/* <Listado
      gasto={this.state.gasto}
     /> */}
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
