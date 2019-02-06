import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {
  //crear el state se puede de dos formas 

  // constructor(prosp){
  //   super(prosp);
  //   // donde state siempre es el objeto
  //   this.state = {
  //     presupueto: '',
  //     restante: '',
  //     gastos: {}
  //   }
  // }
  state ={
        presupueto: '',
        restante: '',
        gastos: {}
      }



// agregar un nuevo gasto al state
  agregarGasto = gasto =>{
    // tomar una copia del state actual
    const gastos = {...this.props.gastos}


    // console.log('Se agrego el gasto'+ gasto)
    // console.log(gastos);
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
        // en los formularios podemos pasar funciones, state
        //podemos nombrar el props con el mismo nombre del metodo para no confundirse
        agregarGasto = {this.agregarGasto}

        />
        
        </div>
        <div className="col-md-6">col-6</div>
       
       </div>

       
       </div>
       
       </div>
      </div>
    );
  }
}

export default App;
