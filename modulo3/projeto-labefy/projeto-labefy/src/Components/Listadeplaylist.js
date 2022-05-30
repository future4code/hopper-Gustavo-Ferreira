import axios from "axios"
import React from "react"

class Listadeplaylist extends React.Component{
        state = {
            playlists:[]
        }

        renderizaPlaylists = () =>{
            axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")
            .then((response)=>{this.setState({playlists:response.data.result})})
            .catch((error)=>{console.log(response.error)})
        
        
        }

    render(){
        const playlist = this.state.playlists.map((lista)=>{
            

        })
        
        
        return(
            <div>
            

            </div>
        )
    }
} export default Listadeplaylist