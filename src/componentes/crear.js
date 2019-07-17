import React, { Component } from 'react';

class Crear extends Component {
    render(){
        return(
            <form ref ="myform" >
                <div className = "form-group col-md-2">
                        <input type = "submit" className = 
                        "btn btn-lg btn-info btn-block"
                        value = "Inicio"/>
                </div>
                <div className = "row justify-content-center">
                    <div className = "form-group col-md-12">
                        <input ref= "name" type = "text" className = 
                        "form-control form-control-lg" 
                        placeholder = "Inserta Tu Nombre"/>
                    </div>
                    <div className = "form-group col-md-12">
                        <input ref= "description" type = "text" className = 
                        "form-control form-control-lg" 
                        placeholder = "Inserta Una Descripcion"/>
                    </div>
                    <div className = "form-group col-md-12">
                        <input ref= "habilidad" type = "text" className = 
                        "form-control form-control-lg" 
                        placeholder = "Inserta Habilidades Separadas Por Coma"/>
                    </div>
                    <div onClick = {(e)=>this.fsubmit(e)} className = "form-group col-md-2">
                        <input type = "submit" className = 
                        "btn btn-lg btn-danger btn-block"
                        value = "Guardar..."/>
                    </div>
                </div>
            </form>
           
        );
}
}

export default Crear;