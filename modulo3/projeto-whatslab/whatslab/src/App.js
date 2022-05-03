import React from "react";
import "./styles.css"





class BarraDeMensagens extends React.Component{
state = {
    pessoas: [
        {
            usuario:"",
            mensagem:""    
        }
    ],

    valorImputUsuario:"",
    valorImputMensagem:""

};

adicionaMensagem = () => {
    const novaMensagem = {
        usuario: this.state.valorImputUsuario,
        mensagem: this.state.valorImputMensagem
    };

    const novoMensagem = [...this.state.pessoas, novaMensagem]

    this.setState({pessoas: novoMensagem})
};

onChangeImputUsuario = (event) => {
    this.setState({valorImputUsuario: event.target.value});


};

onChangeImputMensagem = (event) => {
    this.setState({valorImputMensagem: event.target.value});


};
 
limpaCampo = () =>{
    const o = this.state.valorImputMensagem
    if (o === true) {
        this.setState({
            usuario:"",
            mensagem:"" 
        })
    }
};
   


render(){

    const listaDeMensagens = this.state.pessoas.map((pessoas) =>{
    return (
        <div> 
            <p>{pessoas.usuario}</p> 
            <p> {pessoas.mensagem}</p> 
        </div>
        
    );
    }
    
    
    
    );

 return(

<div className="appConteiner">
    
    <div className="Tela">{listaDeMensagens}</div>
    <div className="campo">
        <input className="usuario"
        value={this.state.valorImputUsuario}
        onChange={this.onChangeImputUsuario}
        placeholder={"Usuario"}
        />
        <input className="mensagem"
        value={this.state.valorImputMensagem}
        onChange={this.onChangeImputMensagem}
        placeholder={"Mensagem"}
        />
        <button className="enviar" onClick={this.adicionaMensagem}>Enviar</button>
    </div>
</div>);
}
}

export default BarraDeMensagens