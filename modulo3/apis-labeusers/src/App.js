import React from 'react';
import IntegracaoApi from './IntegracaoApi'
import AddUsuario from './AddUsuario';
import styled from 'styled-components'

const header = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center
`


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
    {this.renderizaTela()}
    </div>
  );
}}

export default App;
