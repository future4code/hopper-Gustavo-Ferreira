import './App.css';
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Listadeplaylist from './Components/Listadeplaylist';
import Musicasdaplaylist from './Components/Musicasdaplaylist';
import AdicionaPlaylist from './Components/AdicionaPlaylist'
import Header from './Components/Header';



class App extends React.Component {
  state={

  }
  
  
  render(){
  
  return (
    <div>
      <Header/>
      <Listadeplaylist/>
    </div>
  );
}}

export default App;
