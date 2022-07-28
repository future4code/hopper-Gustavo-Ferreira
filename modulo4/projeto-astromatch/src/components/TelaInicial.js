import axios from "axios";
import { useEffect, useState } from "react";
import "./Styled.css"




function TelaInicial () {

   const [matches,setMatches] = useState([])
   
 useEffect(()=>{
    buscaListaDeMatchs()
 },[matches])

const buscaListaDeMatchs = () =>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gustavo-Anjos-Hopper/matches")
    .then((res)=>{
        setMatches(res.data.matches)
    })
    .catch((err)=>{
        console.log(err.data)
    })

   } 

   const listaDeMatchs = matches.map((list)=>{
        return <div className="matchs"><img className="imgmatchs" src={list.photo}></img><p>{list.name}</p></div>
   })

return(
    <div>
        {listaDeMatchs}
    </div>
)}

export default TelaInicial