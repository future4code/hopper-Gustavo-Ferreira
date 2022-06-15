import axios from "axios"
import React, {useState, useEffect} from "react"

export function useRequestData(url,x){
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState(undefined)
    const [error,setError] = useState("")
    
    useEffect(()=>{
        novoData()
    },[])

    useEffect(()=>{
        novoData()
    },[x])
    
    const novoData = () =>{
        setIsLoading(true)
        axios
        .get(url)
        .then((res)=>{setData(res.data.profile); setIsLoading(false)})
        .catch((err)=>{setError(err.data); setIsLoading(false)})
    }
        return [data,isLoading,error]
}
