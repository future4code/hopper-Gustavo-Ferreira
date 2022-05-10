import React from "react"
import styled from "styled-components"

const Campos = styled.div`
display: flex;
flex-direction: column;
`

class EtapaFinal extends React.Component{
render(){
    return(
        <Campos>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Campos>
    )
}
    
} export default EtapaFinal