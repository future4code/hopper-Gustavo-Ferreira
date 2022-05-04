import React from "react"
import styled from "styled-components"

const Campos = styled.div`
display: flex;
flex-direction: column;
`




class Etapa1 extends React.Component{
state = {
    opçoes: [
       { medioIncompleto: "Ensino médio incompleto",
       medioCompleto: "Ensino médio completo",
       superiorIncompleto: "Ensino superior incompleto",
       superiorCompleto: "Ensino superior completo"
    }
    ] 
}



render(){
   
   const opçoes1 = this.state.opçoes.map((op)=>{
       return (
           <div>
               <p>{op.medioIncompleto}</p>
           </div>
       )
   });

   const opçoes2 = this.state.opçoes.map((op)=>{
    return (
        <div>
            <p>{op.medioCompleto}</p>
        </div>
    )
});

const opçoes3 = this.state.opçoes.map((op)=>{
    return (
        <div>
            <p>{op.superiorIncompleto}</p>
        </div>
    )
});

const opçoes4 = this.state.opçoes.map((op)=>{
    return (
        <div>
            <p>{op.superiorCompleto}</p>
        </div>
    )
})
   
    return(
    <Campos>
        <h3>ETAPA1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual a sua idade?</p>
        <input></input>
        <p>3. Qual seu email?</p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option value="EI">{opçoes1}</option>
            <option value="EC">{opçoes2}</option>
            <option value="SI">{opçoes3}</option>
            <option value="SC">{opçoes4}</option>
        </select>
        

    </Campos>

    )
}   
    
    

}
export default Etapa1