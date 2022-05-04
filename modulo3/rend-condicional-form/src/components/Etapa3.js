import React from "react"
import styled from "styled-components"

const Campos = styled.div`
display: flex;
flex-direction: column;
`
class Etapa3 extends React.Component{
render(){
    return(
    <Campos>
    <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
    <p>5. Por que não terminou um curso de graduação?</p>
    <input></input>
    <p>6. Você fez algum curso complementar?</p>
    <select></select>
    </Campos>
    )
}
    
} export default Etapa3