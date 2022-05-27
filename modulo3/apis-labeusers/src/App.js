import React from 'react';
import IntegracaoApi from './IntegracaoApi'
import AddUsuario from './AddUsuario';
import './App.css'


class App extends React.Component {
  state ={
    trocaDeTela: 1
  }


  abreLista = () =>{
    this.setState({trocaDeTela:1})
  }

  abreAddUser = () =>{
    this.setState({trocaDeTela:2})
  }

  renderizaTela = () =>{
    switch (this.state.trocaDeTela){
      case 1: return <IntegracaoApi/>
      break
      case 2: return  <AddUsuario/>
    }


  }

  render(){
  
    
  
  return (
    <div>
    <header className='header'>
    <button onClick={this.abreLista}>Ir para lista de usuarios</button>
    <h2>Lista de usuarios</h2>
    <button onClick={this.abreAddUser}>adcionar usuario</button>
    </header>
    <div className='lista'>
    {this.renderizaTela()}
    </div>
    </div>
  );
}}

export default App;
