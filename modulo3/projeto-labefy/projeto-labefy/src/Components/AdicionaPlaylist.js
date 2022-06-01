import axios from "axios"
import React from "react"

class AdicionaPlaylist extends React.Component{
state={
    inputName:""
}

inputName = (event) =>{
    this.setState({inputName:event.target.value})
}


criaPlaylist = () =>{

const body= {name:this.state.inputName}

axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,body,{
    headers:{Authorization:"Gustavo-Anjos-Hopper"}
})
.then((response)=>{this.setState({inputName:""})})
.catch((error)=>{alert(`Erro! já existe uma playlist com esse nome`)})


}

render(){

    return(
        <>
        <input value={this.state.inputName} onChange={this.inputName}></input>
        <button onClick={this.criaPlaylist}>Adicionar</button>
        </>

    )


}

} export default AdicionaPlaylist