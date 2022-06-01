import React from "react"
import './Styled.css'
import Logo from './Imagens/Play.png'



class Header extends React.Component{
state = {

}


    render(){
        return(
            <div>
                <header className="header">
                    <div className="logo">
                        <img className="play" src={Logo}></img>
                        <h3>LabeFy</h3>
                    </div>
                    <input></input>
                    <input type="checkbox" id="toggle"></input>
                    <label for="toggle" className="button"></label>
                </header>

            </div>
        )
    }
} export default Header