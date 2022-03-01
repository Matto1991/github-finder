import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  // e:
  // evento HTML
  sendFormData = (e) => {
    e.preventDefault(); //previene el comportamiento por defecto de HTML
    this.props.searchUsers(this.state.text); //le pasa el valor del state text a la funcion searchUsers de App.js
    this.setState({ text: "" }); //despues de la busqueda, deja el text (barra de buscar usuarios) vacio
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  // Busca el input con name (en este caso text) y le asigna el value
  // Con el e (es un evento que genera este input "text") obtengo el name y le asigno el value

  render() {
    const {showClear, clearUsers} = this.props;

    return (
      <div>
        <form onSubmit={this.sendFormData} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear &&  <button // si valor de showClear es true (previamente estipulado en app.js) entonces se renderiza el boton
          className="btn btn-light btn-block"
          onClick={clearUsers} // cuando el usuario da clikc en el boton se le envian las props a clearUsers en App.js
        >
          Clear
        </button> }
       
      </div>
    );
  }
}

export default Search;
