import React from "react"
import styled from "styled-components"

const Campos = styled.div`
display: flex;
flex-direction: column;
`

class Etapa2 extends React.Component{
render(){
    return(
        <Campos>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>
            <input></input>
            <p>6. Qual a unidade de ensino?</p>
            <input></input>
        </Campos>
    )
}
    
}

export default Etapa2