import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FormularioGasto extends Component{
    constructor(props){
        super(props);
        this.state ={
            nombreGastoValue: '',
            cantidadGastoValue:''
        }
    }
    handleSubmit = (e) =>{
        //prevenir el default
        e.preventDefault();
      
        //crear el objeto con los datos
        const gastoForm = this.state
        //  
        //agregarlo y enviarlo por props
        this.props.agregarGasto(gastoForm);
        // console.log(gastoForm);
        //resetear el formulario
     this.setState({
        nombreGastoValue: '',
        cantidadGastoValue:''
     })
         
    }

    HandleGastosInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            //se le crea el evento onSubmit y se le agrega un metodo
            <form onSubmit={this.handleSubmit}>
                <h4>Agrega tus gastos aqui</h4> <br></br>
                <div className="form-group row">
                <label>Nombre Gasto</label>
                <input className="form-control" type="text" name="nombreGastoValue" onChange={this.HandleGastosInput} value={this.state.nombreGastoValue} placeholder="Ej. Transporte" />
                </div>
                <div className="form-group row">
                <label>Cantidad</label>
                <input className="form-control" type="text" name="cantidadGastoValue" onChange={this.HandleGastosInput} value={this.state.cantidadGastoValue} placeholder="Ej. 300" />
                </div>
                <input  className="btn btn-primary col-md-6 col-lg-4" value="Agregar" type="submit"/>
            </form>
        )
    }
}

//Proptypes
FormularioGasto.propTypes ={
    agregarGasto: PropTypes.func.isRequired
}

export default FormularioGasto;