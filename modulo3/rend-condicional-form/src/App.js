
import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';
import styled from 'styled-components';

const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`


class App extends React.Component {
  state = {
    etapa: 1,
  }
  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>
        break
        case 2:
        return <Etapa2/>
        break
        case 3:
        return <Etapa3/>
        break
        default: 
        return <EtapaFinal/>
      break        
      
    }


    };

    irParaProximaEtapa = () =>{
        const adEtapa = this.state.etapa+1
        this.setState({etapa:adEtapa})
    }
    

  render(){
      
    
    return (
      <Form>
        
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Proxima etapa</button>
        
      </Form>
    )}
  }
export default App;
