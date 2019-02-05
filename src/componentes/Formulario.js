import React, {Component} from 'react';

class FormularioGasto extends Component{
    //creamos los refs para los campos del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();
    crearGastos =(e) => {
        // prevenir el default
        e.preventDefault();
        //crear el objeto con los datos
        const gasto = {
            nombreGastoRef: this.nombreGastoRef.current.value,
            cantidadGastoRef: this.cantidadGastoRef.current.value
        }

        console.log(gasto);
        // agregarlo y enviarlo por props
        

        // resetear el formulario (opcional)
        e.currentTarget.reset();
    }

    render(){
        return(
            //se le crea el evento onSubmit y se le agrega un metodo
            <form onSubmit={this.crearGastos}>
                <h4>Agrega tus gastos aqui</h4> <br></br>
                <div className="form-group row">
                <label>Nombre Gasto</label>
                <input ref={this.nombreGastoRef} className="form-control" type="text" name=""  placeholder="Ej. Transporte" />
                </div>
                <div className="form-group row">
                <label>Cantidad</label>
                <input ref={this.cantidadGastoRef} className="form-control" type="text" name=""  placeholder="Ej. 300" />
                </div>
                <input  className="btn btn-primary col-md-4" value="Agregar" type="submit"/>
            </form>
        )
    }
}

export default FormularioGasto;