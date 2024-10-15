import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Score from '../components/Score.js'

import "../styles/Root.css"
import "../styles/Gameover.css"

import trophy from "../components/images/trofy.png"


import { useScoreContext } from "../hooks/useScoreContext";
import { useScore } from "../hooks/useScore.js";



export default function GameOver(){
    const {scores} = useScoreContext()
    const {update, error, isLoading} = useScore()
    const endGame = async() =>{
        await update()
    
    }
    return(
        <div className="container">
            <h1 className="title text-light">Game Over</h1>
            <div className="deadimage"> </div>

            <Score score={scores}/> 
            <div className="e-card playing">
            
  
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
            <img src={trophy } alt="champion" className="icon"></img>
            <br/>      
                Klassic
                <br/>
                <div className="name">1700</div> 
            </div>
            

            </div>
            
        </div>
    )
}