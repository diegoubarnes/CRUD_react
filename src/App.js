import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Crea Tu Sofkiano",
      act: 0,
      index: '',
      datos: []
    }
  }
  componentDidMount() {
    this.refs.name.focus();
  }
  fSumbmit = (e) => {
    e.preventDefault();
    let datos = this.state.datos;
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let habilidad = this.refs.habilidad.value;

    if (this.state.act === 0) { //new
      let dato = {
        name, description, habilidad
      }
      datos.push(dato);
    } else {
      let index = this.state.index;
      datos[index].name = name;
      datos[index].description = description;
      datos[index].habilidad = habilidad;

    }


    this.setState({
      datos: datos,
      act: 0
    });
    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datos = this.state.datos;
    datos.splice(i, 1);
    this.setState({
      datos: datos
    });

    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let dato = this.state.datos[i];
    this.refs.name.value = dato.name;
    this.refs.description.value = dato.description;
    this.refs.habilidad.value = dato.habilidad;

    this.setState({
      act: 1,
      index: i
    });
    this.refs.name.focus();
  }

  render() {
    let datos = this.state.datos;
    return (
      <div className="app container">
        <div className="jumbotron">
          <h2>{this.state.title}</h2>
          <form ref="myform" className="myform">
            <input type="text" ref="name" placeholder="Ingresa tu Nombre" className="form-control form-control-lg m-2" />
            <input type="text" ref="description" placeholder="Ingresa tu Descripcion" className="form-control form-control-lg  m-2" />
            <input type="text" ref="habilidad" placeholder="Ingresa tu Habilidad" className="form-control form-control-lg m-2" />
            <button onClick={(e) => this.fSumbmit(e)} className="btn btn-lg btn-danger btn-block">Crear</button>
          </form>
          <pre>
            <table id="userList" class="table table-bordered table-hover table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Habilidades</th>
                  <th scope="col">Eliminar</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((dato, i) =>

                  <tr key={i} >
                    <td>{i + 1}</td>
                    <td>{dato.name}</td>
                    <td>{dato.description}</td>
                    <td>{dato.habilidad}</td>
                    <td> <button onClick={() => this.fRemove(i)} className="btn btn-danger">Eliminar</button></td>
                    <td><button onClick={() => this.fEdit(i)} className="btn btn-danger">Editar</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </pre>
        </div>
      </div>

    );
  }
}

export default App;

