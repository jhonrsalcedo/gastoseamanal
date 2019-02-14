import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
// import Listado from './Listado';

class App extends Component {

  //agregar nuevo gasto al state


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
            agregarGastos = {this.agregarGastos}
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
