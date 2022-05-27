import React from "react";
import axios from 'axios'

class IntegracaoApi extends React.Component{
state ={
    users:[]
}
    
    componentDidMount=()=>{
        this.pegaUsuarios()
    }
    
    pegaUsuarios = () =>{

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers:{Authorization:"Gustavo-Anjos-Hopper"}
      })
      .then((response)=>{this.setState({users:response.data})})
      .catch((error)=>{console.log(error.response.data)})
    }
    deletaUsuario = (id) =>{
        const pathParam = id

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
            headers:{Authorization:"Gustavo-Anjos-Hopper"}  
        })
        .then((response)=>{this.pegaUsuarios()})
        .catch((error)=>{alert("Erro ao tentar deletar usuario!")})
    
    }




render(){

const renderizaListaDeUsuarios = this.state.users.map((user)=>{
    return <div><h4>{user.name}</h4><button onClick={()=>this.deletaUsuario(user.id)}>Delete</button></div>

})

 return(
     <div>
     {renderizaListaDeUsuarios}
     </div>
 )

}

}

export default IntegracaoApi