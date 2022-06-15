import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import TelaDeMatchs from './components/TelaDeMatchs';
import TelaInicial from './components/TelaInicial'

function App() {
  
 const [tela,setTela] = useState(true)

const escolheDeTela = (x) =>{
  if(x){return <TelaDeMatchs/>}
  else{return <TelaInicial/>}
}

const mudaTela = (value) =>{setTela(value)}


  
  return (
    <div>
      <section>
            <button onClick={()=>mudaTela(true)}>Pretendentes</button>
            <h2>AstroMatch</h2>
            <button onClick={()=>mudaTela(false)}>Matchs</button>
      </section>
      {escolheDeTela(tela)}
      <button>Limpar matchs e swipes</button>
    </div>
  );
}

export default App;
