import React,{useState} from "react"
import { useRequestData } from "../hooks/useRequestData"
import axios from "axios"
import "./Styled.css"

function TelaDeMatchs () {

    let [atualizaPretendente,setAtualizaPretendente] = useState(true) 
    const [match,loading,error]  = useRequestData("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gustavo-Anjos-Hopper/person",atualizaPretendente)

    
    const resultadoDoMatch = (result) =>{
        const body={
            "id":match.id,
            "choice":result

        }
        
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gustavo-Anjos-Hopper/choose-person",body)
        .then((res)=>{
            console.log(res.data)
            setAtualizaPretendente(!atualizaPretendente)
        })
        .catch((err)=>{
            console.log(err.data)
            setAtualizaPretendente(!atualizaPretendente)
        })
    }

    return(
        <>
            {/*imagem,nome,idade e bio retornadas da api*/}
            <main>
            
            <section className="pretendentes">
            <img className="img" src={!loading && match && match.photo}></img>
            <p>{!loading && match && match.name},{!loading && match && match.age}</p>
            <p>{!loading && match && match.bio}</p>
            </section>
           {/*botões para dar metch ou recusar um pretendente*/}
            <section>
            <button onClick={()=>resultadoDoMatch(false)}>Não</button>
            <button onClick={()=>resultadoDoMatch(true)}>Sim</button>
            </section>

            </main>

        </>
    )}
    
    export default TelaDeMatchs