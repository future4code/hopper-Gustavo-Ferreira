import axios from "axios"
import React from "react"
import nota from "./Imagens/nota.png"

class Listadeplaylist extends React.Component{
        state = {
            playlists:[]
        }

        componentDidMount = () =>{
            this.renderizaPlaylists()
        }
        
        
        renderizaPlaylists = () =>{
            axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,{
            headers: {Authorization:"Gustavo-Anjos-Hopper"}
            })
            .then((response)=>{this.setState({playlists:response.data.result.list})})
            .catch((error)=>{console.log(`Eroooo ${error.response}`)})
        
        
        }

        apagaPlaylist = (id) =>{

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist${id}`,{
                headers: {Authorization:"Gustavo-Anjos-Hopper"}  
            })
            .then((response)=>{alert(`Playlist deleta!`)})
            .catch((error)=>{console.log(error)})
        }

    render(){
        
       

        const playlist = this.state.playlists.map((lista)=>{
            return <div><button onClick={this.apagaPlaylist(lista.id)}>X</button><img className="imgplaylist" src={nota}></img><h2>{lista.name}</h2><button>tocar</button></div>

        })
        
        
        return(
            <div className="listadeplaylists">
            {playlist}
            </div>
        )
    }
} export default Listadeplaylist