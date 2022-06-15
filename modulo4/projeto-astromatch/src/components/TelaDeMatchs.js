import React from "react"
import { useRequestData } from "../hooks/useRequestData"

function TelaDeMatchs () {

    const [match,loading,error]  = useRequestData("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gustavo/person")


    return(
        <>
            {/*imagem,nome,idade e bio retornadas da api*/}
            <main>
            
            <section>
            <img src={!loading && match && match.photo}></img>
            <p>{!loading && match && match.name},{!loading && match && match.age}</p>
            <p>{!loading && match && match.bio}</p>
            </section>
           {/*botões para dar metch ou recusar um pretendente*/}
            <section>
            <button>Não</button>
            <button>Sim</button>
            </section>

            </main>

        </>
    )}
    
    export default TelaDeMatchs