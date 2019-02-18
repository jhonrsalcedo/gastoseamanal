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
  agregarGasto = gasto =>{
    // tomar una copia del state 
    const gastos = {...this.state.gastos}

    // console.log('Se agrego el gasto ' + gasto);
    // console.log(gastos)

    // agregar al gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    
    console.log(gastos);

    //ponerlo en state
    this.setState({
      gastos
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
            agregarGasto = {this.agregarGasto}
        />
        
        </div>
        <div className="col-md-6">
     
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
