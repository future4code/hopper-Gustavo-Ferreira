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
                        <img className="play" src="https://cdn.icon-icons.com/icons2/2024/PNG/512/music_player_play_icon_123828.png"></img>
                        <p>LabeFy</p>
                    </div>
                    <input></input>
                    <input type="checkbox" id="toggle"></input>
                    <label for="toggle" className="button"></label>
                </header>

            </div>
        )
    }
} export default Header