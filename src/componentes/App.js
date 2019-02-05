import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {
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
