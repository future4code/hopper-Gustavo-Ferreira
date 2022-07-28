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

const limpaMatchs = () =>{
  axios
  .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gustavo-Anjos-Hopper/clear")
  .then((res)=>{alert('Seu historico de matches foi apagado!')})
  .catch((err)=>{console.log(err)})
}
  
  return (
    <div className='main'>
      <main className='tela'>
      <section className='header'>
            <button onClick={()=>mudaTela(true)}>Pretendentes</button>
            <h2>AstroMatch</h2>
            <button onClick={()=>mudaTela(false)}>Matchs</button>
      </section>
      {escolheDeTela(tela)}
      <button onClick={limpaMatchs}>Limpar matchs e swipes</button>
      </main>

    </div>
  );
}

export default App;
