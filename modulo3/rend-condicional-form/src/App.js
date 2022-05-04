
import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';
import styled from 'styled-components';

const Form = styled.div


class App extends React.Component {
  state = {
    etapa: 1,
  }
  RenderizaEtapa = () => {
    if (this.state.etapa == 1) {
      return <Etapa1/>
    } else if (this.state.etapa == 2) {
      return <Etapa2/>
    } else if(this.state.etapa == 3) {
      return <Etapa3/>
    } else {
      return <EtapaFinal/>
    }


    };

    irParaProximaEtapa = () =>{
        const adEtapa = Number(this.state.etapa)+1
        this.setState({etapa:adEtapa.toString()})
    }
    

  render(){
      
    
    return (
      <div>
        
        {this.RenderizaEtapa()}
        <button onClick={this.irParaProximaEtapa()}>Proxima etapa</button>
        
      </div>
    )}
  }
export default App;
