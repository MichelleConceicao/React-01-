import React, { Component } from "react";
import fruta from "./img/transferir.jpg";

export default class App extends Component {
  state = {
    nome: "Michelle",
    idade: "32",
    comida: "strogonoff",
    musica: [
      "Kell Smith - Era Uma Vez","Ana carolina - É Isso Aí","Avenged Sevenfold - Um pequeno Pedaço do Paraíso"
    ]
  };

  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
         <ul>
            <li>{this.state.musica[0]}</li>
            <li>{this.state.musica[1]}</li>
            <li>{this.state.musica[2]}</li>
        </ul>
        <img src={fruta} alt="Caqui" />
      </div>
    );
  }

}