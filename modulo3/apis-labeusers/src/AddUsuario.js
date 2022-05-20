import React from "react";
import axios from 'axios'


class AddUsuario extends React.Component{
state={
    inputName:'',
    inputEmail:''
}

addUser = () =>{

    const body = {
        name:this.state.inputName,
        email:this.state.inputEmail
    }
        
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
        headers:{Authorization:'Gustavo-Anjos-Hopper'}
    })
    .then((response)=>{alert("Usuario adcionado com sucesso!")})
    .catch((error)=>{alert("erro ao adcionar o usuario!")})



        }
        onChangeInputName = (event) => {
            this.setState({inputName:event.target.value})
        }

        onChangeInputEmail = (event) => {
            this.setState({inputEmail:event.target.value})
        }

render(){











return(
<div>
<input onChange={this.onChangeInputName} value={this.state.inputName} />
<input onChange={this.onChangeInputEmail} value={this.state.inputEmail}  />
<button onClick={this.addUser}>Criar novo usuario</button>
</div>



    )}} 
export default AddUsuario